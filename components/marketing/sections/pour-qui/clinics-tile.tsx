import { getTranslations } from "next-intl/server";
import { Languages } from "lucide-react";

// Cliniques audience visual — chat bubble snippet showing ES↔FR
// auto-translation. Compact preview of the chat multilingue capability
// (the same demo gets the full Section 9 treatment later).
//
// Chat content stays literal Spanish/French regardless of UI locale —
// the bubble pair illustrates a translation event, not localized copy.
// Only the role label below the avatar is translated.
export async function ClinicsTile() {
  const t = await getTranslations("pourQui.audiences.clinics.tile");

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-neutral-200 bg-white p-5 shadow-mockup">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
            <Languages
              size={15}
              strokeWidth={2}
              className="text-brand-blue-strong"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-brand-navy">
              María García
            </p>
            <p className="text-[10px] text-neutral-500">{t("role")}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-brand-blue/10 px-2 py-0.5">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-brand-blue-strong">
            ES ↔ FR
          </span>
        </div>
      </div>

      {/* Incoming Spanish + French translation */}
      <div className="mt-5 space-y-1.5">
        <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-neutral-200 bg-neutral-50 px-3.5 py-2.5">
          <p className="text-[13px] leading-snug text-brand-navy">
            Hola, ¿podría hablar con mi doctora hoy?
          </p>
        </div>
        <div className="ml-2 flex items-start gap-1.5">
          <span className="mt-0.5 rounded bg-brand-blue/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-brand-blue-strong">
            FR
          </span>
          <p className="text-[11px] italic leading-snug text-neutral-500">
            Bonjour, pourrais-je parler à ma docteure aujourd’hui ?
          </p>
        </div>
      </div>

      {/* Outgoing French + Spanish translation */}
      <div className="mt-4 space-y-1.5">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-brand-blue px-3.5 py-2.5">
          <p className="text-[13px] leading-snug text-white">
            Bien sûr Marie, je vous appelle à 14h.
          </p>
        </div>
        <div className="ml-auto mr-2 flex items-start justify-end gap-1.5">
          <p className="text-[11px] italic leading-snug text-neutral-500">
            Por supuesto Marie, la llamo a las 14h.
          </p>
          <span className="mt-0.5 rounded bg-brand-blue/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-brand-blue-strong">
            ES
          </span>
        </div>
      </div>
    </div>
  );
}
