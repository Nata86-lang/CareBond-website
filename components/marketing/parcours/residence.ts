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
    title: "Chaque information arrive à la bonne personne.",
    text: "CareBond relie soignants, médecins et familles en temps réel.",
    careTeam: "Infirmière",
    obsTitle: "Chambre 12 · Mme Morel",
    patient: "86 ans",
    bp: ["Tension", "135/80"],
    temp: ["Température", "37,1 °C"],
    lines: ["A bien mangé ce matin", "Tousse un peu depuis ce matin"],
    nurse: "De Sophie · 10:42",
    send: "Envoyer au médecin",
    sent: "Envoyé au médecin",
    pushDoctor: "Message de l’infirmière · Chambre 12",
    doctor: "Dr Marc Aubert",
    doctorRole: "Médecin",
    doctorReply: "Merci. Je passe la voir à 14 h.",
    pushFamily: `Message de la ${RESIDENCE}`,
    family: "Famille",
    familyMessage:
      "Bonjour Claire, votre maman va bien. Elle tousse un peu depuis ce matin, alors le médecin passe la voir cet après-midi. Nous vous tenons au courant.",
    ctaTitle: "Voir CareBond en action.",
    ctaButton: "Demandez une démonstration",
  },
  de: {
    eyebrow: "Alters- und Pflegeheim",
    title: "Jede Information erreicht die richtige Person.",
    text: "CareBond verbindet Pflegende, Ärzte und Familien in Echtzeit.",
    careTeam: "Pflegefachfrau",
    obsTitle: "Zimmer 12 · Frau Morel",
    patient: "86 Jahre",
    bp: ["Blutdruck", "135/80"],
    temp: ["Temperatur", "37,1 °C"],
    lines: ["Hat gut gefrühstückt", "Hustet seit heute Morgen etwas"],
    nurse: "Von Sophie · 10:42",
    send: "An den Arzt senden",
    sent: "An den Arzt gesendet",
    pushDoctor: "Nachricht der Pflege · Zimmer 12",
    doctor: "Dr. Marc Aubert",
    doctorRole: "Arzt",
    doctorReply: "Danke. Ich schaue um 14 Uhr bei ihr vorbei.",
    pushFamily: `Nachricht der ${RESIDENCE}`,
    family: "Familie",
    familyMessage:
      "Guten Tag Claire, Ihrer Mutter geht es gut. Sie hustet seit heute Morgen etwas, deshalb schaut der Arzt heute Nachmittag bei ihr vorbei. Wir halten Sie auf dem Laufenden.",
    ctaTitle: "CareBond in Aktion sehen.",
    ctaButton: "Demo anfragen",
  },
  it: {
    eyebrow: "Casa per anziani",
    title: "Ogni informazione arriva alla persona giusta.",
    text: "CareBond collega infermieri, medici e famiglie in tempo reale.",
    careTeam: "Infermiera",
    obsTitle: "Camera 12 · Sig.ra Morel",
    patient: "86 anni",
    bp: ["Pressione", "135/80"],
    temp: ["Temperatura", "37,1 °C"],
    lines: ["Ha fatto una buona colazione", "Ha un po’ di tosse da stamattina"],
    nurse: "Da Sophie · 10:42",
    send: "Invia al medico",
    sent: "Inviato al medico",
    pushDoctor: "Messaggio dell’infermiera · Camera 12",
    doctor: "Dott. Marc Aubert",
    doctorRole: "Medico",
    doctorReply: "Grazie. Passo a vederla alle 14.",
    pushFamily: `Messaggio dalla ${RESIDENCE}`,
    family: "Famiglia",
    familyMessage:
      "Buongiorno Claire, la sua mamma sta bene. Da stamattina ha un po’ di tosse, quindi il medico passerà a vederla nel pomeriggio. La teniamo aggiornata.",
    ctaTitle: "Scopri CareBond in azione.",
    ctaButton: "Richiedi una demo",
  },
  en: {
    eyebrow: "Care home",
    title: "Every update reaches the right person.",
    text: "CareBond connects nurses, doctors and families in real time.",
    careTeam: "Nurse",
    obsTitle: "Room 12 · Mrs Morel",
    patient: "Age 86",
    bp: ["Blood pressure", "135/80"],
    temp: ["Temperature", "37.1 °C"],
    lines: ["Ate a good breakfast", "Slight cough since this morning"],
    nurse: "From Sophie · 10:42",
    send: "Send to doctor",
    sent: "Sent to doctor",
    pushDoctor: "Message from the nurse · Room 12",
    doctor: "Dr Marc Aubert",
    doctorRole: "Doctor",
    doctorReply: "Thanks. I’ll come and see her at 2 pm.",
    pushFamily: `Message from ${RESIDENCE}`,
    family: "Family",
    familyMessage:
      "Hello Claire, your mother is doing well. She has had a slight cough since this morning, so the doctor will see her this afternoon. We’ll keep you updated.",
    ctaTitle: "See CareBond in action.",
    ctaButton: "Request a demo",
  },
  es: {
    eyebrow: "Residencia de mayores",
    title: "Cada novedad llega a quien la necesita.",
    text: "CareBond conecta a enfermeras, médicos y familias en tiempo real.",
    careTeam: "Enfermera",
    obsTitle: "Habitación 12 · Sra. Morel",
    patient: "86 años",
    bp: ["Presión", "135/80"],
    temp: ["Temperatura", "37,1 °C"],
    lines: ["Desayunó bien", "Tiene un poco de tos desde la mañana"],
    nurse: "De Sophie · 10:42",
    send: "Enviar al médico",
    sent: "Enviado al médico",
    pushDoctor: "Mensaje de la enfermera · Habitación 12",
    doctor: "Dr. Marc Aubert",
    doctorRole: "Médico",
    doctorReply: "Gracias. Paso a verla a las 14 h.",
    pushFamily: `Mensaje de la ${RESIDENCE}`,
    family: "Familia",
    familyMessage:
      "Hola, Claire: su madre está bien. Tiene un poco de tos desde la mañana, así que el médico pasará a verla esta tarde. La mantendremos al tanto.",
    ctaTitle: "Vea CareBond en acción.",
    ctaButton: "Solicitar una demostración",
  },
  ca: {
    eyebrow: "Residència de gent gran",
    title: "Cada novetat arriba a qui la necessita.",
    text: "CareBond connecta infermeres, metges i famílies en temps real.",
    careTeam: "Infermera",
    obsTitle: "Habitació 12 · Sra. Morel",
    patient: "86 anys",
    bp: ["Pressió", "135/80"],
    temp: ["Temperatura", "37,1 °C"],
    lines: ["Ha esmorzat bé", "Té una mica de tos des del matí"],
    nurse: "De la Sophie · 10:42",
    send: "Enviar al metge",
    sent: "Enviat al metge",
    pushDoctor: "Missatge de la infermera · Habitació 12",
    doctor: "Dr. Marc Aubert",
    doctorRole: "Metge",
    doctorReply: "Gràcies. Passo a veure-la a les 14 h.",
    pushFamily: `Missatge de la ${RESIDENCE}`,
    family: "Família",
    familyMessage:
      "Hola, Claire: la seva mare està bé. Té una mica de tos des del matí, així que el metge passarà a veure-la aquesta tarda. La mantindrem informada.",
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
