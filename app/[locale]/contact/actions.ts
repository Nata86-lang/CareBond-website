"use server";

import { z } from "zod";
import { CONTACT_FROM, CONTACT_TO, getResend, isEmailConfigured } from "@/lib/email";
import { locales } from "@/lib/i18n";

// Server-side schema. Mirrors (but is the source of truth for) the
// react-hook-form Zod schema used on the client. Honeypot must be
// empty — bots happily fill every visible-looking input, so a hidden
// "company_website" field catches the dumb majority for free.
const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(254),
  institution: z.string().trim().min(2).max(200),
  audience: z.enum(["ems", "spitex", "recovery", "hospitals", "clinics", "other"]),
  message: z.string().trim().min(10).max(2000),
  // El idioma sale de lib/i18n, no de una lista escrita a mano: cuando se
  // añadió el catalán esta lista se quedó con cinco y el formulario dejó de
  // funcionar en /ca — sin mostrar nada, porque el campo va oculto y su error
  // no se pinta en ninguna parte. Y `catch` evita que el idioma del visitante
  // llegue nunca a tumbar un contacto comercial: si no se reconoce, inglés.
  locale: z.enum(locales).catch("en"),
  // Honeypot — must stay empty
  company_website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export type ContactActionState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      reason: "validation" | "send_failed" | "rate_limited" | "spam";
      fieldErrors?: Partial<Record<keyof ContactInput, string>>;
    };

// Submit a contact form. Called from the client form via useActionState.
// Returns a discriminated state object the UI uses to render the next
// frame (success card, inline errors, or generic error).
export async function submitContactForm(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    // Honeypot trip — silently succeed so the bot thinks it landed
    if (
      typeof raw.company_website === "string" &&
      raw.company_website.length > 0
    ) {
      return { status: "error", reason: "spam" };
    }
    const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string") {
        fieldErrors[key as keyof ContactInput] = issue.message;
      }
    }
    return { status: "error", reason: "validation", fieldErrors };
  }

  const data = parsed.data;

  // Sin RESEND_API_KEY no se puede enviar nada. En desarrollo se registra en
  // consola y se devuelve éxito para poder probar la interfaz sin credenciales.
  //
  // En PRODUCCIÓN eso sería mentirle al visitante: veía «mensaje enviado» y no
  // salía ningún correo, así que un contacto comercial se perdía sin que nadie
  // se enterara. Mejor decir que ha fallado: el aviso de error da la dirección
  // de correo directa, que sí funciona.
  if (!isEmailConfigured) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[contact] RESEND_API_KEY no está configurada: el mensaje NO se ha enviado",
      );
      return { status: "error", reason: "send_failed" };
    }
    console.warn("[contact] RESEND_API_KEY missing — logging instead of sending");
    console.log("[contact] submission", data);
    return { status: "success" };
  }

  try {
    const resend = getResend();
    const subjectLine = `[CareBond] Demande de démo — ${data.institution}`;
    const audienceLabel: Record<typeof data.audience, string> = {
      ems: "EMS / Pflegeheim",
      spitex: "Spitex / Soins à domicile",
      recovery: "Récupération / réhabilitation",
      hospitals: "Hôpital",
      clinics: "Clinique privée",
      other: "Autre",
    };
    const text = [
      `Nouvelle demande de démo via carebond.ch`,
      ``,
      `Nom: ${data.name}`,
      `Email: ${data.email}`,
      `Institution: ${data.institution}`,
      `Type: ${audienceLabel[data.audience]}`,
      `Locale du visiteur: ${data.locale}`,
      ``,
      `Message:`,
      data.message,
      ``,
      `---`,
      `Répondre directement à ${data.email}`,
    ].join("\n");

    const result = await resend.emails.send({
      from: `CareBond <${CONTACT_FROM}>`,
      to: CONTACT_TO,
      replyTo: data.email,
      subject: subjectLine,
      text,
    });

    if (result.error) {
      console.error("[contact] resend error", result.error);
      return { status: "error", reason: "send_failed" };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return { status: "error", reason: "send_failed" };
  }
}
