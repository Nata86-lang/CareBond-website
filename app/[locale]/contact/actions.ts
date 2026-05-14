"use server";

import { z } from "zod";
import { CONTACT_FROM, CONTACT_TO, getResend, isEmailConfigured } from "@/lib/email";

// Server-side schema. Mirrors (but is the source of truth for) the
// react-hook-form Zod schema used on the client. Honeypot must be
// empty — bots happily fill every visible-looking input, so a hidden
// "company_website" field catches the dumb majority for free.
const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(254),
  institution: z.string().trim().min(2).max(200),
  audience: z.enum(["ems", "spitex", "hospitals", "clinics", "other"]),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(["fr", "de", "it", "en"]),
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

  // In dev without RESEND_API_KEY, log and return success so the UI is
  // testable without provisioning a real Resend account.
  if (!isEmailConfigured) {
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
