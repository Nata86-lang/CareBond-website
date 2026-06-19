"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import {
  submitContactForm,
  type ContactActionState,
} from "@/app/[locale]/contact/actions";

// Contact form — client component that wraps the server action with
// useActionState for progressive enhancement (form posts even with JS
// disabled) and renders inline field errors + a success card.
//
// react-hook-form is intentionally NOT used here: the form is short
// (5 fields), HTML5 + Zod-server-side validation covers it, and
// useActionState gives us free pending state. Avoids ~10 kB of client
// JS we don't need on this page.

const AUDIENCES = ["ems", "spitex", "recovery", "hospitals", "clinics", "other"] as const;

const INITIAL_STATE: ContactActionState = { status: "idle" };

export function ContactForm({ locale }: { locale: string }) {
  const t = useTranslations("contactForm");
  const baseId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    INITIAL_STATE,
  );
  // Track if we've actually submitted (state can be idle initially and
  // again if user resets, so we use this to decide whether to show the
  // success card vs the form).
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      setHasSubmitted(true);
      formRef.current?.reset();
    }
  }, [state.status]);

  if (hasSubmitted && state.status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-10 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
          <CheckCircle2
            size={28}
            strokeWidth={2}
            className="text-emerald-700"
            aria-hidden="true"
          />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-brand-navy sm:text-[1.75rem]">
          {t("success.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-600">
          {t("success.message")}
        </p>
        <button
          type="button"
          onClick={() => setHasSubmitted(false)}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transform-none motion-reduce:transition-none"
        >
          {t("success.again")}
        </button>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" && state.fieldErrors ? state.fieldErrors : {};
  const showGenericError =
    state.status === "error" && state.reason === "send_failed";

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-5"
      noValidate
    >
      {/* Hidden locale so the server action can route translations */}
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot — visually hidden but technically reachable for bots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={`${baseId}-company_website`}>
          Company website (leave empty)
        </label>
        <input
          id={`${baseId}-company_website`}
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id={`${baseId}-name`}
          name="name"
          label={t("fields.name.label")}
          placeholder={t("fields.name.placeholder")}
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          error={fieldErrors.name}
        />
        <Field
          id={`${baseId}-email`}
          name="email"
          label={t("fields.email.label")}
          placeholder={t("fields.email.placeholder")}
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          error={fieldErrors.email}
        />
      </div>

      {/* Institution */}
      <Field
        id={`${baseId}-institution`}
        name="institution"
        label={t("fields.institution.label")}
        placeholder={t("fields.institution.placeholder")}
        autoComplete="organization"
        required
        minLength={2}
        maxLength={200}
        error={fieldErrors.institution}
      />

      {/* Audience type — select */}
      <div>
        <label
          htmlFor={`${baseId}-audience`}
          className="block text-sm font-semibold tracking-tight text-brand-navy"
        >
          {t("fields.audience.label")}
        </label>
        <select
          id={`${baseId}-audience`}
          name="audience"
          required
          defaultValue=""
          className="mt-2 block h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-brand-navy shadow-sm transition-colors duration-150 focus-visible:border-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          aria-invalid={Boolean(fieldErrors.audience)}
        >
          <option value="" disabled>
            {t("fields.audience.placeholder")}
          </option>
          {AUDIENCES.map((a) => (
            <option key={a} value={a}>
              {t(`fields.audience.options.${a}`)}
            </option>
          ))}
        </select>
        {fieldErrors.audience && (
          <p className="mt-1.5 text-xs text-red-600">{fieldErrors.audience}</p>
        )}
      </div>

      {/* Message — textarea */}
      <div>
        <label
          htmlFor={`${baseId}-message`}
          className="block text-sm font-semibold tracking-tight text-brand-navy"
        >
          {t("fields.message.label")}
        </label>
        <textarea
          id={`${baseId}-message`}
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={2000}
          placeholder={t("fields.message.placeholder")}
          className="mt-2 block w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm leading-relaxed text-brand-navy shadow-sm transition-colors duration-150 focus-visible:border-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          aria-invalid={Boolean(fieldErrors.message)}
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-xs text-red-600">{fieldErrors.message}</p>
        )}
      </div>

      {/* Generic error banner */}
      {showGenericError && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {t("error.send_failed")}
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-neutral-500">
          {t("privacy")}
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-navy px-7 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#152547] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transform-none motion-reduce:transition-none"
        >
          {isPending ? (
            <>
              <Loader2
                size={14}
                strokeWidth={2.5}
                className="animate-spin"
                aria-hidden="true"
              />
              {t("submitting")}
            </>
          ) : (
            <>
              {t("submit")}
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  error?: string;
};

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required,
  minLength,
  maxLength,
  error,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold tracking-tight text-brand-navy"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className="mt-2 block h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-brand-navy shadow-sm transition-colors duration-150 placeholder:text-neutral-400 focus-visible:border-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        aria-invalid={Boolean(error)}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
