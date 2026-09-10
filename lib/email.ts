import nodemailer, { type Transporter } from "nodemailer";

// Envío de correo por SMTP de Infomaniak — el mismo buzón que ya usa el
// backend de producción para los avisos y los códigos de verificación.
//
// Antes esto iba por Resend, y no llegaba nunca: su remitente de pruebas
// (`onboarding@resend.dev`) solo entrega al correo con el que se registró la
// cuenta, así que a info@carebond.ch lo rechazaba. Verificar el dominio en
// Resend exigía tocar el DNS en SiteGround. Como el dominio YA tiene servidor
// de correo propio en Infomaniak y ya está autenticado, se envía por ahí: sin
// DNS que tocar y con un único secreto que configurar.
//
// Lo único obligatorio es SMTP_PASSWORD. El resto tiene valores por defecto
// que coinciden con los del backend, y se pueden sobrescribir por entorno.

const SMTP_HOST = process.env.SMTP_HOST ?? "mail.infomaniak.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const SMTP_USER = process.env.SMTP_USER ?? "no-reply@carebond.ch";
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

export const isEmailConfigured = Boolean(SMTP_PASSWORD);

// Address book — un único sitio del que tiran todas las plantillas.
//
// CONTACT_FROM: el buzón autenticado que envía. Tiene que pertenecer al
// dominio y coincidir con SMTP_USER, o Infomaniak rechaza el envío.
// CONTACT_TO: dónde aterrizan las peticiones de demo. Es la dirección
// pública que aparece en el pie y en los avisos legales.
export const CONTACT_FROM = process.env.CONTACT_FORM_FROM_EMAIL ?? SMTP_USER;
export const CONTACT_TO =
  process.env.CONTACT_FORM_TO_EMAIL ?? "info@carebond.ch";

let transporter: Transporter | null = null;

export function getTransporter(): Transporter {
  if (!SMTP_PASSWORD) {
    throw new Error(
      "SMTP_PASSWORD no está configurada. Añádela a .env.local (local) o a las variables de entorno del proyecto en Vercel.",
    );
  }
  // Se reutiliza entre invocaciones: en serverless el módulo sobrevive a
  // varias peticiones y abrir una conexión SMTP por correo es lento.
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // 587 negocia STARTTLS, no arranca cifrado
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });
  }
  return transporter;
}
