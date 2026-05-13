# TODO_VERIFY — Phase 1B claims audit

This document tracks claims in the marketing site that were either
**corrected** (because they were factually false per the backend
review of 2026-05-13) or **kept pending verification** (because the
backend reviewer didn't have evidence either way and a human owner
should confirm).

Source of truth for the corrections: backend audit by claude (the
Claude with read access to the actual CareBond codebase), 2026-05-13.

## ✅ CORRECTED (false claims removed in this commit)

### FAQ (`messages/*.json` → `faq.questions.*`)
- **q0 onboarding "3–6 semaines pour 50 résidents"** → replaced with
  generic "Nous accompagnons la migration et la formation. Calendrier
  défini après audit de l'institution."
- **q1 EMR compatibility "FHIR-compatible API"** → replaced with
  "API REST documentée. Synchronisation via webhooks et exports."
  HL7/FHIR explicitly marked as **à l'étude** for hospital module.
- **q3 pricing "Tarification par lit / par utilisateur, dégressive"**
  → replaced with "Devis personnalisé après une démo de 30 minutes."
  No pricing model committed publicly.
- **q4 cantonal coverage "Validés en Vaud, Genève, Berne et Zurich"**
  → replaced with "Conçue pour les exigences réglementaires suisses.
  Adaptations cantonales discutées au cas par cas."
- **q5 contract terms "12 mois minimum, mensuellement renouvelable,
  aucune pénalité après la première année"** → replaced with
  "Conditions négociées au cas par cas selon la taille et les
  besoins de l'institution."

### Section 8 Compliance (`messages/*.json` → `compliance.*`)
- **hosting pillar "Datacenters à Zurich et Genève"** → replaced with
  "Hébergement Suisse (Infomaniak, Genève). Les données patient ne
  quittent pas le territoire suisse."
- **encryption pillar "Clés cryptographiques gérées en Suisse, jamais
  partagées"** → replaced with "TLS 1.3 sur serveur suisse, chiffrement
  des sauvegardes au repos." Removed the HSM-grade implication.
- **audit pillar "Exports SOMED et formats validés par chaque canton"**
  → replaced with "Audit log immuable des accès et modifications.
  Exports cantonaux à venir."
- **trustLine "Audités annuellement"** → removed entirely. No external
  audit contract exists.

### Section 4 PourQui — Hôpitaux features
- **f0 "API ouverte · FHIR-compatible"** → replaced with "API REST
  documentée · Synchronisation via webhooks et exports. HL7/FHIR à
  l'étude."

### Section 7 Module Résidences — Audit pillar bullets
- **b3 "Format pré-validé pour SOMED et autorités cantonales"** →
  replaced with "Trace immuable des accès et modifications, exportable
  pour audit interne."

### Section 5 Platform bento — Audit description
- **"Chaque accès, chaque action tracée. Exports prêts pour les
  autorités cantonales, sans configuration"** → replaced with
  "Chaque accès, chaque action tracée. Audit log immuable, exportable
  pour vos audits internes."

## ✅ ADDED (true claims surfaced from the backend review)

### Section 4 PourQui — Spitex features
- **f0** now reads "Tournées avec GPS · Geofencing pour valider
  automatiquement les présences au domicile (feature 22-C)."
- **f1** now references "Rapports signés HMAC · Conformes aux
  exigences KVG/LAMal."

### Section 4 PourQui — EMS features
- **f2** now reads "Multi-équipes & RBAC granulaire · Direction,
  soignants, gardiens, chacun son niveau d'accès et son interface."

### Section 4 PourQui — Hôpitaux features
- **f1** now reads "Multi-services & RBAC granulaire · Cloisons
  étanches entre services. Permissions par rôle et département."

## 🚧 ROADMAP — declared as "bientôt" / under development

### Ordonnances électroniques (e-Prescription)
- Used in: Section 7 Module Résidences `rounds` pillar (5th bullet),
  Section 5 Platform bento `rounds` pillar description.
- Framing: **"Bientôt — Ordonnances électroniques pour prescripteurs
  autorisés, avec signature numérique cryptographique. En conformité
  avec les bonnes pratiques eHealth suisses."**
- Why this wording: under Swiss law (LPMéd, LPTh, OPMéd), only
  licensed physicians, dentists, midwives (within scope) and some
  veterinary practitioners can prescribe. The wording avoids
  "soignant" (which can mean nurse, who cannot prescribe under
  cantonal law) and instead uses "prescripteurs autorisés".
- Standards intentionally left soft ("bonnes pratiques eHealth
  suisses") rather than committing to specific frameworks (eMediplan,
  CDA-CH, IHE Switzerland profiles, Documedis) that the
  implementation may or may not adopt. When the implementation lands,
  update the copy with the actual standards supported.
- Human owner action: confirm the development scope, target launch
  window, and whether the feature is restricted to specific
  audiences (hospitals/clinics vs EMS/Spitex). The current copy
  surfaces it in Module Résidences + Platform bento `rounds`.

## ✅ CONFIRMED — verified working by founder (Natanael, 2026-05-13)

The backend Claude reviewer didn't have evidence either way on these
six items. The founder reviewed them on 2026-05-13 and confirmed all
of them are live, working features in the app today. No copy changes
needed — the marketing site already describes them as available.

### Livestream sur consentement — ✅ working
Patient-controlled livestream is implemented. Camera can be enabled
and disabled by the patient at any time. Used in Section 4 Spitex,
Section 5 bento (`platform.bento.pillars.livestream`),
`/platform/livestream` stub, family-phone mockup.

### Chat multilingue ES ↔ FR ↔ DE ↔ IT — ✅ working
Real-time translation pipeline is live. Used in Section 5 bento,
Section 9 dedicated feature spotlight, `/platform/chat-multilingue`
stub, clinics-tile demo, and the ChatDemo loop on the home page (the
home loop is a scripted ES↔FR demonstration; the underlying
translation pipeline works for all four locales).

### Family mini-reports — ✅ working
Auto-generated daily mini-reports are shipped. Families receive
their summary without the caregiver having to compose it manually.
Used in family-phone mockup, Section 6 Soigner sans silos, Section 4
Spitex feature.

### Patient SOS button — ✅ working
SOS feature is wired up in the patient app. Used in the patient-phone
mockup (the red SOS chip on the home screen grid).

### Mockup data numbers — ✅ feature working, numbers are illustrative
The dashboard component itself is shipped and works. The specific
numbers shown on the marketing mockup (20,000 patients, 2,393
professionals, 104 alerts, 21,567 devices, 6,987 conversations,
4,896 families, 5.5K first-time, 3.5K return users, 12-month bar
chart) are illustrative values for the marketing visual — they are
**not** claims about current customer counts. The macbook chrome
reads "carebond.ch" so a reasonable visitor reads them as a product
demo, not a financial disclosure. No annotation needed.

### Hero trust strip "Swiss Made" — ✅ confirmed by founder
The four chips (Conforme nLPD · Hébergement Suisse · Chiffrement
bout-en-bout · Swiss Made) are confirmed accurate by the founder.
**Side-note for the founder's awareness:** in Switzerland, "Swiss
Made" is governed by the federal Swissness law (Loi sur la
protection des marques, Ordonnance sur l'utilisation des indications
de provenance suisses). For services and software, eligibility
typically requires the company to be headquartered in Switzerland and
the bulk of the work performed locally — both conditions are
straightforward for CareBond. No action needed; mentioning only so
the term's legal scope is on the record.

### Patient names in mockups — illustrative, intentional
Marie G., Sophie L., Pierre M., Jean R., Anna T., María García are
illustrative sample residents. The email `natanael@carebond.ch`
visible in the dashboard recent-activity feed uses the founder's
first name on purpose — it personalizes the demo. No action needed.

## Process for review

1. Open this file with the founder or product owner.
2. For each item still under "🚧 ROADMAP", mark either:
   - ✅ confirmed → no edit needed
   - 🔄 needs softer wording → propose alternative, edit i18n JSON
   - ❌ remove → strip from the relevant section
3. Once cleared, delete the resolved sections but keep this file as
   historical audit trail.
4. Verify the `NEXT_PUBLIC_SITE_URL` allow-list in `next.config.ts`
   still gates indexing — the site stays `X-Robots-Tag: noindex`
   until carebond.ch matches.

History:
- 2026-05-13 · Claude Code via backend audit — initial correction
  pass (FAQ, Compliance, PourQui, Module Résidences, Platform bento).
- 2026-05-13 · Natanael (founder) — confirmed the six items the
  backend auditor flagged as uncertain are all working features in
  production; moved them from "⚠️ pending verification" to
  "✅ confirmed working".
