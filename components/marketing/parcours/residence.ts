import type { Experience, Keyframe } from "./types";

// Footage: 367 frames. Keyframe positions measured on the final sequence.
const keyframes: Keyframe[] = [
  {
    id: "RES1",
    at: 0,
    scene: "Vue aérienne au coucher du soleil, la résidence et ses jardins",
    label: "Résidence Les Tilleuls",
    colors: ["#F2B880", "#D98A6A", "#4B5A3E"],
    light: { x: 0.75, y: 0.3, color: "#FFD9A0" },
  },
  {
    id: "RES2",
    at: 0.159,
    scene: "Entrée vitrée, hall lumineux en bois clair",
    label: "Accueil",
    colors: ["#F3E6D3", "#D9BFA0", "#8A6A4E"],
    light: { x: 0.5, y: 0.35, color: "#FFF3DC" },
  },
  {
    id: "RES3",
    at: 0.309,
    scene: "Couloir, infirmière de dos avec sa tablette",
    label: "Poste de soins",
    colors: ["#E3ECF5", "#B9C9DA", "#6D7E92"],
    light: { x: 0.5, y: 0.4, color: "#FFFFFF" },
  },
  {
    id: "RES4",
    at: 0.458,
    scene: "Cabinet médical, médecin de dos à son bureau",
    label: "Cabinet médical",
    colors: ["#E8EFE6", "#BFCDB8", "#5F6E5A"],
    light: { x: 0.8, y: 0.35, color: "#F7FFF0" },
  },
  {
    id: "RES5",
    at: 0.607,
    scene: "Sortie par la fenêtre, la ville au crépuscule",
    label: "Vers la ville",
    colors: ["#2E3A63", "#C97A5D", "#1E2436"],
    light: { x: 0.3, y: 0.55, color: "#FFB37A" },
  },
  {
    id: "RES6",
    at: 0.735,
    scene: "Appartement le soir, Claire lit son téléphone",
    label: "Chez Claire",
    colors: ["#2A2F45", "#8C5A3C", "#1B1A22"],
    light: { x: 0.65, y: 0.45, color: "#FFC27A" },
  },
  {
    id: "RES7",
    at: 0.863,
    scene: "Recul aérien à l’heure bleue, lac et montagnes",
    label: "Le soir venu",
    colors: ["#1D2C55", "#3E5A8A", "#0F1729"],
    light: { x: 0.5, y: 0.62, color: "#FFD9A8" },
  },
];

/** Every visible string of the Résidence journey, per site locale. */
interface ResidenceCopy {
  eyebrow: string;
  title: string;
  text: string;
  careTeam: string;
  obsTitle: string;
  patient: string;
  bp: [string, string];
  temp: [string, string];
  lines: [string, string];
  nurse: string;
  send: string;
  sent: string;
  pushDoctor: string;
  doctor: string;
  doctorRole: string;
  doctorReply: string;
  pushFamily: string;
  family: string;
  familyMessage: string;
  ctaTitle: string;
  ctaButton: string;
}

const RESIDENCE = "Résidence Les Tilleuls";

export const RESIDENCE_COPY: Record<string, ResidenceCopy> = {
  fr: {
    eyebrow: "Résidence · EMS",
    title: "Chaque information, à la bonne personne.",
    text: "CareBond relie l’équipe soignante, les médecins et les familles, en temps réel.",
    careTeam: "Équipe soignante",
    obsTitle: "Observation · Chambre 12",
    patient: "Mme Jeanne Morel, 86 ans",
    bp: ["TA", "135/80"],
    temp: ["Temp.", "37,1 °C"],
    lines: ["Bon appétit au petit-déjeuner", "Toux légère depuis ce matin"],
    nurse: "Sophie B., infirmière · 10:42",
    send: "Transmettre au médecin",
    sent: "Transmis au médecin",
    pushDoctor: "Nouvelle observation · Chambre 12",
    doctor: "Dr Marc Aubert",
    doctorRole: "Médecin",
    doctorReply: "Vu. Je passe la voir à 14 h pour l’ausculter.",
    pushFamily: `Message de la ${RESIDENCE}`,
    family: "Famille",
    familyMessage:
      "Bonjour Claire, votre maman va bien. Elle tousse un peu depuis ce matin : le Dr Aubert passe la voir cet après-midi. Nous vous tenons informée.",
    ctaTitle: "Voir CareBond en action.",
    ctaButton: "Demandez une démonstration",
  },
  de: {
    eyebrow: "Alters- und Pflegeheim",
    title: "Jede Information zur richtigen Person.",
    text: "CareBond verbindet Pflegeteam, Ärztinnen und Ärzte und Angehörige – in Echtzeit.",
    careTeam: "Pflegeteam",
    obsTitle: "Beobachtung · Zimmer 12",
    patient: "Frau Jeanne Morel, 86 Jahre",
    bp: ["BD", "135/80"],
    temp: ["Temp.", "37,1 °C"],
    lines: ["Guter Appetit beim Frühstück", "Leichter Husten seit heute Morgen"],
    nurse: "Sophie B., Pflegefachfrau · 10:42",
    send: "An den Arzt senden",
    sent: "An den Arzt gesendet",
    pushDoctor: "Neue Beobachtung · Zimmer 12",
    doctor: "Dr. Marc Aubert",
    doctorRole: "Arzt",
    doctorReply: "Gesehen. Ich komme um 14 Uhr vorbei und untersuche sie.",
    pushFamily: `Nachricht der ${RESIDENCE}`,
    family: "Angehörige",
    familyMessage:
      "Guten Tag Claire, Ihrer Mutter geht es gut. Sie hustet seit heute Morgen etwas; Dr. Aubert schaut heute Nachmittag bei ihr vorbei. Wir halten Sie auf dem Laufenden.",
    ctaTitle: "CareBond in Aktion sehen.",
    ctaButton: "Demo anfragen",
  },
  it: {
    eyebrow: "Casa per anziani · EMS",
    title: "Ogni informazione, alla persona giusta.",
    text: "CareBond collega il personale curante, i medici e le famiglie, in tempo reale.",
    careTeam: "Personale curante",
    obsTitle: "Osservazione · Camera 12",
    patient: "Sig.ra Jeanne Morel, 86 anni",
    bp: ["PA", "135/80"],
    temp: ["Temp.", "37,1 °C"],
    lines: ["Buon appetito a colazione", "Tosse leggera da stamattina"],
    nurse: "Sophie B., infermiera · 10:42",
    send: "Trasmetti al medico",
    sent: "Trasmesso al medico",
    pushDoctor: "Nuova osservazione · Camera 12",
    doctor: "Dott. Marc Aubert",
    doctorRole: "Medico",
    doctorReply: "Visto. Passo a visitarla alle 14.",
    pushFamily: `Messaggio dalla ${RESIDENCE}`,
    family: "Famiglia",
    familyMessage:
      "Buongiorno Claire, la sua mamma sta bene. Da stamattina tossisce un po’: il dott. Aubert passerà a visitarla nel pomeriggio. La terremo informata.",
    ctaTitle: "Scopri CareBond in azione.",
    ctaButton: "Richiedi una demo",
  },
  en: {
    eyebrow: "Care home · EMS",
    title: "Every update, to the right person.",
    text: "CareBond connects the care team, doctors and families, in real time.",
    careTeam: "Care team",
    obsTitle: "Observation · Room 12",
    patient: "Mrs Jeanne Morel, 86",
    bp: ["BP", "135/80"],
    temp: ["Temp.", "37.1 °C"],
    lines: ["Good appetite at breakfast", "Slight cough since this morning"],
    nurse: "Sophie B., nurse · 10:42",
    send: "Send to doctor",
    sent: "Sent to doctor",
    pushDoctor: "New observation · Room 12",
    doctor: "Dr Marc Aubert",
    doctorRole: "Doctor",
    doctorReply: "Seen. I’ll come by at 2 pm to examine her.",
    pushFamily: `Message from ${RESIDENCE}`,
    family: "Family",
    familyMessage:
      "Hello Claire, your mother is doing well. She has had a slight cough since this morning, so Dr Aubert will see her this afternoon. We’ll keep you posted.",
    ctaTitle: "See CareBond in action.",
    ctaButton: "Request a demo",
  },
  es: {
    eyebrow: "Residencia · EMS",
    title: "Cada información, a la persona indicada.",
    text: "CareBond conecta al equipo de cuidados, los médicos y las familias, en tiempo real.",
    careTeam: "Equipo de cuidados",
    obsTitle: "Observación · Habitación 12",
    patient: "Sra. Jeanne Morel, 86 años",
    bp: ["TA", "135/80"],
    temp: ["Temp.", "37,1 °C"],
    lines: ["Buen apetito en el desayuno", "Tos leve desde esta mañana"],
    nurse: "Sophie B., enfermera · 10:42",
    send: "Enviar al médico",
    sent: "Enviado al médico",
    pushDoctor: "Nueva observación · Habitación 12",
    doctor: "Dr. Marc Aubert",
    doctorRole: "Médico",
    doctorReply: "Visto. Paso a verla a las 14 h para auscultarla.",
    pushFamily: `Mensaje de la ${RESIDENCE}`,
    family: "Familia",
    familyMessage:
      "Buenos días, Claire: su madre está bien. Tiene un poco de tos desde esta mañana; el Dr. Aubert pasará a verla esta tarde. La mantendremos informada.",
    ctaTitle: "Vea CareBond en acción.",
    ctaButton: "Solicitar una demostración",
  },
  ca: {
    eyebrow: "Residència · EMS",
    title: "Cada informació, a la persona adequada.",
    text: "CareBond connecta l’equip assistencial, els metges i les famílies, en temps real.",
    careTeam: "Equip assistencial",
    obsTitle: "Observació · Habitació 12",
    patient: "Sra. Jeanne Morel, 86 anys",
    bp: ["TA", "135/80"],
    temp: ["Temp.", "37,1 °C"],
    lines: ["Bona gana a l’esmorzar", "Tos lleu des d’aquest matí"],
    nurse: "Sophie B., infermera · 10:42",
    send: "Enviar al metge",
    sent: "Enviat al metge",
    pushDoctor: "Nova observació · Habitació 12",
    doctor: "Dr. Marc Aubert",
    doctorRole: "Metge",
    doctorReply: "Vist. Passo a veure-la a les 14 h per auscultar-la.",
    pushFamily: `Missatge de la ${RESIDENCE}`,
    family: "Família",
    familyMessage:
      "Bon dia, Claire: la seva mare està bé. Té una mica de tos des d’aquest matí; el Dr. Aubert passarà a veure-la aquesta tarda. La mantindrem informada.",
    ctaTitle: "Vegeu CareBond en acció.",
    ctaButton: "Sol·licitar una demostració",
  },
};

/** The Résidence journey with its texts in the given locale (French when missing). */
export function residence(locale: string): Experience {
  const t = RESIDENCE_COPY[locale] ?? RESIDENCE_COPY.fr!;
  return {
    slug: "residence",
    name: "Résidence",
    ready: true,
    frameCount: 367,
    keyframes,
    cards: [
      { id: "hero", type: "hero", at: [0, 0.1], eyebrow: t.eyebrow, title: t.title, text: t.text },
      {
        id: "observation",
        type: "app",
        at: [0.27, 0.44],
        side: "left",
        tag: t.careTeam,
        title: t.obsTitle,
        subtitle: t.patient,
        fields: [
          { k: t.bp[0], v: t.bp[1] },
          { k: t.temp[0], v: t.temp[1] },
        ],
        lines: [...t.lines],
        meta: t.nurse,
        button: { label: t.send, sentLabel: t.sent },
        send: { to: "push-doctor", at: [0.38, 0.44] },
      },
      { id: "push-doctor", type: "push", at: [0.44, 0.5], side: "right", body: t.pushDoctor },
      {
        id: "reply-doctor",
        type: "reply",
        at: [0.47, 0.59],
        side: "right",
        author: t.doctor,
        role: t.doctorRole,
        time: "10:51",
        body: t.doctorReply,
      },
      { id: "push-family", type: "push", at: [0.69, 0.75], side: "right", body: t.pushFamily },
      {
        id: "family",
        type: "app",
        at: [0.73, 0.85],
        side: "right",
        tag: t.family,
        title: `${RESIDENCE} · 11:05`,
        body: t.familyMessage,
      },
      {
        id: "cta",
        type: "cta",
        at: [0.9, 1],
        title: t.ctaTitle,
        button: t.ctaButton,
        href: `/${locale}/contact`,
      },
    ],
  };
}
