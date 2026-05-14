import { Resend } from "resend";

// Thin wrapper around Resend so the rest of the codebase doesn't need
// to know which provider we use. RESEND_API_KEY is required in any
// environment that actually sends email; locally we tolerate it being
// missing and surface the absence at call time so the form UI is still
// testable without credentials.

const apiKey = process.env.RESEND_API_KEY;

export const isEmailConfigured = Boolean(apiKey);

export function getResend(): Resend {
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local (dev) or to Vercel project env (prod).",
    );
  }
  return new Resend(apiKey);
}

// Address book — kept here so future templates can reference a single
// source of truth instead of hard-coding addresses across files.
//
// CONTACT_FROM: the verified sender. Until carebond.ch is verified in
// Resend, this falls back to Resend's onboarding domain so dev sends
// still work. Switch to "contact@carebond.ch" once the domain DKIM/SPF
// records are added in Resend (Domains tab).
//
// CONTACT_TO: where demo requests land. Defaults to the public
// contact@carebond.ch published in the footer + JSON-LD.
export const CONTACT_FROM =
  process.env.CONTACT_FORM_FROM_EMAIL ?? "onboarding@resend.dev";
export const CONTACT_TO =
  process.env.CONTACT_FORM_TO_EMAIL ?? "contact@carebond.ch";
