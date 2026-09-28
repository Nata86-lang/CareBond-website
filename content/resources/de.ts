import type { Article } from "@/lib/resources";

// Editorial articles for the resources section. Every factual claim in here
// traces to an entry in its own `sources` array, each of which was fetched and
// checked to resolve. Do not add a claim without adding its source.
// Generated from researched drafts; edit freely, it is plain data.

export const articles: Article[] = [
  {
    "id": "data-protection",
    "slug": "revdsg-pflegeheim-pflichten",
    "locale": "de",
    "metaTitle": "revDSG: Datenpflichten für Pflegeheime und Spitex",
    "metaDescription": "Was das revidierte Datenschutzgesetz für Pflegeheime und Spitex vorsieht: Verzeichnis, Meldung an den EDÖB, Folgenabschätzung, Auftragsbearbeiter.",
    "h1": "revDSG: Was das Gesetz für ein Pflegeheim vorsieht, das Bewohnerdaten bearbeitet",
    "lead": "Das revidierte Datenschutzgesetz (revDSG) ist zusammen mit seiner Verordnung (DSV) seit dem 1. September 2023 in Kraft. Für ein Alters- und Pflegeheim oder eine Spitex-Organisation, deren Dossiers im Kern aus Daten bestehen, die das Gesetz als besonders schützenswert einstuft, stellt sich die Frage konkret: Welche Pflichten folgen daraus? Nachstehend steht, was die Erlasse vorsehen.",
    "sections": [
      {
        "heading": "Bundesrecht oder kantonales Datenschutzgesetz: Welcher Erlass gilt für eine Pflegeinstitution?",
        "paragraphs": [
          "Das DSG gilt für die Bearbeitung von Personendaten natürlicher Personen durch private Personen und durch Bundesorgane (Art. 2 Abs. 1 DSG). Bearbeitungen kantonaler und kommunaler Stellen richten sich dagegen nach kantonalem Recht, das von Kanton zu Kanton verschieden ist.",
          "Wie unterschiedlich die Grenze gezogen wird, zeigen zwei Westschweizer Beispiele. Der Kanton Waadt hält fest, sein LPrD betreffe ausschliesslich Datenbearbeitungen durch waadtländische kantonale oder kommunale Stellen sowie durch private Träger öffentlicher Aufgaben. Genf teilt anders ein: Das LIPAD erfasst die öffentlichen Institutionen des Kantons und der Gemeinden, wobei dessen Art. 3 Abs. 4 festhält, dass die Bearbeitung von Personendaten durch eine natürliche oder juristische Person des Privatrechts dem Gesetz nicht untersteht.",
          "Zwei benachbarte Einrichtungen können damit unterschiedlichen Regimes unterstehen. In Genf ist eine Revision des LIPAD in Vorbereitung; die kantonale Aufsichtsbehörde (PPDT) hat ein Informationsblatt zu den kommenden Änderungen veröffentlicht."
        ]
      },
      {
        "heading": "Gesundheitsdaten von Bewohnerinnen und Bewohnern: was die Einstufung als besonders schützenswert auslöst",
        "paragraphs": [
          "Art. 5 Bst. c DSG zählt zu den besonders schützenswerten Personendaten unter anderem Daten über die Gesundheit und die Intimsphäre, genetische Daten, biometrische Daten, die eine natürliche Person eindeutig identifizieren, sowie Daten über Massnahmen der sozialen Hilfe. Ein Bewohnerdossier vereint davon oft mehrere.",
          "Stützt sich eine Bearbeitung auf die Einwilligung, muss diese bei besonders schützenswerten Personendaten ausdrücklich erfolgen (Art. 6 Abs. 7 Bst. a DSG). Weiter ist es der Begriff der besonders schützenswerten Personendaten «in grossem Umfang», der mehrere der nachstehenden Pflichten auslöst — ohne dass DSG oder DSV diese Schwelle beziffern würden.",
          "Daneben bestehen das Berufsgeheimnis nach Art. 321 des Strafgesetzbuchs (unter anderem Ärzte, Pflegefachpersonen, Hebammen und ihre Hilfspersonen) und die kantonalen Regeln zur Aktenführung fort: In Genf sieht Art. 57 des Gesundheitsgesetzes eine Aufbewahrung von mindestens zehn Jahren ab der letzten Konsultation und eine Vernichtung nach spätestens zwanzig Jahren vor."
        ]
      },
      {
        "heading": "Verzeichnis der Bearbeitungstätigkeiten: Die Ausnahme für unter 250 Mitarbeitende gilt nicht automatisch",
        "paragraphs": [
          "Art. 12 Abs. 1 DSG verpflichtet Verantwortliche und Auftragsbearbeiter, je ein Verzeichnis ihrer Bearbeitungstätigkeiten zu führen. Dasjenige des Verantwortlichen enthält mindestens:",
          "Die DSV sieht eine Ausnahme vor, die häufig zu rasch gelesen wird: Privatrechtliche Organisationen mit weniger als 250 Mitarbeitenden am 1. Januar eines Jahres sind von der Verzeichnispflicht befreit — «ausser» es werden besonders schützenswerte Personendaten in grossem Umfang bearbeitet oder es wird ein Profiling mit hohem Risiko durchgeführt (Art. 24 DSV).",
          "Private melden ihr Verzeichnis dagegen nicht mehr dem EDÖB: Diese Meldepflicht trifft die Bundesorgane (Art. 12 Abs. 4 DSG)."
        ],
        "bullets": [
          "die Identität des Verantwortlichen und den Bearbeitungszweck;",
          "die Kategorien der betroffenen Personen, der bearbeiteten Daten und der Empfängerinnen und Empfänger;",
          "wenn möglich die Aufbewahrungsdauer und die Massnahmen zur Datensicherheit;",
          "bei Bekanntgabe ins Ausland den betreffenden Staat und die vorgesehenen Garantien."
        ]
      },
      {
        "heading": "Eine Verletzung der Datensicherheit dem EDÖB melden",
        "paragraphs": [
          "Art. 24 Abs. 1 DSG verlangt, eine Verletzung der Datensicherheit «so rasch als möglich» dem EDÖB zu melden, wenn sie voraussichtlich zu einem hohen Risiko für die Persönlichkeit oder die Grundrechte der betroffenen Person führt. Das Gesetz nennt keine bezifferte Frist, und nur solche Verletzungen sind zu melden.",
          "In seinem Leitfaden vom 6. Februar 2025 zu Art. 24 DSG hält der EDÖB fest, dass bei betroffenen besonders schützenswerten Personendaten, «z.B. Gesundheitsdaten, biometrische Daten oder Daten zur Sozialhilfe, in vielen Fällen von einem hohen Risiko auszugehen» sei; bei Ransomware-Angriffen werde je nach Umständen bereits in einer ersten Analyse von einem «voraussichtlich hohen Risiko» ausgegangen werden müssen. Die Meldung läuft über das Portal databreach.edoeb.admin.ch.",
          "Art. 15 DSV regelt den Inhalt der Meldung und verpflichtet dazu, Verletzungen zu dokumentieren; die Dokumentation ist ab der Meldung mindestens zwei Jahre aufzubewahren. Zwei Punkte gehen oft vergessen: Der Auftragsbearbeiter meldet dem Verantwortlichen jede Verletzung, ohne Risikofilter (Art. 24 Abs. 3), und der Verantwortliche informiert die betroffene Person, wenn es zu deren Schutz erforderlich ist oder der EDÖB es verlangt (Art. 24 Abs. 4)."
        ]
      },
      {
        "heading": "Datenschutz-Folgenabschätzung (DSFA): die vom Gesetz erfassten Fälle",
        "paragraphs": [
          "Art. 22 DSG verlangt vorgängig eine Datenschutz-Folgenabschätzung, wenn eine geplante Bearbeitung ein hohes Risiko für die Persönlichkeit oder die Grundrechte der betroffenen Person mit sich bringen kann. Ein solches Risiko liegt «namentlich» bei der umfangreichen Bearbeitung besonders schützenswerter Personendaten oder bei systematischer umfangreicher Überwachung öffentlicher Bereiche vor.",
          "Die Abschätzung ist nach Beendigung der Bearbeitung mindestens zwei Jahre aufzubewahren (Art. 14 DSV). Private Verantwortliche sind davon ausgenommen, wenn sie gesetzlich zur Bearbeitung verpflichtet sind (Art. 22 Abs. 4). Bleibt trotz der vorgesehenen Massnahmen ein hohes Risiko bestehen, ist vorgängig der EDÖB zu konsultieren; er teilt seine Einwände innerhalb von zwei Monaten mit (Art. 23). Die Art. 7, 22 und 23 gelten schliesslich nicht für Bearbeitungen, die vor Inkrafttreten des Gesetzes begonnen wurden, sofern der Bearbeitungszweck unverändert bleibt und keine neuen Daten beschafft werden (Art. 69 DSG)."
        ]
      },
      {
        "heading": "Der IT-Dienstleister ist Auftragsbearbeiter im Sinn des Gesetzes",
        "paragraphs": [
          "Fachanwendung, Hosting-Anbieter, Messaging-Werkzeug: Wer im Auftrag der Einrichtung Personendaten bearbeitet, ist Auftragsbearbeiter (Art. 5 Bst. k DSG). Art. 9 nennt die Voraussetzungen: Die Übertragung muss vertraglich oder durch die Gesetzgebung vorgesehen sein; es dürfen nur jene Bearbeitungen erfolgen, die der Verantwortliche selbst vornehmen dürfte; keine gesetzliche oder vertragliche Geheimhaltungspflicht darf die Übertragung verbieten; und der Verantwortliche muss sich vergewissern, dass der Auftragsbearbeiter die Datensicherheit gewährleisten kann.",
          "Der Auftragsbearbeiter darf die Bearbeitung nur mit vorgängiger Genehmigung des Verantwortlichen einem Dritten übertragen (Art. 9 Abs. 3 DSG); diese kann spezifischer oder allgemeiner Art sein. Bei einer allgemeinen Genehmigung informiert er über jede beabsichtigte Hinzuziehung oder Ersetzung weiterer Dritter, und der Verantwortliche kann Widerspruch erheben (Art. 7 DSV). Art. 61 Bst. b DSG bestraft auf Antrag mit Busse bis zu 250 000 Franken, wer die Datenbearbeitung vorsätzlich einem Auftragsbearbeiter übergibt, ohne dass diese Voraussetzungen erfüllt sind."
        ]
      },
      {
        "heading": "Protokollierung von Lesezugriffen und Bearbeitungsreglement: die am häufigsten übersehenen Anforderungen",
        "paragraphs": [
          "Zuerst die Protokollierung (Art. 4 Abs. 1 DSV): Werden besonders schützenswerte Personendaten in grossem Umfang automatisiert bearbeitet oder wird ein Profiling mit hohem Risiko durchgeführt, und können die präventiven Massnahmen den Datenschutz nicht gewährleisten, so protokollieren der private Verantwortliche und sein privater Auftragsbearbeiter zumindest das Speichern, Verändern, Lesen, Bekanntgeben, Löschen und Vernichten der Daten. Also auch das Lesen: wer ein Dossier eingesehen hat, nicht nur wer es verändert hat. Die Protokolle sind mindestens ein Jahr getrennt vom System aufzubewahren.",
          "Dann das Bearbeitungsreglement (Art. 5 DSV), für dieselben Bearbeitungen, aber ohne die Bedingung der präventiven Massnahmen: Ein Dokument beschreibt die interne Organisation, das Datenbearbeitungs- und Kontrollverfahren sowie die Massnahmen zur Datensicherheit. Beides dient den Zielen von Art. 2 DSV: Vertraulichkeit, Verfügbarkeit, Integrität und Nachvollziehbarkeit."
        ]
      },
      {
        "heading": "Was sich seit dem 1. September 2023 geändert hat — samt Sanktionen",
        "paragraphs": [
          "Für eine Einrichtung, die noch nach altem Recht organisiert ist, fasst das KMU-Portal des Bundes die wichtigsten Neuerungen zusammen:",
          "Die Sanktionen funktionieren schliesslich anders als jene der DSGVO: Das DSG kennt keine Verwaltungsbusse gegen das Unternehmen. Die Art. 60 bis 63 bestrafen bestimmte vorsätzliche Widerhandlungen mit Busse bis zu 250 000 Franken, im Wesentlichen auf Antrag; anstelle der strafbaren Personen kann der Geschäftsbetrieb nur verurteilt werden, wenn eine Busse von höchstens 50 000 Franken in Betracht fällt (Art. 64 Abs. 2). Verfolgung und Beurteilung obliegen den Kantonen."
        ],
        "bullets": [
          "erfasst sind nur noch die Daten natürlicher Personen, nicht mehr jene juristischer Personen;",
          "genetische und biometrische Daten gelten ausdrücklich als besonders schützenswert (Art. 5 Bst. c DSG);",
          "«Privacy by Design» und «Privacy by Default» werden zur gesetzlichen Pflicht (Art. 7 DSG);",
          "das Verzeichnis der Bearbeitungstätigkeiten wird obligatorisch, vorbehältlich Art. 24 DSV;",
          "Folgenabschätzung und Meldung von Verletzungen an den EDÖB sind neu (Art. 22 und 24 DSG);",
          "die Informationspflicht wird ausgeweitet: Bei jeder Beschaffung von Personendaten ist die betroffene Person vorgängig zu informieren."
        ]
      },
      {
        "heading": "Was das für die Wahl der Werkzeuge bedeutet",
        "paragraphs": [
          "Mehrere dieser Pflichten entscheiden sich in der Architektur der Systeme, nicht in einem Vertragsanhang.",
          "CareBond, Herausgeberin dieser Publikation, entwickelt eine Kommunikationsplattform für Pflegeinstitutionen, die in der Schweiz gehostet wird (Infomaniak, Genf), mit einem unveränderlichen Audit-Log der Zugriffe und Änderungen sowie einer HL7/FHIR-Integration. Wir halten keine Zertifizierung im Datenschutz und beanspruchen auch keine: Die Konformität hängt von den Bearbeitungen und der Organisation der Einrichtung ab, nicht von der Wahl einer Software."
        ]
      }
    ],
    "takeaways": [
      "Das DSG gilt für private Personen und Bundesorgane; kantonales Recht gilt für öffentliche Stellen, und sein Geltungsbereich unterscheidet sich zwischen Waadt und Genf.",
      "Die Verzeichnis-Ausnahme für Organisationen mit weniger als 250 Mitarbeitenden entfällt bei Bearbeitung besonders schützenswerter Personendaten in grossem Umfang (Art. 24 DSV).",
      "Dem EDÖB zu melden sind nur Verletzungen mit voraussichtlich hohem Risiko, und zwar «so rasch als möglich»: Das Gesetz nennt keine bezifferte Frist.",
      "Der Auftragsbearbeiter meldet dem Verantwortlichen jede Verletzung der Datensicherheit, unabhängig vom Risiko (Art. 24 Abs. 3 DSG).",
      "Die Protokollierung nach Art. 4 DSV erfasst auch das blosse Lesen eines Dossiers; die Protokolle sind mindestens ein Jahr getrennt vom System aufzubewahren."
    ],
    "disclaimer": "Allgemeine Information zum schweizerischen Datenschutzrecht, Stand 28. September 2026. Dieser Text ist keine Rechtsberatung: Die konkreten Pflichten hängen vom Kanton, vom Status der Einrichtung und von den betroffenen Bearbeitungen ab. Für eine bestimmte Situation sind die kantonale Datenschutzaufsicht, der EDÖB oder eine Rechtsberatung die zuständigen Ansprechpartner.",
    "sources": [
      {
        "label": "Bundesgesetz über den Datenschutz (DSG, SR 235.1), Stand am 1. September 2023 — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/de"
      },
      {
        "label": "Verordnung über den Datenschutz (DSV, SR 235.11), Stand am 1. September 2023 — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/de"
      },
      {
        "label": "EDÖB — Leitfaden betreffend die Meldung von Datensicherheitsverletzungen und Information der Betroffenen nach Art. 24 DSG, vom 6. Februar 2025 (Version 1.2 vom 23. April 2025, PDF)",
        "url": "https://www.edoeb.admin.ch/dam/de/sd-web/T64CAUyvAMcF/1_2%20Leitfaden%20des%20ED%C3%96B%20betreffend%20die%20Meldung%20von%20Datensicherheitsverletzungen%20und%20Information%20der%20Betroffenen%20nach%20Art.%2024%20DSG_DE.pdf"
      },
      {
        "label": "EDÖB — DataBreach: Meldeportal für Verletzungen der Datensicherheit",
        "url": "https://www.edoeb.admin.ch/de/databreach"
      },
      {
        "label": "EDÖB — DataReg: Meldung des Verzeichnisses der Bearbeitungstätigkeiten (Bundesorgane)",
        "url": "https://www.edoeb.admin.ch/de/datareg"
      },
      {
        "label": "KMU-Portal des Bundes — Neues Datenschutzgesetz (revDSG)",
        "url": "https://www.kmu.admin.ch/de/neues-datenschutzgesetz-revdsg"
      },
      {
        "label": "Genfer Gesetz über die Information der Öffentlichkeit, den Zugang zu Dokumenten und den Schutz von Personendaten (LIPAD, rsGE A 2 08), Art. 3",
        "url": "https://silgeneve.ch/legis/data/rsg_a2_08.htm"
      },
      {
        "label": "Genfer Gesundheitsgesetz (LS, rsGE K 1 03), Art. 57 — Aufbewahrung des Dossiers",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "PPDT Genf — Informationsblatt: neues LIPAD, die wichtigsten bevorstehenden Änderungen im Datenschutz",
        "url": "https://www.ge.ch/document/fiche-info-du-ppdt-nouvelle-lipad-principaux-changements-venir-matiere-protection-donnees-personnelles"
      },
      {
        "label": "Republik und Kanton Genf — Datenschutz und Transparenz (Rolle des PPDT)",
        "url": "https://www.ge.ch/organisation/protection-donnees-transparence"
      },
      {
        "label": "Kanton Waadt — Recht des Schutzes von Personendaten (Geltungsbereich des LPrD)",
        "url": "https://www.vd.ch/portail-securise-des-prestations-en-ligne/bonnes-pratiques-en-matiere-de-securite-informatique-et-de-protection-des-donnees-personnelles/droit-de-la-protection-des-donnees-personnelles"
      },
      {
        "label": "Schweizerisches Strafgesetzbuch (SR 311.0), Art. 321 — Verletzung des Berufsgeheimnisses",
        "url": "https://www.fedlex.admin.ch/eli/cc/54/757_781_799/de"
      }
    ]
  },
  {
    "id": "hosting",
    "slug": "gesundheitsdaten-hosting-schweiz",
    "locale": "de",
    "metaTitle": "Gesundheitsdaten: Hosting in der Schweiz Pflicht?",
    "metaDescription": "Was das DSG wirklich verlangt: keine allgemeine Pflicht zum Hosting in der Schweiz, aber strenge Bedingungen für die Bekanntgabe ins Ausland.",
    "h1": "Gesundheitsdaten in der Schweiz hosten: was das Gesetz wirklich verlangt",
    "lead": "«Müssen unsere Daten in der Schweiz bleiben?» Die Frage kommt in fast jeder Ausschreibung eines Alters- und Pflegeheims, einer Spitex-Organisation oder eines Spitals. Das Bundesrecht kennt keine allgemeine Pflicht, Gesundheitsdaten auf Schweizer Boden aufzubewahren: Es regelt ihre Bekanntgabe ins Ausland. Sektorielle und kantonale Vorschriften können dagegen eine Lokalisierung verlangen.",
    "sections": [
      {
        "heading": "Gibt es eine Pflicht, Gesundheitsdaten in der Schweiz zu hosten?",
        "paragraphs": [
          "Das Bundesgesetz vom 25. September 2020 über den Datenschutz (DSG, SR 235.1), in Kraft seit dem 1. September 2023 und verbreitet revDSG genannt, zählt «Daten über die Gesundheit» zu den besonders schützenswerten Personendaten (Art. 5 Bst. c Ziff. 2). Eine Lokalisierungsregel enthält es dagegen nicht: Geregelt sind die Voraussetzungen der Bekanntgabe ins Ausland (Art. 16 und 17).",
          "Lokalisierungspflichten gibt es, aber in Sonderordnungen. Die Verordnung vom 22. März 2017 über das elektronische Patientendossier (EPDV, SR 816.11) hält in Art. 12 Abs. 5 fest: «Die Datenspeicher müssen sich in der Schweiz befinden und dem Schweizer Recht unterstehen.» Die Bestimmung steht im Kapitel über die Gemeinschaften und Stammgemeinschaften des EPD, nicht bei den gewöhnlichen Bearbeitungen einer Einrichtung.",
          "Dazu kommt kantonales Recht: Einrichtungen, die eine übertragene öffentliche Aufgabe erfüllen, unterstehen häufig einem kantonalen Datenschutzgesetz, dessen Anforderungen an die Auslagerung von jenen des DSG abweichen. Die zuständige Freiburger Behörde erinnerte am 7. November 2024 daran, dass die Anerkennung zertifizierter US-Unternehmen auf diese Massnahmen nur begrenzte Auswirkungen hat."
        ]
      },
      {
        "heading": "Was das DSG für die Bekanntgabe von Daten ins Ausland vorsieht",
        "paragraphs": [
          "Art. 16 Abs. 1 DSG stellt den Grundsatz auf: Personendaten dürfen ins Ausland bekanntgegeben werden, wenn der Bundesrat festgestellt hat, dass die Gesetzgebung des betreffenden Staates einen angemessenen Schutz gewährleistet. Fehlt ein solcher Entscheid, zählt Abs. 2 die zulässigen Garantien auf: völkerrechtlicher Vertrag, Datenschutzklauseln in einem Vertrag, die dem Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) vorgängig mitgeteilt wurden, spezifische Garantien, vom EDÖB genehmigte Standarddatenschutzklauseln, verbindliche unternehmensinterne Datenschutzvorschriften. Art. 17 fügt Ausnahmen hinzu, deren Liste abschliessend ist.",
          "Unterschätzt wird die Definition der Bekanntgabe selbst. Nach Art. 5 Bst. e DSG ist Bekanntgeben «das Übermitteln oder Zugänglichmachen von Personendaten». Ein Fernzugriff aus dem Ausland — Nachtdienst, Wartung, Administration — fällt unter diese Definition, auch wenn die Server nicht bewegt werden.",
          "Der Verstoss wird sanktioniert, aber anders, als oft angenommen. Art. 61 DSG bestraft auf Antrag mit Busse bis zu 250 000 Franken private Personen, die vorsätzlich Personendaten unter Verstoss gegen Art. 16 ins Ausland bekanntgeben oder die Datenbearbeitung ohne die Voraussetzungen von Art. 9 einem Auftragsbearbeiter übergeben. Die Sanktion richtet sich gegen natürliche Personen; Art. 64 Abs. 2 DSG erlaubt es, an ihrer Stelle den Geschäftsbetrieb zu verurteilen, wenn die Busse 50 000 Franken nicht übersteigt."
        ]
      },
      {
        "heading": "Die Liste der Staaten mit angemessenem Datenschutz: wo sie steht und wie sie zu lesen ist",
        "paragraphs": [
          "Massgebend ist nicht die Liste der Europäischen Kommission, sondern Anhang 1 der Verordnung vom 31. August 2022 über den Datenschutz (DSV, SR 235.11), auf den deren Art. 8 Abs. 1 verweist. Aufgeführt sind die Staaten der Europäischen Union, Island, Liechtenstein, Norwegen und mehrere europäische Gebiete sowie Andorra, Argentinien, Kanada, Israel, Monaco, Neuseeland, das Vereinigte Königreich, Uruguay und die Vereinigten Staaten.",
          "Einzelne Einträge sind bedingt: Für Kanada gilt ein angemessener Schutz nur als gewährleistet, wenn im privaten Bereich das kanadische Bundesgesetz vom 13. April 2000 über den Schutz personenbezogener Daten und elektronischer Dokumente oder ein ihm weitgehend entsprechendes Provinzgesetz zur Anwendung gelangt. Und die Liste lebt: Art. 8 Abs. 4 und 6 DSV sehen eine periodische Neubeurteilung und die Änderung des Anhangs vor; die letzte Aktualisierung datiert vom 15. September 2024."
        ]
      },
      {
        "heading": "US-Anbieter: was das Data Privacy Framework abdeckt und was nicht",
        "paragraphs": [
          "Der Bundesrat stellte am 14. August 2024 fest, dass zertifizierte US-Unternehmen einen angemessenen Schutz bieten, mit Wirkung ab dem 15. September 2024. Der Eintrag in Anhang 1 ist eng gefasst: Ein angemessenes Schutzniveau gilt «für Personendaten, die von Organisationen bearbeitet werden, die gemäss den Grundsätzen des Datenschutzrahmens zwischen der Schweiz und den USA zertifiziert sind». Ein US-Unternehmen zu sein genügt nicht, und ebenso wenig die Zertifizierung allein für den europäischen Teil.",
          "Ein anderes Thema, das oft mit dem ersten verwechselt wird: die Jurisdiktion. Der CLOUD Act von 2018 hat 18 U.S. Code § 2713 eingeführt. Danach muss ein dem US-Recht unterstehender Anbieter die Pflichten zur Aufbewahrung, Sicherung und Herausgabe für Daten «within such provider's possession, custody, or control, regardless of whether [they are] located within or outside of the United States» erfüllen. Massgebend ist die Kontrolle, nicht der Standort der Festplatte. Und eine Angemessenheitsfeststellung klärt nur die Zulässigkeit der Übermittlung: Art. 8 und 9 DSG gelten unabhängig vom Land."
        ]
      },
      {
        "heading": "Was das Recht vom Vertrag mit dem Hosting-Anbieter erwartet",
        "paragraphs": [
          "Art. 9 DSG setzt den Rahmen: Die Bearbeitung kann vertraglich oder durch die Gesetzgebung einem Auftragsbearbeiter übertragen werden, sofern die Daten so bearbeitet werden, wie die Einrichtung selbst es tun dürfte, und keine Geheimhaltungspflicht die Übertragung verbietet. Der Verantwortliche muss sich vergewissern, dass der Auftragsbearbeiter die Datensicherheit gewährleisten kann; die Weitergabe an einen Dritten setzt eine vorgängige Genehmigung voraus (Art. 7 DSV).",
          "Der EDÖB hält fest, dass die Anbieterin von Cloud-Diensten in der Regel als Auftragsbearbeiterin handelt, und schlägt Prüffragen vor: Ist sie vertraglich verpflichtet, Personendaten nur auf dokumentierte Weisung hin zu bearbeiten? Regelt der Vertrag deren Löschung oder Rückgabe nach Vertragsende? Verantwortlich, erinnert die Behörde, bleibt der Verantwortliche auch dann, wenn er die Bearbeitung einem Dritten überträgt.",
          "Ohne Angemessenheitsfeststellung zählt Art. 9 DSV den Mindestinhalt der Klauseln auf: Rechtmässigkeit, Verhältnismässigkeit, Transparenz und Zweckbindung; Kategorien der Daten und der betroffenen Personen; Empfängerstaaten; Aufbewahrung und Löschung; Datensicherheit; Meldung von Verletzungen; Rechte der betroffenen Personen. Das Verzeichnis der Bearbeitungstätigkeiten nennt den Empfängerstaat und die Garantien nach Art. 16 Abs. 2 (Art. 12 DSG), die auch in der Information der betroffenen Personen erscheinen (Art. 19 Abs. 4 DSG)."
        ]
      },
      {
        "heading": "«Hosting in der Schweiz»: was damit nicht geregelt ist",
        "paragraphs": [
          "Der Serverstandort beantwortet eine einzige Frage, jene der Übermittlung; über die tatsächliche Sicherheit sagt er nichts. Art. 8 DSG verlangt dem Risiko angemessene Massnahmen; die DSV setzt vier Ziele (Art. 2) — Vertraulichkeit, Verfügbarkeit, Integrität, Nachvollziehbarkeit — und beschreibt die erwarteten Massnahmen (Art. 3), von der Zugriffskontrolle bis zum Schliessen bekannter kritischer Lücken. Sicherungskopien, Testumgebungen, technische Überwachung, Benachrichtigungen, Reichweitenmessung und maschinelle Übersetzung sind ebenso viele Nebenkanäle, über die Daten die Schweiz verlassen.",
          "Die Protokollierung ist an Bedingungen geknüpft. Nach Art. 4 DSV müssen private Verantwortliche und ihre Auftragsbearbeiter zumindest das Speichern, Verändern, Lesen, Bekanntgeben, Löschen und Vernichten der Daten protokollieren, wenn besonders schützenswerte Personendaten in grossem Umfang automatisiert bearbeitet werden oder ein Profiling mit hohem Risiko stattfindet und die präventiven Massnahmen den Datenschutz nicht gewährleisten können; die Protokolle sind mindestens ein Jahr lang getrennt vom System aufzubewahren. Dazu kommen das Bearbeitungsreglement (Art. 5 DSV), die Datenschutz-Folgenabschätzung (Art. 22 DSG) und die Meldung von Verletzungen der Datensicherheit (Art. 24 DSG).",
          "Bleibt das Berufsgeheimnis. Art. 321 StGB erfasst unter anderem Ärztinnen und Ärzte, Hebammen, Psychologen und Pflegefachpersonen «sowie ihre Hilfspersonen» und bestraft die Offenbarung eines Geheimnisses auf Antrag mit Freiheitsstrafe bis zu drei Jahren oder Geldstrafe. Wer in einer technischen Kette «Hilfsperson» im Sinne dieser Bestimmung ist, bleibt eine Rechtsfrage; ein Genfer Server beantwortet sie nicht."
        ]
      },
      {
        "heading": "Fragen, mit denen sich das vor der Unterschrift prüfen lässt",
        "paragraphs": [
          "Diese Punkte ergeben sich aus den oben zitierten Bestimmungen."
        ],
        "bullets": [
          "Wo stehen die Produktivserver, die Sicherungskopien und die Testumgebungen, und welche juristische Person unterzeichnet den Vertrag?",
          "Aus welchen Ländern greifen Personen im Klartext auf die Daten zu, und welche weiteren Auftragsbearbeiter sind beteiligt?",
          "Ist eine dem US-Recht unterstehende Einheit Teil der Kette, und ist sie für den Schweizer Teil des Data Privacy Framework zertifiziert?",
          "Welche Vorgänge werden protokolliert, wie lange werden die Protokolle aufbewahrt, und wer darf sie einsehen?",
          "Was geschieht mit den Daten nach Vertragsende: Rückgabe in welchem Format, Löschung in welcher Frist, mit welchem Nachweis?"
        ]
      },
      {
        "heading": "Fazit",
        "paragraphs": [
          "Das Schweizer Recht verbietet nicht, Gesundheitsdaten im Ausland zu hosten: Es knüpft die Übermittlung an Bedingungen und sanktioniert Verstösse. Umgekehrt genügt Hosting in der Schweiz den Anforderungen an Sicherheit, Protokollierung und Berufsgeheimnis nicht. Die nützliche Frage lautet nicht «Wo stehen die Server?», sondern «Wer greift auf was zu, unter welchem Recht, mit welcher Spur, und was geschieht, wenn der Vertrag endet?».",
          "CareBond, Herausgeberin dieser Publikation, ist eine Genfer Kommunikationsplattform für Pflegeeinrichtungen: Hosting in der Schweiz bei Infomaniak, Auslegung nach DSGVO und revDSG, unveränderliches Audit-Log, HL7/FHIR-Integration, hauseigene mehrsprachige Übersetzung, mit HMAC signierte Berichte. Das sind Architekturentscheide, keine Zertifizierungen: Der obige Fragenkatalog gilt auch für uns."
        ]
      }
    ],
    "takeaways": [
      "Keine allgemeine Bundesregel verlangt, Gesundheitsdaten in der Schweiz aufzubewahren: Das DSG regelt die Bekanntgabe ins Ausland (Art. 16 und 17).",
      "Klare sektorielle Ausnahme: Art. 12 Abs. 5 EPDV verlangt für die Gemeinschaften des elektronischen Patientendossiers Datenspeicher, die sich in der Schweiz befinden und dem Schweizer Recht unterstehen.",
      "Die Liste der Staaten mit angemessenem Datenschutz ist Anhang 1 DSV und wird periodisch überprüft; der Eintrag «Vereinigte Staaten» (15. September 2024) gilt nur für Organisationen, die nach dem Schweizer Teil des Data Privacy Framework zertifiziert sind.",
      "Daten aus dem Ausland zugänglich zu machen, ist bereits eine Bekanntgabe im Sinne von Art. 5 Bst. e DSG, auch wenn die Server in der Schweiz bleiben.",
      "Die Bussen nach Art. 61 DSG (bis 250 000 Franken, auf Antrag) richten sich gegen private Personen; der Geschäftsbetrieb wird nur im Fall von Art. 64 Abs. 2 DSG an ihrer Stelle verurteilt."
    ],
    "disclaimer": "Dieser Artikel enthält allgemeine Informationen und stellt keine Rechtsberatung dar. Welche Pflichten gelten, hängt vom Kanton, vom Status der Einrichtung und von der konkreten Situation ab; wenden Sie sich im Zweifelsfall an Ihre kantonale Datenschutzbehörde, an den EDÖB oder an eine juristische Beratung.",
    "sources": [
      {
        "label": "Bundesgesetz vom 25. September 2020 über den Datenschutz (DSG, SR 235.1) — Art. 5, 8, 9, 12, 16, 17, 19, 22, 24, 61 und 64",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/de"
      },
      {
        "label": "Verordnung vom 31. August 2022 über den Datenschutz (DSV, SR 235.11) — Art. 2 bis 9, 24 und Anhang 1",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/de"
      },
      {
        "label": "Änderung von Anhang 1 DSV vom 14. August 2024, in Kraft seit 15. September 2024 (AS 2024 435)",
        "url": "https://www.fedlex.admin.ch/eli/oc/2024/435/de"
      },
      {
        "label": "Bundesrat — Medienmitteilung vom 14. August 2024 zum Swiss-U.S. Data Privacy Framework",
        "url": "https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-102054.html"
      },
      {
        "label": "EDÖB — Bekanntgabe von Personendaten ins Ausland",
        "url": "https://www.edoeb.admin.ch/de/bekanntgabe-von-personendaten-ins-ausland"
      },
      {
        "label": "EDÖB — Outsourcing (Auftragsdatenbearbeitung)",
        "url": "https://www.edoeb.admin.ch/de/outsourcing-auftragsdatenbearbeitung"
      },
      {
        "label": "EDÖB — Cloud-Computing (Datenbearbeitungen in der Cloud)",
        "url": "https://www.edoeb.admin.ch/de/datenbearbeitungen-in-der-cloud"
      },
      {
        "label": "Verordnung vom 22. März 2017 über das elektronische Patientendossier (EPDV, SR 816.11) — Art. 12 Abs. 5",
        "url": "https://www.fedlex.admin.ch/eli/cc/2017/204/de"
      },
      {
        "label": "Schweizerisches Strafgesetzbuch (SR 311.0) — Art. 321, Verletzung des Berufsgeheimnisses",
        "url": "https://www.fedlex.admin.ch/eli/cc/54/757_781_799/de"
      },
      {
        "label": "18 U.S. Code § 2713, eingeführt durch den CLOUD Act (2018)",
        "url": "https://www.law.cornell.edu/uscode/text/18/2713"
      },
      {
        "label": "Kantonale Behörde für Öffentlichkeit, Datenschutz und Mediation (Freiburg), 7. November 2024 — begrenzte Auswirkungen auf die Auslagerungsmassnahmen (auf Französisch)",
        "url": "https://www.fr.ch/atprdm/actualites/entreprises-certifiees-des-etats-unis-avec-un-niveau-de-protection-des-donnees-adequat-effets-limites-sur-les-mesures-dexternalisation"
      },
      {
        "label": "Data Privacy Framework — offizielle Programmseite (US-Handelsministerium), zitiert in der Fussnote zu Anhang 1 DSV",
        "url": "https://www.dataprivacyframework.gov/"
      }
    ]
  },
  {
    "id": "families",
    "slug": "kommunikation-angehoerige-pflegeheim",
    "locale": "de",
    "metaTitle": "Angehörige im Pflegeheim: was das Schweizer Recht verlangt",
    "metaDescription": "Berufsgeheimnis, Vertretung nach ZGB, Protokollierung: was das Schweizer Recht bei der Kommunikation mit Angehörigen im Pflegeheim regelt — und was nicht.",
    "h1": "Kommunikation mit Angehörigen im Alters- und Pflegeheim: was das Recht verlangt und was Sache der Organisation ist",
    "lead": "In einem Alters- und Pflegeheim lautet die Frage nicht, ob man mit den Angehörigen spricht, sondern wer was erfahren darf, in welchem Rhythmus — und wie sich das ein halbes Jahr später noch belegen lässt. Zwischen Berufsgeheimnis, gesetzlicher Vertretung und Datenschutz ist der Spielraum enger, als es scheint. Was folgt, beschreibt in allgemeiner Form, was die Erlasse des Bundes und zwei kantonale Gesetze vorsehen.",
    "sections": [
      {
        "heading": "Was Angehörige den Einrichtungen vorwerfen",
        "paragraphs": [
          "Die kantonale Ombuds- und Mediationsstelle für Gesundheit und Soziales des Kantons Waadt (BCMSS) verzeichnet in ihrem Tätigkeitsbericht 2023 insgesamt 227 Beanstandungen: 59 Prozent stammen von Patientinnen und Patienten, 24 Prozent von Angehörigen, 12 Prozent von Fachpersonen. Alters- und Pflegeheime stehen an dritter Stelle, hinter den Privatpraxen und dem Universitätsspital CHUV. Diese Zahlen gelten für einen einzigen Kanton.",
          "Aufschlussreicher als die Zahlen ist der gemeinsame Nenner, den die Ombudsfrau festhält: Das verbindende Element aller Mediationen bestehe darin, dass die betroffene Person in einem Schlüsselmoment des Behandlungsverlaufs einen Verlust der Beziehung und einen Mangel an Kommunikation erlebt habe. Kommunikation, schreibt sie, sei ein Akt für sich, eine eigenständige Handlung. Einrichtungen haben sich auch selbst an die Stelle gewandt, wegen Schwierigkeiten in der Zusammenarbeit mit Angehörigen; 83 Prozent der Mediationen kamen zu einem Abschluss. Der Bericht ist auf Französisch verfasst; die Zitate sind übersetzt."
        ]
      },
      {
        "heading": "Was das Gesetz vorschreibt — und was es offenlässt",
        "paragraphs": [
          "Ein grosser Teil der Patientenrechte liegt beim kantonalen Recht. Das Bundesamt für Gesundheit hält selbst fest, die gesetzlichen Bestimmungen variierten leicht von Kanton zu Kanton, weshalb einzelne Passagen allgemein formuliert seien, und empfiehlt, im Einzelnen auch die kantonale und eidgenössische Gesetzgebung zu beachten. Die folgenden Beispiele aus Genf und der Waadt lassen sich deshalb nicht eins zu eins auf andere Kantone übertragen.",
          "Das Genfer Gesundheitsgesetz (K 1 03) sieht vor, dass die Patientin oder der Patient beim Eintritt in eine Gesundheitseinrichtung eine schriftliche Information über Rechte, Pflichten und die Bedingungen des Aufenthalts erhält, und fügt an: Nötigenfalls werden auch die Angehörigen informiert (Art. 45 Abs. 3). Am Lebensende müssen die Angehörigen die nötige Unterstützung und Beratung erhalten (Art. 39 Abs. 1). Das Gesetz besteht nur auf Französisch; die Wiedergabe ist übersetzt.",
          "Was diese Bestimmungen nicht festlegen: wie häufig informiert wird, wer als benannte Ansprechperson gilt, innert welcher Frist nach einem Sturz zurückgerufen wird, über welchen Kanal. Genau dort entstehen die Beanstandungen. Das Gesetz setzt einen Mindeststandard; der Rest wird in der Einrichtung entschieden."
        ]
      },
      {
        "heading": "Berufsgeheimnis: Angehörige sind im Grundsatz Dritte",
        "paragraphs": [
          "Artikel 321 des Strafgesetzbuchs unterstellt eine Reihe von Berufen dem Berufsgeheimnis, darunter Ärztinnen und Ärzte, Hebammen, Psychologen, Pflegefachpersonen, Physiotherapeuten und Ernährungsberater, ausdrücklich auch ihre Hilfspersonen. Wer ein Geheimnis offenbart, das ihm infolge seines Berufes anvertraut wurde oder das er in dessen Ausübung wahrgenommen hat, wird auf Antrag mit Freiheitsstrafe bis zu drei Jahren oder Geldstrafe bestraft. Nicht strafbar ist, wer das Geheimnis aufgrund einer Einwilligung des Berechtigten offenbart oder aufgrund einer auf sein Gesuch hin erteilten schriftlichen Bewilligung der vorgesetzten Behörde oder der Aufsichtsbehörde.",
          "Die Folge überrascht viele Familien: Die Verwandtschaft allein begründet keinen Zugang zu klinischen Informationen. Ein Sohn, eine Ehefrau, eine Schwester bleiben Dritte, solange die urteilsfähige Person nicht eingewilligt hat — und diese Einwilligung kann sich auf einzelne Themen beschränken und wieder zurückgezogen werden.",
          "Dazu kommt der Datenschutz. Das Datenschutzgesetz, in seiner geltenden Fassung seit dem 1. September 2023 in Kraft, zählt Daten über die Gesundheit zu den besonders schützenswerten Personendaten (Art. 5 Bst. c Ziff. 2). Der EDÖB hält dazu fest: Im medizinischen und paramedizinischen Bereich sind bearbeitete Daten oft besonders schützenswert. Das DSG ist ein Schweizer Gesetz und nicht mit der europäischen DSGVO identisch."
        ]
      },
      {
        "heading": "Wer was erfahren darf: die Kaskade des ZGB",
        "paragraphs": [
          "Ist eine Bewohnerin oder ein Bewohner nicht mehr urteilsfähig, bestimmt das Zivilgesetzbuch die Ansprechperson. Nach Artikel 377 plant die behandelnde Ärztin oder der behandelnde Arzt die erforderliche Behandlung unter Beizug der zur Vertretung bei medizinischen Massnahmen berechtigten Person und informiert sie über alle wesentlichen Umstände — Gründe, Zweck, Risiken, Nebenwirkungen und Kosten. Soweit möglich wird auch die urteilsunfähige Person in die Entscheidfindung einbezogen.",
          "Artikel 378 legt die Reihenfolge fest: die in einer Patientenverfügung oder in einem Vorsorgeauftrag bezeichnete Person; der Beistand oder die Beiständin mit Vertretungsrecht bei medizinischen Massnahmen; der Ehegatte oder die eingetragene Partnerin, sofern ein gemeinsamer Haushalt geführt oder regelmässig und persönlich Beistand geleistet wird; die Person, die den gemeinsamen Haushalt führt und solchen Beistand leistet; danach Nachkommen, Eltern und Geschwister, je unter der Bedingung regelmässigen und persönlichen Beistands. Sind mehrere Personen vertretungsberechtigt, darf die gutgläubige Ärztin voraussetzen, dass jede im Einverständnis mit den anderen handelt.",
          "Damit lassen sich drei Rollen unterscheiden: die vertretungsberechtigte Person bei medizinischen Massnahmen, die administrative Kontaktperson und der Angehörige, der am häufigsten anruft. Die ersten beiden ergeben sich aus dem Recht, die dritte aus der Organisation."
        ]
      },
      {
        "heading": "Was beim Eintritt geregelt wird",
        "paragraphs": [
          "Die folgenden Punkte sind keine gesetzlichen Pflichten. Sie gehören zur internen Organisation und lassen sich am besten beim Eintritt klären, solange die Bewohnerin oder der Bewohner noch selbst sagen kann, was gewünscht ist."
        ],
        "bullets": [
          "Festhalten, ob eine Patientenverfügung, ein Vorsorgeauftrag oder eine Beistandschaft besteht, und wer die Vertretung bei medizinischen Massnahmen übernimmt.",
          "Drei Rollen schriftlich auseinanderhalten: medizinische Vertretung, administrative Kontaktperson, über den Alltag informierte Angehörige.",
          "Die urteilsfähige Person fragen, mit wem worüber gesprochen werden darf — im Wissen darum, dass sie es sich anders überlegen kann.",
          "Alltagsnachrichten, die mit ihrem Einverständnis zirkulieren, von klinischer Information trennen, die der Kaskade des ZGB folgt.",
          "Einen Kontaktrhythmus und eine benannte Ansprechperson festlegen und regeln, wer bei einem unerwünschten Ereignis anruft und innert welcher Frist.",
          "Jede Mitteilung datieren und ihrer Verfasserin oder ihrem Verfasser zuordnen."
        ]
      },
      {
        "heading": "Spuren sichern: was der Datenschutz vorsieht",
        "paragraphs": [
          "Der letzte Punkt trifft auf eine Formvorschrift. In Genf hält das Dossier die Urheberschaft und das Datum jeder Eintragung fest (Art. 53); wird es elektronisch geführt, muss jede Ergänzung, Löschung oder sonstige Änderung erkennbar bleiben, mit Urheber und Datum (Art. 54).",
          "Das DSG stellt Grundsätze auf, die auch für den Austausch mit Angehörigen gelten: Rechtmässigkeit, Treu und Glauben, Verhältnismässigkeit und ein für die betroffene Person erkennbarer Zweck (Art. 6), eine dem Risiko angemessene Datensicherheit (Art. 8), die Informationspflicht bei der Beschaffung (Art. 19) und das Auskunftsrecht (Art. 25).",
          "Die Verordnung geht weiter. Nach Art. 4 DSV müssen der private Verantwortliche und sein Auftragsbearbeiter bei automatisierter Bearbeitung besonders schützenswerter Personendaten in grossem Umfang zumindest das Speichern, Verändern, Lesen, Bekanntgeben, Löschen und Vernichten protokollieren, wenn präventive Massnahmen den Datenschutz nicht gewährleisten können. Die Protokollierung gibt Aufschluss über die Identität der bearbeitenden Person, über Art, Datum und Uhrzeit der Bearbeitung; die Protokolle werden mindestens ein Jahr lang getrennt vom System aufbewahrt.",
          "Eine Einrichtung, die über Telefon und handschriftliche Notizen kommuniziert, beantwortet die Frage schlecht, wer wem was wann gesagt hat."
        ]
      },
      {
        "heading": "Und wenn Angehörige das Dossier verlangen?",
        "paragraphs": [
          "Das Einsichtsrecht in das Dossier steht der Patientin oder dem Patienten zu. In Genf kann sie oder er es einsehen und sich die Unterlagen im Grundsatz unentgeltlich herausgeben lassen; dieses Recht erstreckt sich nicht auf Notizen, welche die Gesundheitsfachperson ausschliesslich zum eigenen Gebrauch verfasst hat, und nicht auf Daten über Dritte, die dem Berufsgeheimnis unterstehen (Art. 55). Die Waadt verankert ein gleichwertiges Recht in Art. 24 ihres Gesundheitsgesetzes.",
          "Der Tod hebt das Geheimnis nicht auf. In Genf können Angehörige, die ein schutzwürdiges Interesse nachweisen, über die Todesursachen und die vorangegangene Behandlung informiert werden, sofern sich die verstorbene Person nicht ausdrücklich dagegen ausgesprochen hat; sie bezeichnen eine Ärztin oder einen Arzt zur Entgegennahme der Daten, und die für die Entbindung vom Berufsgeheimnis zuständige Kommission ist anzurufen (Art. 55A). In der Waadt setzt der Zugang voraus, dass die Fachperson von der zuständigen Behörde vom Geheimnis entbunden wurde.",
          "Blockiert wird oft bei der Frist: Laut dem Waadtländer Bericht verfasst die Ombudsfrau ein Schreiben, das an das Einsichtsrecht erinnert, und lädt die Fachperson ein, das Dossier innert zehn Tagen herauszugeben."
        ]
      },
      {
        "heading": "Wohin sich unzufriedene Angehörige wenden können",
        "paragraphs": [
          "Die acht Kantone der lateinischen Schweiz — Bern, Freiburg, Genf, Jura, Neuenburg, Tessin, Wallis und Waadt — haben am 3. September 2024 eine neue Ausgabe der Broschüre «L'essentiel sur les droits des patients» veröffentlicht. Streitigkeiten nehmen zudem kantonale Stellen entgegen: im Kanton Waadt das BCMSS, in Genf die Aufsichtskommission für die Gesundheitsberufe und die Patientenrechte (CSPSDP).",
          "Dieser Artikel wird von CareBond veröffentlicht, einer Schweizer Kommunikationsplattform für Pflegeeinrichtungen, gehostet bei Infomaniak in Genf, konzipiert nach den Grundsätzen von DSGVO und revDSG, mit unveränderlichem Audit-Log und HL7/FHIR-Integration. Die hier beschriebenen Anforderungen bestehen unabhängig von jeder Software: Sie lassen sich auch mit einem Ordner erfüllen — vorausgesetzt, er wird geführt."
        ]
      }
    ],
    "takeaways": [
      "Die Verwandtschaft allein begründet keinen Zugang zu klinischen Informationen: Massgebend ist die Einwilligung der Bewohnerin oder des Bewohners oder die Kaskade von Art. 378 ZGB.",
      "Drei Rollen sind auseinanderzuhalten: vertretungsberechtigte Person bei medizinischen Massnahmen, administrative Kontaktperson, über den Alltag informierte Angehörige.",
      "Der Waadtländer Bericht 2023 verortet den Auslöser der Mediationen im Zeitpunkt und im Rhythmus der Information — beides legt das Gesetz nicht fest.",
      "Art. 4 DSV sieht für bestimmte automatisierte Bearbeitungen besonders schützenswerter Daten in grossem Umfang eine Protokollierung der Zugriffe mit Urheber, Datum und Uhrzeit vor.",
      "Patientenrechte liegen weitgehend beim kantonalen Recht: Das BAG verweist selbst auf die kantonale Gesetzgebung."
    ],
    "disclaimer": "Dieser Artikel ist eine allgemeine Information und stellt keine Rechtsberatung dar. Die Rechte von Patientinnen, Patienten und Bewohnenden liegen weitgehend beim kantonalen Recht: Die konkreten Pflichten hängen vom Kanton, von der Art der Einrichtung und von der einzelnen Situation ab. Für einen konkreten Fall ist die anwendbare kantonale Gesetzgebung heranzuziehen und nötigenfalls eine Rechtsberatung oder die zuständige kantonale Stelle beizuziehen.",
    "sources": [
      {
        "label": "Bundesgesetz über den Datenschutz (DSG), SR 235.1, Stand am 1. September 2023 — Art. 5, 6, 8, 19 und 25",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/de"
      },
      {
        "label": "Verordnung über den Datenschutz (DSV), SR 235.11 — Art. 4, Protokollierung",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/de"
      },
      {
        "label": "Schweizerisches Strafgesetzbuch, SR 311.0 — Art. 321, Verletzung des Berufsgeheimnisses",
        "url": "https://www.fedlex.admin.ch/eli/cc/54/757_781_799/de"
      },
      {
        "label": "Schweizerisches Zivilgesetzbuch, SR 210 — Art. 377 und 378, Vertretung bei medizinischen Massnahmen",
        "url": "https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de"
      },
      {
        "label": "Kanton Genf, Gesundheitsgesetz (K 1 03, nur auf Französisch) — Art. 39, 45, 53, 54, 55 und 55A",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "Kantonale Ombuds- und Mediationsstelle für Gesundheit und Soziales (VD), Tätigkeitsbericht 2023 (auf Französisch)",
        "url": "https://www.vd.ch/fileadmin/user_upload/organisation/dsas/sg-dsas/fichiers_pdf/Rapport_act_BCMSS_2023.pdf"
      },
      {
        "label": "Kanton Waadt — Zugang zum Patientendossier (Art. 24 des Gesundheitsgesetzes vom 29. Mai 1985, auf Französisch)",
        "url": "https://www.vd.ch/sante-soins-et-handicap/patients-et-residents-droits-et-qualite-de-soins/les-droits-des-patients-des-residents-et-des-personnes-en-situation-de-handicap/acces-au-dossier"
      },
      {
        "label": "Bundesamt für Gesundheit — Patientenrechte und Patientenpartizipation, Hinweis auf die kantonale Gesetzgebung",
        "url": "https://www.bag.admin.ch/de/patientenrechte-und-patientenpartizipation"
      },
      {
        "label": "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB) — Gesundheit",
        "url": "https://www.edoeb.admin.ch/de/gesundheit"
      },
      {
        "label": "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB) — Bekanntgabe von Patientendaten",
        "url": "https://www.edoeb.admin.ch/de/bekanntgabe-von-patientendaten"
      },
      {
        "label": "Republik und Kanton Genf — «L'essentiel sur les droits des patients», Ausgabe vom 3. September 2024",
        "url": "https://www.ge.ch/actualite/essentiel-droit-patients-3-09-2024"
      },
      {
        "label": "Genf — Aufsichtskommission für die Gesundheitsberufe und die Patientenrechte (CSPSDP)",
        "url": "https://www.ge.ch/surveillance-professions-sante-droit-patients/commission-surveillance-cspsdp"
      }
    ]
  },
  {
    "id": "checklist",
    "slug": "pflegeheim-software-checkliste",
    "locale": "de",
    "metaTitle": "Software fürs Pflegeheim wählen: die Schweizer Checkliste",
    "metaDescription": "Reversibilität, Datenexport, Vertragsende, EPD, HL7 FHIR, Schulung, Barrierefreiheit: Was ein Pflegeheim vor der Unterschrift prüfen sollte.",
    "h1": "Software für ein Pflegeheim wählen: die Checkliste vor der Unterschrift",
    "lead": "Ein Vertrag über eine Fachanwendung bindet eine Einrichtung für mehrere Jahre — und zwar an Daten, die das kantonale Recht oft länger aufbewahren lässt, als der Vertrag dauert. Die Frage ist deshalb nicht, welches Produkt die schönste Oberfläche hat, sondern was von Ihren Daten an dem Tag übrig bleibt, an dem Sie den Anbieter wechseln.",
    "sections": [
      {
        "heading": "Verantwortlicher oder Auftragsbearbeiter: Wer steht wofür ein?",
        "paragraphs": [
          "Das revidierte Datenschutzgesetz (revDSG, offiziell Bundesgesetz über den Datenschutz, DSG, SR 235.1) ist in seiner heutigen Fassung seit dem 1. September 2023 in Kraft. Es unterscheidet den Verantwortlichen, der «allein oder zusammen mit anderen über den Zweck und die Mittel der Bearbeitung entscheidet» (Art. 5 lit. j), vom Auftragsbearbeiter, der Personendaten «im Auftrag des Verantwortlichen» bearbeitet (Art. 5 lit. k). Zwischen einer Einrichtung und einem Softwareanbieter fällt die erste Rolle in der Regel der Einrichtung zu — massgebend ist, wer tatsächlich entscheidet, nicht die Bezeichnung im Vertrag. Der EDÖB fasst es so zusammen: «Auch wenn Sie die Bearbeitung von Personendaten einem Auftragsbearbeiter übertragen, bleiben Sie für den Datenschutz verantwortlich.»",
          "Art. 9 revDSG nennt die Bedingungen: Die Übertragung erfolgt vertraglich oder durch die Gesetzgebung; übertragen werden dürfen nur Bearbeitungen, die der Verantwortliche selbst vornehmen dürfte; keine gesetzliche oder vertragliche Geheimhaltungspflicht darf entgegenstehen; und der Verantwortliche muss sich vergewissern, dass der Auftragsbearbeiter die Datensicherheit gewährleisten kann. Gesundheitsdaten gelten als besonders schützenswert (Art. 5 lit. c Ziff. 2).",
          "Wer diese Bedingungen missachtet, fällt unter Art. 61 lit. b revDSG: Busse bis zu 250 000 Franken — allerdings nur auf Antrag, nur bei vorsätzlichem Handeln und zulasten privater Personen."
        ]
      },
      {
        "heading": "«Dateneigentum» kennt das Schweizer Recht nicht",
        "paragraphs": [
          "Viele Ausschreibungen fragen, wem die Daten «gehören». Diese Kategorie gibt es im revDSG nicht: Es gibt die Rolle des Verantwortlichen, die Rechte der betroffenen Person und — für das Patientendossier — das kantonale Gesundheitsrecht.",
          "Ein Beispiel: Im Kanton Genf beschreibt das Gesundheitsgesetz vom 7. April 2006 (LS, K 1 03) den Inhalt des Dossiers (Art. 53), gibt der Patientin und dem Patienten das Recht, es einzusehen und sich die Unterlagen herausgeben zu lassen (Art. 55), und setzt die Aufbewahrung auf mindestens zehn Jahre ab der letzten Konsultation fest, wobei die Vernichtung spätestens nach zwanzig Jahren erfolgt (Art. 57). Jeder Kanton hat seine eigenen Regeln.",
          "Die Folge wird selten mitgedacht: Ein Softwareabonnement dauert fast immer kürzer als die vorgeschriebene Aufbewahrung des Dossiers."
        ]
      },
      {
        "heading": "Reversibilität, Datenexport und Vertragsende",
        "paragraphs": [
          "Art. 28 revDSG begründet ein Recht auf Herausgabe oder Übertragung der Daten «in einem gängigen elektronischen Format». Das ist ein Recht der betroffenen Person gegenüber dem Verantwortlichen, kein Recht der Institution gegenüber ihrem Lieferanten: Zwischen diesen beiden gilt allein der Vertrag. Hineingehört:"
        ],
        "bullets": [
          "der genaue Umfang: Dossiers, Nachrichten, Anhänge, Pflegeplanungen, Zugriffsprotokolle und Metadaten — nicht bloss die Haupttabellen;",
          "das Format: dokumentiertes CSV, JSON oder FHIR statt eines unlesbaren proprietären Exports;",
          "Frist und Kosten, festgelegt bei der Unterschrift und nicht erst im Streitfall;",
          "ein Testexport, der während des Pilotbetriebs tatsächlich durchgeführt und durchgesehen wird: eine ungetestete Reversibilität ist keine;",
          "das Schicksal der Daten am Schluss — Art. 6 Abs. 4 revDSG sieht Vernichtung oder Anonymisierung vor, sobald sie für den Zweck der Bearbeitung nicht mehr erforderlich sind;",
          "das Szenario Anbieterwechsel: Wer exportiert, in wie vielen Tagen, zu welchem Preis, und bleibt Ihnen während der Migration ein Lesezugriff?",
          "das Szenario Konkurs oder Übernahme: Was geschieht mit Hosting, Sicherungskopien und Wartung?",
          "das Szenario Parallelbetrieb zweier Systeme: Wer bleibt Auftragsbearbeiter, für welche Daten, und wer beantwortet ein Auskunftsersuchen, das dazwischen eintrifft?"
        ]
      },
      {
        "heading": "Unterauftragsbearbeiter und das tatsächliche Hosting",
        "paragraphs": [
          "Der Auftragsbearbeiter darf die Bearbeitung nur mit vorgängiger Genehmigung des Verantwortlichen einem Dritten übertragen (Art. 9 Abs. 3 revDSG). Der EDÖB lässt eine allgemeine Genehmigung zu — im Privatsektor ist sie an keine besondere Form gebunden —, hält aber fest, dass der Auftragsbearbeiter den Verantwortlichen über jede Änderung informieren muss, also über das Hinzuziehen oder Ersetzen weiterer Auftragsbearbeiter, damit dieser Einspruch erheben kann.",
          "Deshalb lohnt sich eine vollständige Liste mit Namen: Hoster, Sicherungskopien, Überwachung, technischer Support, Versand von E-Mails und SMS, maschinelle Übersetzung, KI-Dienste. «Server in der Schweiz» sagt nichts darüber, woher sich der Support einwählt, und nichts darüber, wohin die Sicherungskopien gehen. Für die Bekanntgabe von Daten ins Ausland braucht es einen Staat mit anerkannt angemessenem Schutz, eine der Garantien nach Art. 16 Abs. 2 revDSG oder eine Ausnahme nach Art. 17."
        ]
      },
      {
        "heading": "Protokollierung der Zugriffe: Was die Software können muss",
        "paragraphs": [
          "Die Datenschutzverordnung (DSV, SR 235.11) verlangt in Art. 4 Abs. 1, dass der private Verantwortliche und sein privater Auftragsbearbeiter zumindest «das Speichern, Verändern, Lesen, Bekanntgeben, Löschen und Vernichten der Daten» protokollieren, wenn besonders schützenswerte Personendaten in grossem Umfang automatisiert bearbeitet werden und die präventiven Massnahmen den Datenschutz nicht gewährleisten können. Die Protokolle sind mindestens ein Jahr lang und getrennt vom System aufzubewahren (Abs. 5).",
          "Das entscheidende Wort ist Lesen: Viele Programme protokollieren Änderungen, aber keine Einsichtnahmen — dabei ist es gerade das Wissen darüber, wer ein Dossier geöffnet hat, ohne etwas daran zu ändern, das eine Antwort auf den Verdacht eines unbefugten Zugriffs erlaubt. Erfasst das Protokoll die Lesezugriffe, lässt es sich exportieren, und wer kann es löschen?"
        ]
      },
      {
        "heading": "Interoperabilität: EPD, künftiges E-GD und HL7 FHIR",
        "paragraphs": [
          "Das Bundesgesetz über das elektronische Patientendossier (EPDG) ist seit dem 15. April 2017 in Kraft. Einrichtungen, die stationäre Behandlungen anbieten — Akutspitäler, psychiatrische Kliniken und Rehabilitationskliniken, Pflegeheime und Geburtshäuser —, müssen seit April 2022 das EPD einsetzen können; für Spitex-Dienstleistende und Apotheken bleibt die Teilnahme freiwillig.",
          "Der Rahmen bewegt sich. Am 5. November 2025 hat der Bundesrat die Botschaft zum Bundesgesetz über das elektronische Gesundheitsdossier (EGDG) verabschiedet, das an die Stelle des EPD das E-GD setzen würde; laut Medienmitteilung ist davon auszugehen, dass es «auf das Jahr 2030 hin eingeführt werden kann». Das Schweizerische Gesundheitsobservatorium hält in seinem Bulletin 01/26 vom 19. Februar 2026 fest, dass im Oktober 2025 95 Prozent der Spitäler und 76 Prozent der Pflegeheime angeschlossen waren. Nach Zahlen des BAG, die ICTjournal am 16. Juli 2026 aufgegriffen hat, nutzen jedoch nur rund 5 Prozent der befragten stationären Leistungserbringer das EPD aktiv.",
          "Für den künftigen Austausch stützt sich der Bund auf HL7 FHIR: Eine externe Evaluation, am 19. Mai 2026 im Programm DigiSanté veröffentlicht, sieht darin ein geeignetes Fundament, erinnert aber zugleich daran, dass «die Wahl eines Standards allein nicht ausreicht, um Interoperabilität sicherzustellen». «FHIR-kompatibel» sagt für sich genommen also nichts aus: Welche Ressourcen, welche Version, lesend oder schreibend, und in welcher Einrichtung produktiv im Einsatz?"
        ]
      },
      {
        "heading": "Der Schulungsaufwand — die Kosten, die niemand beziffert",
        "paragraphs": [
          "Das Programm NIP-Q-UPGRADE, das CURAVIVA und senesuisse im Auftrag der Eidgenössischen Qualitätskommission führen, untersucht die Erfassung der medizinischen Qualitätsindikatoren in Pflegeheimen. Der Befund aus einer nationalen Onlinebefragung, an der 204 Pflegeheime unterschiedlicher Struktur teilnahmen: Die Datenqualität hängt ab von der Einstellung des Personals gegenüber den Indikatoren, vom vorhandenen Wissen und vom verfügbaren Personal für Erhebung und Verarbeitung sowie von der IT-Infrastruktur und den Schnittstellen. Zeitmangel und fehlende Ressourcen sind die grössten Hindernisse.",
          "Lauter Posten, die vor der Unterschrift zu beziffern sind: Schulungsstunden pro Mitarbeiterin und Mitarbeiter, wer die Pflegehelferinnen, das Temporärpersonal und die Nachtwache schult, in welchen Sprachen, was Schulungen kosten, sobald das System läuft, und ob es eine Testumgebung gibt."
        ]
      },
      {
        "heading": "Barrierefreiheit für betagte Bewohnerinnen, Bewohner und Angehörige",
        "paragraphs": [
          "Der Schweizer Standard eCH-0059 in der 2020 genehmigten Version 3.0 hält fest: «Websites und mobile Anwendungen müssen die Kriterien auf Konformitätsstufe AA der WCAG 2.1 erfüllen.» Er richtet sich in erster Linie an das Gemeinwesen, doch nichts hindert eine Einrichtung daran, ihn zum Beschaffungskriterium zu machen.",
          "Die WCAG 2.2, W3C-Empfehlung in der Fassung vom 12. Dezember 2024, ergänzen Kriterien, die genau die Schwierigkeiten einer 87-jährigen Bewohnerin treffen: Mindestgrösse der Bedienelemente (2.5.8, AA), nicht verdecktes fokussiertes Element (2.4.11, AA), Authentifizierung ohne Gedächtnistest (3.3.8, AA) und vermiedene Mehrfacheingabe (3.3.7, A). Der nützlichste Test kostet nichts: zwei Bewohnende und eine betagte Angehörige das Produkt ausprobieren lassen."
        ]
      },
      {
        "heading": "Vor der Unterschrift",
        "paragraphs": [
          "Bleibt eine letzte Frage, die für jeden Anbieter gilt: Welche Zertifizierungen liegen heute tatsächlich vor — mit Stelle, Nummer und Ablaufdatum — und welche sind bloss «angestrebt»? Sie gilt auch für den Herausgeber dieses Beitrags. CareBond ist eine Kommunikationsplattform für die Pflege, gehostet bei Infomaniak in Genf, mit unveränderlichem Audit-Log und HL7/FHIR-Integration; eine ISO-27001- oder HDS-Zertifizierung besitzt sie bis heute nicht. Eine Checkliste, die für den nicht gilt, der sie veröffentlicht, ist wenig wert."
        ]
      }
    ],
    "takeaways": [
      "In der Regel ist die Einrichtung Verantwortliche und der Softwareanbieter Auftragsbearbeiter: Die Bedingungen von Art. 9 revDSG gehören in den Vertrag.",
      "Das revDSG garantiert gegenüber dem Anbieter keinen Export: Umfang, Format, Frist und Preis schreibt man vor der Unterschrift fest.",
      "Ein im Pilotbetrieb durchgeführter Testexport ist mehr wert als eine nie geprüfte Reversibilitätsklausel.",
      "Die Aufbewahrungsfristen für das Dossier richten sich nach kantonalem Recht (in Genf mindestens zehn Jahre) und überdauern den Vertrag.",
      "Die namentliche Liste der weiteren Auftragsbearbeiter verlangt man schriftlich: «Server in der Schweiz» sagt nichts über Support und Sicherungskopien."
    ],
    "disclaimer": "Dieser Beitrag enthält allgemeine Informationen und stellt keine Rechtsberatung dar. Die konkreten Pflichten hängen vom Kanton, von der Art der Einrichtung und von der jeweiligen Situation ab. Wenden Sie sich für einen konkreten Fall an Ihre Rechtsberatung, an die kantonale Gesundheitsbehörde oder an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB).",
    "sources": [
      {
        "label": "Bundesgesetz über den Datenschutz (DSG, SR 235.1) — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/de"
      },
      {
        "label": "Verordnung über den Datenschutz (DSV, SR 235.11) — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/de"
      },
      {
        "label": "EDÖB — Outsourcing (Auftragsdatenbearbeitung)",
        "url": "https://www.edoeb.admin.ch/de/outsourcing-auftragsdatenbearbeitung"
      },
      {
        "label": "Genfer Gesundheitsgesetz vom 7. April 2006 (LS, K 1 03) — Art. 53, 55 und 57 (französisch)",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "BAG — EPDG, das Gesetz hinter dem EPD (revidierte EPDV-EDI, Revision EGDG)",
        "url": "https://www.bag.admin.ch/de/epdg-das-gesetz-hinter-dem-epd"
      },
      {
        "label": "eHealth Suisse — Aktueller Stand des EPD (Pflicht für stationäre Einrichtungen seit April 2022)",
        "url": "https://www.e-health-suisse.ch/koordination/elektronisches-patientendossier/aktueller-stand"
      },
      {
        "label": "Bundesrat — Das elektronische Gesundheitsdossier (E-GD) löst das EPD ab, 5. November 2025",
        "url": "https://www.admin.ch/de/newnsb/kr4DmHtSWC_pdU5RVB6KX"
      },
      {
        "label": "Obsan — Das elektronische Patientendossier. Akzeptanz und Abdeckungsgrad (Bulletin 01/26, 19. Februar 2026)",
        "url": "https://www.obsan.admin.ch/de/publikationen/2026-das-elektronische-patientendossier"
      },
      {
        "label": "BAG — Monitoring EPDG",
        "url": "https://www.bag.admin.ch/de/monitoring-epdg"
      },
      {
        "label": "ICTjournal — Obsan- und BAG-Zahlen zu Kosten und Nutzung des EPD (16. Juli 2026, französisch)",
        "url": "https://www.ictjournal.ch/etudes/2026-07-16/le-dossier-electronique-du-patient-coute-cher-aux-hopitaux-et-aux-ems-pour-une"
      },
      {
        "label": "DigiSanté — Der Standard HL7 FHIR als Fundament des SwissHDS (Evaluation veröffentlicht am 19. Mai 2026)",
        "url": "https://www.digisante.admin.ch/de/standard-fhir-swisshds"
      },
      {
        "label": "ARTISET — NIP-Q-UPGRADE: Pflegequalität datenbasiert weiterentwickeln",
        "url": "https://artiset.ch/de/ueber-uns/engagement/projekte/pflegequalitat-datenbasiert-weiterentwickeln-3"
      },
      {
        "label": "eCH-0059 Accessibility Standard V3.0",
        "url": "https://www.ech.ch/de/ech/ech-0059/3.0"
      },
      {
        "label": "ADIS — eCH-0059: Konformitätsstufe AA der WCAG 2.1",
        "url": "https://www.adis.ch/de/grundlagen/e-accessibility/standards-und-regelwerke/ech-0059-accessibility-standard-65.html"
      },
      {
        "label": "W3C — Web Content Accessibility Guidelines (WCAG) 2.2, Fassung vom 12. Dezember 2024",
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ]
  },
  {
    "id": "interop",
    "slug": "hl7-fhir-erklaert",
    "locale": "de",
    "metaTitle": "HL7 und FHIR erklärt für Pflegeeinrichtungen",
    "metaDescription": "HL7 v2, FHIR R4, EPD und das künftige E-GD: was diese Standards für ein Pflegeheim oder eine Spitex-Organisation ändern und was Anbieter belegen müssen.",
    "h1": "HL7 und FHIR, erklärt für die Leitung von Pflegeeinrichtungen",
    "lead": "«Wir sind HL7/FHIR-kompatibel.» Der Satz steht in fast jeder Offerte für Pflegesoftware – und er sagt fast nichts darüber aus, was zwei Systeme am Ende tatsächlich austauschen können. Dieser Beitrag erklärt, was hinter den beiden Standards steckt, was sie einem Alters- und Pflegeheim oder einer Spitex-Organisation bringen und wie sie mit dem elektronischen Patientendossier zusammenhängen.",
    "sections": [
      {
        "heading": "HL7 und FHIR: Wovon ist genau die Rede?",
        "paragraphs": [
          "HL7 International ist eine Normierungsorganisation; HL7 v2 und FHIR sind zwei ihrer Standards, nicht zwei Produkte. Das Messaging nach HL7 v2 ist die historische Sprache des Datenaustauschs zwischen Spitalsystemen. FHIR, die jüngere Entwicklung, beschreibt eHealth Suisse als «internationalen Interoperabilitätsstandard für den Austausch medizinischer Daten im Gesundheitswesen», der «moderne Web-Technologien wie REST-APIs sowie die Datenformate JSON, XML und Turtle (RDF)» nutzt.",
          "Die Version zählt so viel wie der Name. FHIR R4 trägt die Nummer 4.0.1, veröffentlicht am 30. Oktober 2019, mit gemischtem Status: teils normativ, teils «Standard for Trial Use». Die aktuelle Fassung, FHIR R5 (5.0.0), stammt vom März 2023. Die Spezifikation erscheint unter der offenen Lizenz CC0 – Ihre IT-Verantwortlichen können sie gratis lesen und nachprüfen, was ein Anbieter ankündigt.",
          "FHIR ersetzt die Vorgängergeneration deswegen nicht: «FHIR ergänzt die älteren Standards HL7 V2 und V3, ersetzt sie jedoch nicht vollständig, da diese in vielen Systemen weiterhin aktiv genutzt werden», schreibt eHealth Suisse."
        ]
      },
      {
        "heading": "HL7 v2 und FHIR: der Unterschied, der für Sie etwas ändert",
        "paragraphs": [
          "HL7 v2 arbeitet mit Nachrichten, die ein Ereignis auslöst. Ein Eintritt, eine Verlegung oder ein Austritt erzeugen eine ADT-Nachricht, ein Laborresultat eine ORU-Nachricht. Kapitel 1 der Version 2.7 nennt das Ziel des Standards: Austauschregeln, die den Programmieraufwand für massgeschneiderte Schnittstellen beseitigen oder wesentlich verringern.",
          "Dasselbe Kapitel benennt die Grenze – und die gehört in jede Verhandlung. Zwingend sind nur jene Felder, welche die Logik der Nachrichten tragen; viele weitere sind zwar spezifiziert, aber optional gelassen. Der Text zieht den Schluss gleich selbst: HL7 v2.7 kann kein echter «Plug-and-play»-Schnittstellenstandard sein, und die Unterschiede von Standort zu Standort werden höchstwahrscheinlich standortspezifisch ausgehandelte Vereinbarungen nötig machen.",
          "FHIR denkt anders: Es zerlegt die Information in Ressourcen – Patient, Observation, DocumentReference –, die ein System über eine Web-Abfrage holt. Das ist einfacher zu testen und zu dokumentieren. Die Optionalität verschwindet aber nicht, sie verschiebt sich in sogenannte Profile, die für ein Land oder einen Anwendungsfall festlegen, welche Felder verlangt sind. Daraus folgt eine praktische Regel: die genaue Version verlangen. Zwei Programme, die «FHIR können», aber in unterschiedlichen Versionen, sprechen ohne Anpassung nicht miteinander."
        ]
      },
      {
        "heading": "Was Interoperabilität einer Einrichtung wirklich bringt",
        "paragraphs": [
          "eHealth Suisse definiert Interoperabilität als «die Fähigkeit zweier IT-Systeme, Daten ohne menschliches Eingreifen auszutauschen, korrekt zu interpretieren und wiederzuverwenden».",
          "Dieselbe Quelle unterscheidet fünf Ebenen: Politik und Recht, Organisation, Technik, Syntax, Semantik. Diese Aufzählung erklärt, warum so viele Schnittstellenprojekte enttäuschen. Die technische Ebene – Daten zum Fliessen bringen – ist die einfachste und die einzige, die eine Verkaufsdemonstration zeigt. Über das Ergebnis entscheiden die semantische und die organisatorische Ebene: Sind «Allergie» oder «Sturz» auf beiden Seiten nicht gleich codiert, funktioniert der Austausch – und die klinische Information geht trotzdem verloren.",
          "Der konkrete Gewinn lässt sich kurz fassen: Eintrittsdaten nur einmal erfassen, Laborresultate, die im Dossier landen statt im Fax, ein lesbarer Bericht beim Übertritt aus dem Spital. Nichts Spektakuläres – zurückgewonnene Zeit für die Pflege."
        ]
      },
      {
        "heading": "Der Zusammenhang mit dem EPD – und was FHIR dort nicht leistet",
        "paragraphs": [
          "Das Bundesgesetz über das elektronische Patientendossier (EPDG) ist seit dem 15. April 2017 in Kraft. Laut BAG ist der Anschluss ans EPD eine gesetzliche Pflicht für stationäre Gesundheitseinrichtungen, die zulasten der obligatorischen Krankenpflegeversicherung (OKP) abrechnen: Spitäler, Rehabilitationskliniken, psychiatrische Kliniken, Pflegeheime und Geburtshäuser; seit dem 1. Januar 2022 gilt sie auch für neu zugelassene Ärztinnen und Ärzte. Für die übrigen ambulant tätigen Gesundheitsfachpersonen – darunter die Spitex – und für die Bevölkerung bleibt sie freiwillig.",
          "Technisch beruht das EPD nicht in erster Linie auf FHIR. Seine Spezifikationen, als Anhänge zur Verordnung des EDI über das elektronische Patientendossier (EPDV-EDI), schreiben IHE-Profile vor: CH:XDS für den Dokumentenaustausch, CH:XUA für die Authentifizierung, CH:PIXV3 und CH:PDQV3 für die Patientenidentifikation, CH:ATNA für die Protokollierung. Der sogenannte mobile Zugriff stützt sich demgegenüber auf FHIR R4, über den CH EPR FHIR Implementation Guide von eHealth Suisse (MHD, PDQm, PIXm, IUA).",
          "Für die Zukunft ist die Richtung angekündigt: «eHealth Suisse setzt für die Erarbeitung von neuen Austauschformaten auf den HL7 FHIR Standard.» Die Folge: Eine Software, die «FHIR kann», ist deswegen noch lange nicht ans EPD angeschlossen. Der Anschluss setzt voraus, die EPD-Schnittstellen selbst zu implementieren oder einen Konnektor zu nutzen – eHealth Suisse stellt dafür den Open-Source-Konnektor HUSKY bereit – und in jedem Fall den Anschluss an eine zertifizierte Gemeinschaft oder Stammgemeinschaft."
        ]
      },
      {
        "heading": "Vom EPD zum E-GD: was das EGDG vorsieht",
        "paragraphs": [
          "Der Bundesrat hat dem Parlament am 5. November 2025 die Botschaft zu einem neuen Bundesgesetz über das elektronische Gesundheitsdossier (EGDG) überwiesen, das das EPDG ablösen soll. Der Nationalrat hat die Vorlage am 14. September 2026 mit 134 zu 53 Stimmen bei 10 Enthaltungen angenommen; das Geschäft geht nun an den Ständerat.",
          "Was der Entwurf laut BAG vorsieht: ein E-GD, das jede Person mit Wohnsitz in der Schweiz automatisch und kostenlos erhält und dem sie widersprechen kann; eine Anschlusspflicht, die auf alle Leistungserbringer ausgeweitet wird, die zulasten der obligatorischen Krankenpflegeversicherung abrechnen; der Bund betreibt das technische System, die Kantone tragen die laufenden Betriebskosten. In Betrieb gehen könnte das neue System «frühestens 2030». Parallel dazu läuft das nationale Programm DigiSanté (2025–2034).",
          "Das Feld bewegt sich schneller als das Gesetz. Am 25. Juni 2026 meldete eHealth Suisse, dass Post Sanela ihre Tätigkeit als Plattformanbieterin und Stammgemeinschaft des EPD per Ende 2026 einstellt; ein Wechsel des Anbieters verhindert einen Unterbruch bei der Bereitstellung der Daten. Am 21. August 2026 hielt der Dachverband ARTISET fest, die SGK-N lasse die zentrale Frage der Anschlusspflicht offen, und empfahl im September, sie für Alters- und Pflegeheime bis zur Einführung des E-GD aufzuheben."
        ]
      },
      {
        "heading": "Fragen an einen Anbieter, der «HL7/FHIR» verspricht",
        "paragraphs": [
          "Diese Fragen verlangen kein technisches Wissen, nur schriftliche Antworten. Eine vage Antwort ist auch schon eine Antwort.",
          "Eine Dimension zieht sich durch alle anderen: der Datenschutz. Seit dem 1. September 2023 gilt das revidierte Datenschutzgesetz (revDSG). Gesundheitsdaten sind darin besonders schützenswerte Personendaten nach Art. 5 Bst. c Ziff. 2 DSG, und der EDÖB hält fest, dass Therapeutinnen und Therapeuten im beruflichen Kontext erhaltene Daten grundsätzlich nicht ohne Einwilligung der betroffenen Person bekanntgeben dürfen – zum Datenschutz kommt das Berufsgeheimnis nach Art. 321 StGB hinzu."
        ],
        "bullets": [
          "Welcher Standard und welche Version genau: HL7 v2 in welcher Version, FHIR R4 (4.0.1) oder R5 (5.0.0)?",
          "Welche Nachrichten oder Ressourcen sind tatsächlich implementiert: ADT, ORU, MDM auf der einen Seite; Patient, Observation, DocumentReference auf der anderen?",
          "In welche Richtung fliessen die Daten: lesend, schreibend oder beides? Viele Integrationen empfangen nur.",
          "Gibt es ein schriftliches Konformitätsprofil, Feld für Feld? Weil HL7 v2 die meisten Felder optional lässt, ist diese Vereinbarung von Standort zu Standort der eigentliche Schnittstellenvertrag.",
          "Hat der Anbieter am Digital Health Projectathon von eHealth Suisse, BAG und IHE Suisse getestet? Ein freiwilliger Test, keine Zertifizierung – aber die Teilnahme lässt sich überprüfen.",
          "Zum EPD: Implementiert er die geforderten IHE-Profile selbst oder nutzt er einen Konnektor, und mit welcher Gemeinschaft?",
          "Wer bezahlt die Schnittstelle, und wer wartet sie, wenn die Spitalsoftware die Version wechselt? Genau dort stecken die vergessenen Kosten."
        ]
      },
      {
        "heading": "Transparenz zum Herausgeber dieses Beitrags",
        "paragraphs": [
          "Herausgeberin dieses Beitrags ist CareBond, eine Kommunikations- und Koordinationsplattform, die in der Schweiz bei Infomaniak in Genf gehostet wird, von der Architektur her auf DSGVO und revDSG ausgelegt ist und über ein unveränderliches Audit-Log sowie eine HL7/FHIR-Integration verfügt (FHIR-R4-Server, Empfang von HL7-v2-Nachrichten über HTTPS). Sie ist weder eine Stammgemeinschaft noch eine EPD-Plattformanbieterin, und die Herausgeberin hält keine Zertifizierung: Die obenstehenden Fragen gelten für sie wie für alle anderen."
        ]
      }
    ],
    "takeaways": [
      "«HL7-kompatibel» sagt nichts aus, solange Version, Nachrichten oder Ressourcen und die Richtung des Austauschs nicht schriftlich festgehalten sind.",
      "HL7 v2 lässt die meisten Felder optional: Die Vereinbarung von Standort zu Standort zwischen beiden Systemen ist der eigentliche Schnittstellenvertrag.",
      "Eine Software, die «FHIR kann», ist deswegen nicht ans EPD angeschlossen: Das EPD verlangt IHE-Profile und läuft über eine zertifizierte Gemeinschaft.",
      "Der EPD-Anschluss ist Pflicht für Spitäler, Kliniken, Pflegeheime und Geburtshäuser, die zulasten der OKP abrechnen, sowie für seit 2022 neu zugelassene Ärztinnen und Ärzte; für die Spitex bleibt er freiwillig.",
      "Der Rahmen verschiebt sich: Das EGDG hat am 14. September 2026 den Nationalrat passiert, und das BAG nennt für den Start des E-GD frühestens 2030."
    ],
    "disclaimer": "Dieser Beitrag ist eine allgemeine Information für Leitungen von Pflegeeinrichtungen und stellt keine Rechtsberatung dar. Die konkreten Pflichten hängen vom Kanton, von der Art der Einrichtung und von der jeweiligen Situation ab, und der rechtliche Rahmen ist in Bewegung: Zum Zeitpunkt der Veröffentlichung hat der Nationalrat das EGDG am 14. September 2026 angenommen, das Geschäft ist im Ständerat hängig. Stützen Sie Entscheide auf die zitierten offiziellen Texte und wenden Sie sich an Ihre kantonale Gesundheitsdirektion, an Ihre Stammgemeinschaft oder an eine Rechtsberatung.",
    "sources": [
      {
        "label": "BAG — EPDG: das geltende Gesetz hinter dem EPD (in Kraft seit 15. April 2017)",
        "url": "https://www.bag.admin.ch/de/epdg-das-gesetz-hinter-dem-epd"
      },
      {
        "label": "BAG — Elektronisches Patientendossier: Anschlusspflicht für stationäre Einrichtungen und für seit 1. Januar 2022 neu zugelassene Ärztinnen und Ärzte",
        "url": "https://www.bag.admin.ch/de/elektronisches-patientendossier"
      },
      {
        "label": "BAG — EGDG: E-GD automatisch und kostenlos mit Widerspruchsrecht, erweiterte Anschlusspflicht, Inbetriebnahme frühestens 2030",
        "url": "https://www.bag.admin.ch/de/egdg"
      },
      {
        "label": "BAG — E-GD: Meilensteine und Aktuelles (Botschaft vom 5. November 2025; Nationalrat, 14. September 2026, 134 zu 53 Stimmen bei 10 Enthaltungen)",
        "url": "https://www.bag.admin.ch/de/e-gd-meilensteine-und-aktuelles"
      },
      {
        "label": "BAG — DigiSanté, nationales Programm 2025–2034",
        "url": "https://www.bag.admin.ch/de/digisante-foerderung-der-digitalen-transformation-im-gesundheitswesen"
      },
      {
        "label": "dossierpatient.ch (französischsprachiges EPD-Portal) — Das EPD in Kürze: Gemeinschaften und Stammgemeinschaften, obligatorische und freiwillige Teilnahme",
        "url": "https://www.dossierpatient.ch/professionnels/dep-en-bref"
      },
      {
        "label": "eHealth Suisse — Standards und Interoperabilität: Definition und fünf Ebenen",
        "url": "https://www.e-health-suisse.ch/standardisierung/interoperabilitat/standards-und-interoperabilitat"
      },
      {
        "label": "eHealth Suisse — Technische und syntaktische Standards: Definition von FHIR, REST-APIs, JSON/XML/Turtle, Ergänzung zu HL7 V2 und V3",
        "url": "https://www.e-health-suisse.ch/standardisierung/interoperabilitat/technische-und-syntaktische-standards"
      },
      {
        "label": "eHealth Suisse — Nationale Austauschformate: «eHealth Suisse setzt … auf den HL7 FHIR Standard»",
        "url": "https://www.e-health-suisse.ch/standardisierung/dateninhalt/nationale-austauschformate"
      },
      {
        "label": "eHealth Suisse — EPD-Spezifikationen: IHE-Profile (CH:XDS, CH:XUA, CH:PIXV3, CH:PDQV3, CH:ATNA) als Anhänge zur EPDV-EDI",
        "url": "https://www.e-health-suisse.ch/das-epd/epd-technik/epd-spezifikationen"
      },
      {
        "label": "eHealth Suisse — EPD-Integration in ein Primärsystem: Konnektoren und Open-Source-Konnektor HUSKY",
        "url": "https://www.e-health-suisse.ch/das-epd/epd-anbindung/epd-integration"
      },
      {
        "label": "eHealth Suisse — Post Sanela zieht sich per Ende 2026 aus dem EPD zurück (Meldung vom 25. Juni 2026)",
        "url": "https://www.e-health-suisse.ch/neuigkeiten/post-sanela-zieht-sich-per-ende-2026-aus-dem-epd-zuruck"
      },
      {
        "label": "eHealth Suisse — Digital Health Projectathon 2026: Testveranstaltung mit dem BAG und IHE Suisse, keine Zertifizierung",
        "url": "https://www.e-health-suisse.ch/en/projectathon_event/digital-health-projectathon/projectathon-2026"
      },
      {
        "label": "HL7 International — FHIR R4, Version 4.0.1, veröffentlicht am 30. Oktober 2019, gemischter Status normativ/STU",
        "url": "https://hl7.org/fhir/R4/"
      },
      {
        "label": "HL7 International — aktuelle FHIR-Spezifikation: R5, Version 5.0.0 (März 2023), Lizenz CC0",
        "url": "https://www.hl7.org/fhir/"
      },
      {
        "label": "HL7 Version 2.7, Kapitel 1: Zweck des Standards, optionale Felder, kein «Plug and play» und standortspezifisch ausgehandelte Vereinbarungen",
        "url": "https://www.hl7.eu/HL7v2x/v27/std27/ch01.html"
      },
      {
        "label": "eHealth Suisse — CH EPR FHIR Implementation Guide (FHIR R4; MHD, PDQm, PIXm, IUA)",
        "url": "https://fhir.ch/ig/ch-epr-mhealth/index.html"
      },
      {
        "label": "EDÖB — Rolle des EDÖB: Inkrafttreten des revidierten Datenschutzrechts am 1. September 2023",
        "url": "https://www.edoeb.admin.ch/de/rolle-des-edob"
      },
      {
        "label": "EDÖB — Bekanntgabe von Patientendaten: Gesundheitsdaten als besonders schützenswerte Personendaten (Art. 5 Bst. c Ziff. 2 DSG) und Berufsgeheimnis (Art. 321 StGB)",
        "url": "https://www.edoeb.admin.ch/de/bekanntgabe-von-patientendaten"
      },
      {
        "label": "ARTISET — Politik und Positionen (französische Seite): Stellungnahme vom 21. August 2026, wonach die SGK-N die zentrale Frage der Anschlusspflicht offenlässt",
        "url": "https://artiset.ch/fr/a-notre-propos/engagement/politiques-publiques-prises-de-position"
      },
      {
        "label": "ARTISET — Herbstsession 2026: Empfehlung, die Anschlusspflicht für Alters- und Pflegeheime bis zur Einführung des E-GD aufzuheben (9. September 2026)",
        "url": "https://artiset.ch/de/aktuelles/herbstsession-2026-empfehlungen-der-foederation-artiset"
      }
    ]
  },
  {
    "id": "multilingual",
    "slug": "mehrsprachige-kommunikation-pflege",
    "locale": "de",
    "metaTitle": "Sprachbarriere in der Pflege: der Schweizer Rahmen",
    "metaDescription": "Vier Landessprachen, fremdsprachige Bewohnende: Bundeszahlen, informierte Einwilligung und die Finanzierung des Dolmetschens in der Schweiz.",
    "h1": "Sprachbarriere in der Pflege in der Schweiz: Zahlen, Rechtsrahmen und Dolmetschen",
    "lead": "In einem Alters- und Pflegeheim kommt es oft vor, dass Bewohnerin, Familie und Pflegende nicht dieselbe Erstsprache haben. Das betrifft die informierte Einwilligung, die Qualität der Diagnose und die Sicherheit der Pflege. Was die offiziellen Schweizer Quellen dazu sagen.",
    "sections": [
      {
        "heading": "Wie viele Sprachen werden in der Schweizer Pflege tatsächlich gesprochen?",
        "paragraphs": [
          "Die Schweiz hat vier Landessprachen. Laut dem Bundesamt für Statistik («Sprachenlandschaft in der Schweiz», Neuchâtel 2022, Daten 2020) ist Deutsch beziehungsweise Schweizerdeutsch für 62% der ständigen Wohnbevölkerung eine Hauptsprache, Französisch für 23%, Italienisch für 8,0% und Rätoromanisch für 0,5%. 23% der Bevölkerung nennen eine oder mehrere Nichtlandessprachen als Hauptsprache.",
          "Die für eine Institution aussagekräftigste Zahl steht an anderer Stelle. 2020 hatten 11% der ständigen Wohnbevölkerung ab 15 Jahren keine Landessprache unter ihren Hauptsprachen, 2010 waren es 8,4%. In dieser Gruppe liegt Englisch vorn (20%), vor Portugiesisch (18%), Albanisch (12%) und Spanisch (11%).",
          "Auf Stufe eines Betriebs wird das konkret. Laut dem Dokument «Communiquer avec les patients allophones», 2019 vom Service de médecine de premier recours der Hôpitaux universitaires de Genève (HUG) veröffentlicht, sprechen die Patientinnen und Patienten des Spitals mehr als 70 Sprachen, und eine von acht Personen (12%) spricht überhaupt kein Französisch."
        ]
      },
      {
        "heading": "Auch das Pflegepersonal ist mehrsprachig",
        "paragraphs": [
          "Laut der BFS-Medienmitteilung «Pflegepersonal im Jahr 2018» vom 26. Juni 2020 waren 63,7% des Pflegepersonals in den Spitälern Schweizerinnen und Schweizer, 12,9% deutsche und 11,9% französische Staatsangehörige; in den Pflegeheimen arbeiteten Ende 2018 rund 81 000 Personen im Pflegebereich, was 60 000 Vollzeitäquivalenten entspricht.",
          "Der Bericht des Bundesamtes für Gesundheit «Sprachliche Brücken zur Genesung» beschreibt die Praxis, die sich daraus ergibt, nämlich das Übersetzen dem anwesenden sprachkundigen Personal zu überlassen, und benennt deren Grenzen: Rollenkonflikte, Spannungen im Team und eine Studie, die vermehrte Interpretationsfehler nachwies, wenn ungeschultes Personal beim Dolmetschen einsprang. Dieser Bericht stammt allerdings aus dem Jahr 2011."
        ]
      },
      {
        "heading": "Demenz und Sprache: was man weiss und was nicht",
        "paragraphs": [
          "Das BAG gibt an, dass in der Schweiz schätzungsweise gegen 166 300 Menschen mit Demenz leben und jährlich rund 35 800 Neuerkrankungen hinzukommen. Der Praxisleitfaden von SAMW und FMH hält fest, dass bei fortgeschrittener Demenz eine fehlende Urteilsfähigkeit die Regel ist und Entscheidungen dann durch die Stellvertretung getroffen werden müssen.",
          "Die Vorstellung, eine ältere Person kehre zu ihrer Erstsprache zurück, kursiert in den Teams; der Wissensstand mahnt jedoch zur Vorsicht. Ein Editorial von 2022 in der Zeitschrift für Gerontologie und Geriatrie zu Demenz und Migration betont, dass bei multilingualen Personen noch vieles unklar ist, und verweist auf eine Fallstudie, die umgekehrt eine stärkere Abnahme in der Erstsprache beobachtete."
        ]
      },
      {
        "heading": "Was die Sprachbarriere in der Pflege verändert",
        "paragraphs": [
          "Das HUG-Dokument, das sich auf die internationale Literatur stützt, hält fest: Verglichen mit Personen, welche die Sprache ihres Wohnlands beherrschen, werden fremdsprachige Patientinnen und Patienten häufiger hospitalisiert, bleiben länger, erhalten bei Schmerzen weniger Analgetika und tragen ein grösseres Risiko, Opfer medizinischer Fehler zu werden. Der BAG-Bericht geht in dieselbe Richtung: Verständigungsbarrieren erhöhen die Gefahr unzutreffender Diagnosen und stellen die Kontinuität der Betreuung in Frage.",
          "Am HUG zeigte eine Studie von 2014, dass für 62% der Pflegenden die Sprachbarriere eine häufige Ursache von Schwierigkeiten ist."
        ]
      },
      {
        "heading": "Informierte Einwilligung und Sprachbarriere: was der Schweizer Rahmen sagt",
        "paragraphs": [
          "Das Gesundheitswesen ist weitgehend kantonal geregelt, und die Gesundheitsgesetze unterscheiden sich. Im Kanton Genf etwa sieht das Gesundheitsgesetz (K 1 03) in Art. 45 vor, dass die Patientin oder der Patient das Recht hat, klar und angemessen über den Gesundheitszustand und die möglichen Behandlungen informiert zu werden, und in Art. 46, dass ohne freie und informierte Einwilligung der urteilsfähigen Person keine Behandlung erfolgen darf. Die übrigen Westschweizer Kantone kennen analoge Bestimmungen.",
          "Der Praxisleitfaden von SAMW und FMH wird zur Sprache deutlicher: Die Aufklärung muss in einer klaren und verständlichen Sprache erfolgen, die Ärztin oder der Arzt hat sie auf die Patientin oder den Patienten abzustimmen, «nötigenfalls ist ein Dolmetscher beizuziehen», und es ist zu überprüfen, ob die Aufklärung richtig verstanden wurde.",
          "Fehlt die Urteilsfähigkeit, sieht Art. 377 ZGB vor, dass die behandelnde Ärztin oder der behandelnde Arzt die Behandlung unter Beizug der vertretungsberechtigten Person plant und dass «soweit möglich auch die urteilsunfähige Person in die Entscheidfindung einbezogen» wird. Im Alters- und Pflegeheim hängt dieses «soweit möglich» unmittelbar an der Sprache."
        ]
      },
      {
        "heading": "Wer bezahlt das Dolmetschen in der Schweiz?",
        "paragraphs": [
          "Die Wörter «Dolmetscher», «Dolmetschen» und «Übersetzung» kommen im Bundesgesetz über die Krankenversicherung (KVG, SR 832.10) nicht vor; geprüft am konsolidierten Fedlex-Text, Stand am 1. Januar 2026. Der BAG-Bericht hält zudem ein unveröffentlichtes Urteil des Bundesgerichts vom 31. Dezember 2002 fest, das in einem konkreten Fall verneinte, Dolmetschleistungen im Rahmen der Grundversicherung des KVG zu finanzieren, unter anderem mit der Begründung, einer Übersetzung komme nur unterstützender, nicht aber medizinischer Charakter zu.",
          "Einheitlich ist das System deswegen nicht. In einem Beitrag der Société vaudoise de médecine legt die Anwältin Fanette Sardet dar, dass Dolmetschende nicht als Leistungserbringer im Sinne des KVG anerkannt sind und dass diese Kosten im stationären Bereich in den Fallpauschalen enthalten sind, dass aber im ambulanten Bereich diese Frage von den Tarifpartnern noch immer nicht geregelt ist; der Bundesrat hat mehrere Motionen abgelehnt, die letzte am 7. März 2025.",
          "Kantonale Initiativen bestehen, decken aber nicht alle Fälle ab: Der Kanton Waadt übernimmt diese Kosten für Patientinnen und Patienten des EVAM. Die HUG finanzieren das Dolmetschen über ihre Abteilungsbudgets, für die Patientin oder den Patienten kostenlos; ein Einsatz vor Ort wird der betreffenden Abteilung mit rund 80 bis 120 Franken verrechnet."
        ]
      },
      {
        "heading": "Welche Lösungen die Institutionen heute einsetzen",
        "paragraphs": [
          "Die Quellen laufen zusammen: Für ein Gespräch von medizinischer Tragweite ist die professionelle Dolmetscherin oder der professionelle Dolmetscher die empfohlene Lösung. Die HUG halten fest, dass zahlreiche Studien den Beizug mit einer besseren Diagnose und einem geringeren Risiko medizinischer Fehler in Verbindung bringen."
        ],
        "bullets": [
          "Interkulturell Dolmetschende, vor Ort, per Telefon oder per Videokonferenz, über einen regionalen Vermittlungsdienst. INTERPRET, der nationale Verband, führt ein Qualifizierungssystem mit zwei Stufen: Zertifikat INTERPRET und eidgenössischer Fachausweis. Laut HUG sind diese Fachpersonen zu Unparteilichkeit, Verschwiegenheit und Genauigkeit verpflichtet.",
          "Übersetzte Dokumente: Das Portal migesplus.ch, das vom Schweizerischen Roten Kreuz entwickelt und koordiniert und vom BAG finanziell unterstützt wird, stellt Gesundheitsinformationen in mehreren Sprachen bereit.",
          "Netzwerke zwischen Institutionen: Das Swiss Health Network for Equity, hervorgegangen aus dem Programm Migrant Friendly Hospitals und im Juni 2023 als Verein gegründet, vereint Einrichtungen aus allen Sprachregionen.",
          "Wovon die HUG bei verbindlichen Gesprächen abraten: Angehörige, Kinder, nicht pflegerisches Personal. Sie kennen das medizinische Vokabular selten, und die Patientin oder der Patient hält sich bei heiklen Themen eher zurück.",
          "Maschinelle Übersetzung für den Massenmarkt: Laut demselben Dokument haben mehrere Studien gezeigt, dass die Qualität für einen Risikobereich wie die Medizin nicht ausreicht."
        ]
      },
      {
        "heading": "Gesundheitsinformationen übersetzen heisst besonders schützenswerte Daten bearbeiten",
        "paragraphs": [
          "Den Gesundheitszustand einer Bewohnerin oder eines Bewohners durch einen Übersetzungsdienst für den Massenmarkt laufen zu lassen, heisst besonders schützenswerte Daten bearbeiten. Das revidierte Datenschutzgesetz (revDSG), offiziell Bundesgesetz über den Datenschutz (DSG, SR 235.1), in Kraft seit dem 1. September 2023, zählt Daten über die Gesundheit ausdrücklich zu den besonders schützenswerten Personendaten (Art. 5 Bst. c Ziff. 2). Das ist Schweizer Recht, nicht die europäische DSGVO, auch wenn sich die beiden Texte überschneiden.",
          "Bearbeitet der Dienst die Daten ausserhalb der Schweiz, kommt Art. 16 revDSG hinzu: Die Bekanntgabe ist nur möglich, wenn der Bundesrat festgestellt hat, dass der betreffende Staat einen angemessenen Schutz gewährleistet, oder andernfalls, wenn ein geeigneter Datenschutz anderweitig garantiert wird, etwa durch einen völkerrechtlichen Vertrag, durch Vertragsklauseln, die dem EDÖB vorgängig mitgeteilt wurden, oder durch Standarddatenschutzklauseln."
        ]
      },
      {
        "heading": "Was zur internen Organisation eines Pflegeheims oder Spitex-Dienstes gehört",
        "paragraphs": [
          "Die folgenden Punkte sind keine gesetzlichen Pflichten. Es sind die Organisationsfragen, welche die zitierten Dokumente offenlassen."
        ],
        "bullets": [
          "Die Erstsprache der Bewohnerin oder des Bewohners und jene der vertretungsberechtigten Person erfassen, statt eines Vermerks «spricht Deutsch: ja/nein».",
          "Im Voraus festlegen, in welchen Situationen professionelle Dolmetschende beigezogen werden: Eintritt, Mitteilung einer Diagnose, Einwilligung, Lebensende.",
          "Eine Vereinbarung mit einem regionalen Vermittlungsdienst und ein Telefonzugang, der nachts und am Wochenende nutzbar ist.",
          "Im Dossier festhalten, in welcher Sprache das Gespräch geführt wurde und welche sprachliche Unterstützung eingesetzt wurde.",
          "Die Alltagskommunikation von den klinischen Gesprächen unterscheiden, die verbindlich sind."
        ]
      },
      {
        "heading": "Und wo stehen die digitalen Werkzeuge?",
        "paragraphs": [
          "Digitale Werkzeuge haben beim ersten Teil ihren Platz: eine Familie informieren, eine Nachricht aus dem Alltag weitergeben. Ein Dolmetschen für ein Einwilligungsgespräch ersetzen sie nicht. Auf diesem Feld bietet CareBond einen mehrsprachigen Chat an, dessen Übersetzung auf der eigenen, in der Schweiz gehosteten Infrastruktur läuft, mit einem unveränderlichen Audit-Log: Das beantwortet die Frage von Art. 16 revDSG, nicht jene der Einwilligung."
        ]
      }
    ],
    "takeaways": [
      "2020 hatten 11% der ständigen Wohnbevölkerung ab 15 Jahren keine Landessprache unter ihren Hauptsprachen, 2010 waren es 8,4% (BFS).",
      "Der Praxisleitfaden von SAMW und FMH ist deutlich: Die Aufklärung muss verständlich sein, nötigenfalls über eine Dolmetscherin oder einen Dolmetscher laufen, und das Verständnis ist zu überprüfen.",
      "«Dolmetschen» und «Übersetzung» kommen im KVG nicht vor; im stationären Bereich stecken die Kosten in den Fallpauschalen, im ambulanten Bereich ist die Frage nicht geregelt.",
      "Die HUG raten bei verbindlichen Gesprächen von Angehörigen, Kindern und nicht pflegerischem Personal ab und halten maschinelle Übersetzung für den Massenmarkt in der Medizin für ungenügend.",
      "Gesundheitsinformationen übersetzen zu lassen heisst, besonders schützenswerte Daten im Sinne von Art. 5 revDSG zu bearbeiten, mit eigenen Bedingungen für jede Bekanntgabe ins Ausland (Art. 16 revDSG)."
    ],
    "disclaimer": "Dieser Artikel ist eine allgemeine Information und stellt keine Rechtsberatung dar. Die konkreten Pflichten hängen vom Kanton, von der Art der Einrichtung und von der Situation der einzelnen Person ab; im Zweifelsfall sind der Rechtsdienst der Institution, die kantonale Gesundheitsbehörde oder eine qualifizierte Rechtsvertretung die richtigen Ansprechpartner.",
    "sources": [
      {
        "label": "BFS — Sprachenlandschaft in der Schweiz (Neuchâtel 2022, Daten 2020)",
        "url": "https://dam-api.bfs.admin.ch/hub/api/dam/assets/23164427/master"
      },
      {
        "label": "BFS — Der Pflegepersonalbestand ist zwischen 2012 und 2018 um 17% gewachsen. Pflegepersonal im Jahr 2018 (Medienmitteilung vom 26. Juni 2020)",
        "url": "https://www.bfs.admin.ch/bfs/de/home/aktuell/neue-veroeffentlichungen.assetdetail.13307232.html"
      },
      {
        "label": "BAG — Sprachliche Brücken zur Genesung. Interkulturelles Übersetzen im Gesundheitswesen der Schweiz (2011)",
        "url": "https://www.bag.admin.ch/dam/de/sd-web/t1Mp18derGrE/sprachliche-bruecken-zur-genesung.pdf"
      },
      {
        "label": "BAG — Demenz: Zahlen und Fakten",
        "url": "https://www.bag.admin.ch/de/demenz-zahlen-und-fakten"
      },
      {
        "label": "SAMW / FMH — Praxisleitfaden, Kap. 5.8 «Behandlung und Betreuung von älteren, pflegebedürftigen Menschen mit Demenz»",
        "url": "https://leitfaden.fmh.ch/rechtlicher-leitfaden/5-spezielle-situationen/58-menschen-mit-demenz-arzt.pdf"
      },
      {
        "label": "SAMW / FMH — Praxisleitfaden, Kap. 3.2 «Aufklärung der Patientinnen und Patienten»",
        "url": "https://leitfaden.fmh.ch/rechtlicher-leitfaden/3-grundlagen-der-behandlung/32-patientenaufklaerung.pdf"
      },
      {
        "label": "HUG — Communiquer avec les patients allophones, Service de médecine de premier recours (P. Hudelson, 2019)",
        "url": "https://www.hug.ch/sites/interhug/files/structures/medecine_de_premier_recours/Strategies/aides_linguistiques_2019.pdf"
      },
      {
        "label": "Republik und Kanton Genf — Gesundheitsgesetz (K 1 03), Art. 45 und 46 (französischer Originaltext)",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "Schweizerisches Zivilgesetzbuch, Art. 377 (Behandlungsplan) — offizieller zweisprachiger Text",
        "url": "https://www.droit-bilingue.ch/rs/lex/1907/00/19070042-a377-fr-de.html"
      },
      {
        "label": "Fedlex — Bundesgesetz über die Krankenversicherung (KVG, SR 832.10), konsolidierter Text, Stand am 1. Januar 2026",
        "url": "https://www.fedlex.admin.ch/eli/cc/1995/1328_1328_1328/de"
      },
      {
        "label": "Fedlex — Bundesgesetz über den Datenschutz (DSG, SR 235.1) vom 25. September 2020, Stand am 1. September 2023",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/de"
      },
      {
        "label": "EDÖB — Bekanntgabe von Personendaten ins Ausland",
        "url": "https://www.edoeb.admin.ch/de/bekanntgabe-von-personendaten-ins-ausland"
      },
      {
        "label": "Société vaudoise de médecine — Le défi des barrières linguistiques (F. Sardet, Anwältin für Gesundheitsrecht)",
        "url": "https://www.svmed.ch/doc-mag/dossiers/vulnerabilites-soigner-sans-discriminer/le-defi-des-barrieres-linguistiques/"
      },
      {
        "label": "INTERPRET — Qualifizierungssystem (Zertifikat INTERPRET, eidgenössischer Fachausweis)",
        "url": "https://www.inter-pret.ch/de/ausbildung-und-qualifizierung_0/qualifizierungssystem-interpret-303.html"
      },
      {
        "label": "migesplus.ch — Schweizerisches Rotes Kreuz, mit finanzieller Unterstützung des BAG",
        "url": "https://www.migesplus.ch/"
      },
      {
        "label": "Swiss Health Network for Equity — Mission und Geschichte",
        "url": "https://www.health-equity-network.ch/ueber-uns/mission"
      },
      {
        "label": "Thyrian JR — Demenz und Migration, Z Gerontol Geriatr 2022;55(4):267–268",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9213363/"
      }
    ]
  },
];
