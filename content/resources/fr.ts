import type { Article } from "@/lib/resources";

// Editorial articles for the resources section. Every factual claim in here
// traces to an entry in its own `sources` array, each of which was fetched and
// checked to resolve. Do not add a claim without adding its source.
// Generated from researched drafts; edit freely, it is plain data.

export const articles: Article[] = [
  {
    "id": "data-protection",
    "slug": "nlpd-ems-obligations",
    "locale": "fr",
    "metaTitle": "nLPD et EMS : les obligations sur les données",
    "metaDescription": "Ce que la LPD révisée prévoit pour un EMS ou un service d'aide et de soins à domicile : registre, annonce au PFPDT, analyse d'impact, sous-traitants.",
    "h1": "nLPD : ce que la loi prévoit pour un EMS qui traite des données de résidents",
    "lead": "La LPD révisée, couramment appelée nLPD, est en vigueur depuis le 1er septembre 2023, avec son ordonnance d'application (OPDo). Pour un EMS ou un service d'aide et de soins à domicile, dont les dossiers sont composés pour l'essentiel de données que la loi qualifie de sensibles, quelles obligations en découlent concrètement ? Voici ce que prévoient les textes.",
    "sections": [
      {
        "heading": "LPD fédérale ou loi cantonale : quel texte s'applique à une institution de soins ?",
        "paragraphs": [
          "La LPD fédérale régit le traitement de données personnelles concernant des personnes physiques par des personnes privées et des organes fédéraux (art. 2 al. 1 LPD). Les traitements des entités cantonales et communales relèvent du droit cantonal, qui varie d'un canton à l'autre.",
          "Vaud indique que sa LPrD « concerne uniquement les traitements de données personnelles réalisés par des entités cantonales ou communales vaudoises, ainsi que par des entités privées délégataires de tâches publiques ». Genève retient un autre découpage : la LIPAD vise les institutions publiques cantonales et communales, son art. 3 al. 4 précisant que le traitement de données par une personne physique ou morale de droit privé n'y est pas soumis.",
          "Deux établissements voisins peuvent donc relever de régimes différents. À Genève, une révision de la LIPAD est en préparation et le préposé cantonal (PPDT) a publié une fiche d'information sur les changements à venir."
        ]
      },
      {
        "heading": "Données de santé des résidents : ce que la qualification de « données sensibles » implique",
        "paragraphs": [
          "L'art. 5 let. c LPD range parmi les données sensibles celles qui portent sur la santé ou la sphère intime, les données génétiques, les données biométriques identifiant une personne de manière univoque et les données sur des mesures d'aide sociale. Un dossier de résident en cumule souvent plusieurs.",
          "Lorsque le traitement repose sur le consentement, celui-ci doit être exprès pour les données sensibles (art. 6 al. 7 let. a LPD). C'est ensuite la notion de « données sensibles à grande échelle » qui déclenche plusieurs des obligations ci-dessous, sans que la LPD ni l'OPDo ne chiffrent ce seuil.",
          "Le secret professionnel de l'art. 321 du code pénal (médecins, infirmiers, sages-femmes et leurs auxiliaires) et les règles cantonales sur le dossier subsistent par ailleurs : à Genève, l'art. 57 de la loi sur la santé prévoit une conservation d'au moins dix ans dès la dernière consultation et une destruction après vingt ans au plus tard."
        ]
      },
      {
        "heading": "Registre des activités de traitement : l'exception des 250 collaborateurs n'est pas automatique",
        "paragraphs": [
          "L'art. 12 al. 1 LPD impose au responsable du traitement et au sous-traitant de tenir chacun un registre de leurs activités. Celui du responsable contient au moins :",
          "L'OPDo prévoit une exception souvent lue trop vite : les organismes de droit privé employant moins de 250 collaborateurs au 1er janvier d'une année en sont déliés, « à moins que » le traitement porte sur des données sensibles à grande échelle ou constitue un profilage à risque élevé (art. 24 OPDo).",
          "Les personnes privées, en revanche, ne déclarent plus leur registre au PFPDT : cette déclaration incombe aux organes fédéraux (art. 12 al. 4 LPD)."
        ],
        "bullets": [
          "l'identité du responsable du traitement et la finalité du traitement ;",
          "les catégories de personnes concernées, de données et de destinataires ;",
          "dans la mesure du possible, le délai de conservation et les mesures de sécurité ;",
          "en cas de communication à l'étranger, l'État concerné et les garanties prévues."
        ]
      },
      {
        "heading": "Annoncer une violation de la sécurité des données au PFPDT",
        "paragraphs": [
          "L'art. 24 al. 1 LPD prévoit une annonce « dans les meilleurs délais » au PFPDT des violations entraînant vraisemblablement un risque élevé pour la personnalité ou les droits fondamentaux des personnes concernées. La loi ne fixe aucun délai chiffré, et seules ces violations doivent être annoncées.",
          "Dans son guide du 6 février 2025 sur l'art. 24 LPD, le PFPDT relève que si des données sensibles sont concernées, « p. ex. données de santé, données biométriques ou données sur l'aide sociale, on peut dans de nombreux cas tabler sur un risque élevé » ; en cas de rançongiciel, une première analyse devra, selon les circonstances, supposer ce risque. Les annonces passent par le portail databreach.edoeb.admin.ch.",
          "L'art. 15 OPDo fixe le contenu de l'annonce et impose de documenter les violations, la documentation étant conservée au moins deux ans dès l'annonce. Deux points souvent oubliés : le sous-traitant annonce au responsable toute violation, sans filtre de risque (art. 24 al. 3) ; et le responsable informe la personne concernée lorsque c'est nécessaire à sa protection ou que le PFPDT l'exige (art. 24 al. 4)."
        ]
      },
      {
        "heading": "Analyse d'impact relative à la protection des données (AIPD) : les cas visés par la loi",
        "paragraphs": [
          "L'art. 22 LPD impose une analyse d'impact préalable lorsque le traitement envisagé est susceptible d'entraîner un risque élevé pour la personnalité ou les droits fondamentaux de la personne concernée. Un tel risque existe « notamment » en cas de traitement de données sensibles à grande échelle ou de surveillance systématique de grandes parties du domaine public.",
          "L'analyse se conserve au moins deux ans après la fin du traitement (art. 14 OPDo). Le responsable privé en est délié s'il est tenu d'effectuer le traitement en vertu d'une obligation légale (art. 22 al. 4). Si un risque élevé subsiste malgré les mesures prévues, le PFPDT est consulté au préalable et communique ses objections dans les deux mois (art. 23). Les art. 7, 22 et 23 ne visent enfin pas les traitements débutés avant l'entrée en vigueur de la loi dont les finalités restent inchangées (art. 69 LPD)."
        ]
      },
      {
        "heading": "Le prestataire informatique est un sous-traitant au sens de la loi",
        "paragraphs": [
          "Logiciel métier, hébergeur, outil de messagerie : celui qui traite des données pour le compte de l'institution est un sous-traitant (art. 5 let. k LPD). L'art. 9 pose les conditions : un contrat ou la loi doit prévoir la sous-traitance ; seuls peuvent être effectués les traitements que le responsable serait en droit d'effectuer lui-même ; aucune obligation de garder le secret ne doit l'interdire ; et le responsable doit s'assurer que le sous-traitant garantit la sécurité des données.",
          "Le sous-traitant ne peut lui-même sous-traiter à un tiers qu'avec l'autorisation préalable du responsable (art. 9 al. 3 LPD), spécifique ou générale ; dans ce second cas, il l'informe avant de recourir à d'autres tiers, et le responsable peut s'y opposer (art. 7 OPDo). L'art. 61 let. b LPD punit d'une amende de 250 000 francs au plus, sur plainte, la personne privée qui confie intentionnellement un traitement à un sous-traitant sans que ces conditions soient remplies."
        ]
      },
      {
        "heading": "Journalisation des lectures et règlement de traitement : les exigences les plus oubliées",
        "paragraphs": [
          "La journalisation d'abord (art. 4 al. 1 OPDo) : lors de traitements automatisés de données sensibles à grande échelle ou de profilage à risque élevé, et lorsque les mesures préventives ne suffisent pas, le responsable privé et son sous-traitant privé journalisent au moins l'enregistrement, la modification, la lecture, la communication, l'effacement et la destruction des données. La lecture, donc : qui a consulté un dossier, pas seulement qui l'a modifié. Le journal se conserve au moins un an, séparément du système.",
          "Le règlement de traitement ensuite (art. 5 OPDo), pour les mêmes traitements mais sans la condition tenant aux mesures préventives : un document décrit l'organisation interne, les procédures de traitement et de contrôle et les mesures de sécurité. Les deux servent les objectifs de l'art. 2 OPDo : confidentialité, disponibilité, intégrité, traçabilité."
        ]
      },
      {
        "heading": "Ce qui a changé depuis le 1er septembre 2023, sanctions comprises",
        "paragraphs": [
          "Pour une institution organisée sous l'ancien droit, le portail PME de la Confédération résume les principales nouveautés :",
          "Les sanctions, enfin, ne fonctionnent pas comme celles du RGPD : la LPD ne prévoit pas d'amende administrative contre l'entreprise. Les art. 60 à 63 punissent d'une amende de 250 000 francs au plus certaines infractions intentionnelles, pour l'essentiel sur plainte ; l'entreprise ne peut être condamnée à la place des personnes punissables que si l'amende envisagée ne dépasse pas 50 000 francs (art. 64 al. 2). La poursuite incombe aux cantons."
        ],
        "bullets": [
          "seules les données des personnes physiques sont désormais couvertes, et non plus celles des personnes morales ;",
          "les données génétiques et biométriques sont expressément qualifiées de sensibles (art. 5 let. c LPD) ;",
          "la protection des données dès la conception et par défaut devient une obligation légale (art. 7 LPD) ;",
          "le registre des activités de traitement devient obligatoire, sous réserve de l'art. 24 OPDo ;",
          "l'analyse d'impact et l'annonce des violations au PFPDT sont nouvelles (art. 22 et 24 LPD) ;",
          "le devoir d'informer est étendu : « la collecte de toutes les données personnelles doit donner lieu à une information préalable »."
        ]
      },
      {
        "heading": "Ce que cela implique pour le choix des outils",
        "paragraphs": [
          "Plusieurs de ces obligations se jouent dans l'architecture des systèmes, pas dans une annexe contractuelle.",
          "CareBond, éditeur de cette publication, développe une plateforme de communication pour institutions de soins hébergée en Suisse (Infomaniak, Genève), avec un journal d'audit immuable des accès et des modifications et une intégration HL7/FHIR. Nous ne détenons ni ne revendiquons aucune certification en protection des données : la conformité dépend des traitements et de l'organisation de l'institution, pas du choix d'un logiciel."
        ]
      }
    ],
    "takeaways": [
      "La LPD fédérale vise les personnes privées et les organes fédéraux ; le droit cantonal vise les entités publiques, et son champ diffère entre Vaud et Genève.",
      "L'exception de registre pour les organismes de moins de 250 collaborateurs tombe en cas de traitement de données sensibles à grande échelle (art. 24 OPDo).",
      "Seules les violations entraînant vraisemblablement un risque élevé s'annoncent au PFPDT, « dans les meilleurs délais » : la loi ne fixe aucun délai chiffré.",
      "Le sous-traitant annonce au responsable du traitement toute violation, quel que soit le risque (art. 24 al. 3 LPD).",
      "La journalisation de l'art. 4 OPDo couvre aussi la simple lecture d'un dossier ; le journal se conserve au moins un an, séparément du système."
    ],
    "disclaimer": "Information générale sur le droit suisse de la protection des données, à jour au 28 septembre 2026. Ce texte ne constitue pas un conseil juridique : les obligations concrètes dépendent du canton, du statut de l'institution et des traitements en cause. Pour une situation particulière, le préposé cantonal à la protection des données, le PFPDT ou un conseil juridique sont les interlocuteurs compétents.",
    "sources": [
      {
        "label": "Loi fédérale sur la protection des données (LPD, RS 235.1), état au 1er septembre 2023 — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/fr"
      },
      {
        "label": "Ordonnance sur la protection des données (OPDo, RS 235.11), état au 1er septembre 2023 — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/fr"
      },
      {
        "label": "PFPDT — Guide relatif à l'annonce des violations de la sécurité des données et l'information des personnes concernées en vertu de l'art. 24 LPD, du 6 février 2025 (version 1.2 du 23 avril 2025, PDF)",
        "url": "https://www.edoeb.admin.ch/dam/fr/sd-web/T64CAUyvAMcF/1_2%20Leitfaden%20des%20ED%C3%96B%20betreffend%20die%20Meldung%20von%20Datensicherheitsverletzungen%20und%20Information%20der%20Betroffenen%20nach%20Art.%2024%20DSG_FR.pdf"
      },
      {
        "label": "PFPDT — DataBreach : portail d'annonce des violations de la sécurité des données",
        "url": "https://www.edoeb.admin.ch/fr/databreach-2"
      },
      {
        "label": "PFPDT — DataReg : déclaration du registre des activités de traitement (organes fédéraux)",
        "url": "https://www.edoeb.admin.ch/fr/datareg-2"
      },
      {
        "label": "Portail PME de la Confédération — Nouvelle loi sur la protection des données (nLPD)",
        "url": "https://www.kmu.admin.ch/fr/nouvelle-loi-sur-la-protection-des-donnees-nlpd"
      },
      {
        "label": "Loi genevoise sur l'information du public, l'accès aux documents et la protection des données personnelles (LIPAD, rsGE A 2 08), art. 3",
        "url": "https://silgeneve.ch/legis/data/rsg_a2_08.htm"
      },
      {
        "label": "Loi genevoise sur la santé (LS, rsGE K 1 03), art. 57 — conservation du dossier",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "PPDT Genève — Fiche info : nouvelle LIPAD, les principaux changements à venir en matière de protection des données personnelles",
        "url": "https://www.ge.ch/document/fiche-info-du-ppdt-nouvelle-lipad-principaux-changements-venir-matiere-protection-donnees-personnelles"
      },
      {
        "label": "République et canton de Genève — Protection des données et transparence (rôle du PPDT)",
        "url": "https://www.ge.ch/organisation/protection-donnees-transparence"
      },
      {
        "label": "État de Vaud — Droit de la protection des données personnelles (champ d'application de la LPrD)",
        "url": "https://www.vd.ch/portail-securise-des-prestations-en-ligne/bonnes-pratiques-en-matiere-de-securite-informatique-et-de-protection-des-donnees-personnelles/droit-de-la-protection-des-donnees-personnelles"
      },
      {
        "label": "Code pénal suisse (RS 311.0), art. 321 — violation du secret professionnel",
        "url": "https://www.fedlex.admin.ch/eli/cc/54/757_781_799/fr"
      }
    ]
  },
  {
    "id": "hosting",
    "slug": "heberger-donnees-sante-suisse",
    "locale": "fr",
    "metaTitle": "Données de santé : faut-il héberger en Suisse ?",
    "metaDescription": "Ce que la LPD exige vraiment : pas d'obligation générale d'héberger en Suisse, mais des conditions strictes pour communiquer des données à l'étranger.",
    "h1": "Héberger des données de santé en Suisse : ce que la loi exige vraiment",
    "lead": "« Nos données doivent-elles rester en Suisse ? » La question revient dans presque chaque appel d'offres d'EMS, de service d'aide et de soins à domicile ou d'hôpital. Le droit fédéral ne pose pas d'obligation générale de conserver les données de santé sur sol suisse : il encadre leur communication à l'étranger. Des règles sectorielles et cantonales, elles, peuvent imposer une localisation.",
    "sections": [
      {
        "heading": "Existe-t-il une obligation d'héberger les données de santé en Suisse ?",
        "paragraphs": [
          "La loi fédérale du 25 septembre 2020 sur la protection des données (LPD, RS 235.1), en vigueur depuis le 1er septembre 2023, range « les données sur la santé » parmi les données personnelles sensibles (art. 5, let. c, ch. 2). Elle ne contient en revanche aucune règle de localisation : ce qu'elle encadre, ce sont les conditions de la communication à l'étranger (art. 16 et 17).",
          "Des obligations de localisation existent, mais dans des régimes particuliers. L'ordonnance du 22 mars 2017 sur le dossier électronique du patient (ODEP, RS 816.11) prévoit à son art. 12, al. 5, que « les supports de données doivent se trouver en Suisse et être régis par le droit suisse ». La disposition figure au chapitre consacré aux communautés du DEP, non aux traitements ordinaires d'un établissement.",
          "S'y ajoute le droit cantonal : les institutions accomplissant une tâche publique déléguée relèvent souvent d'une loi cantonale sur la protection des données, dont les exigences d'externalisation diffèrent de celles de la LPD. L'autorité fribourgeoise compétente rappelait ainsi, le 7 novembre 2024, que la reconnaissance des entreprises américaines certifiées n'a que des effets limités sur ces mesures."
        ]
      },
      {
        "heading": "Ce que la LPD prévoit pour la communication de données à l'étranger",
        "paragraphs": [
          "L'art. 16, al. 1, LPD pose le principe : des données peuvent être communiquées à l'étranger si le Conseil fédéral a constaté que l'État concerné dispose d'une législation assurant un niveau de protection adéquat. À défaut, l'al. 2 énumère les garanties admises : traité international, clauses contractuelles communiquées au Préposé fédéral à la protection des données et à la transparence (PFPDT), garanties spécifiques, clauses types reconnues par lui, règles d'entreprise contraignantes. L'art. 17 ajoute des dérogations dont la liste est exhaustive.",
          "La définition même de la communication est sous-estimée. Selon l'art. 5, let. e, LPD, communiquer, c'est « transmettre des données personnelles ou les rendre accessibles ». Un accès à distance depuis l'étranger — support de nuit, maintenance, administration — entre dans cette définition, même si les serveurs ne bougent pas.",
          "Le manquement est sanctionné, mais pas comme on l'imagine souvent. L'art. 61 LPD punit, sur plainte, d'une amende de 250 000 francs au plus les personnes privées qui, intentionnellement, communiquent des données à l'étranger en violation de l'art. 16 ou recourent à un sous-traitant hors des conditions de l'art. 9. La sanction vise des personnes physiques ; l'art. 64, al. 2, LPD permet de condamner l'entreprise à leur place lorsque l'amende n'excède pas 50 000 francs."
        ]
      },
      {
        "heading": "La liste des États à protection adéquate : où la trouver et comment la lire",
        "paragraphs": [
          "Ce n'est pas la liste de la Commission européenne : c'est l'annexe 1 de l'ordonnance du 31 août 2022 sur la protection des données (OPDo, RS 235.11), à laquelle renvoie son art. 8, al. 1. Elle mentionne les États de l'Union européenne, l'Islande, le Liechtenstein, la Norvège et plusieurs territoires européens, ainsi que l'Andorre, l'Argentine, le Canada, Israël, Monaco, la Nouvelle-Zélande, le Royaume-Uni, l'Uruguay et les États-Unis.",
          "Certaines entrées sont conditionnelles : pour le Canada, le niveau adéquat n'est réputé garanti que lorsque s'applique, dans le domaine privé, la loi fédérale du 13 avril 2000 sur la protection des renseignements personnels et les documents électroniques, ou une loi provinciale essentiellement similaire. Et la liste vit : l'art. 8, al. 4 et 6, OPDo prévoit une réévaluation périodique et la modification de l'annexe, dont la dernière mise à jour date du 15 septembre 2024."
        ]
      },
      {
        "heading": "Prestataire américain : ce que le Data Privacy Framework couvre et ne couvre pas",
        "paragraphs": [
          "Le Conseil fédéral a constaté le 14 août 2024 que les entreprises américaines certifiées offrent un niveau de protection adéquat, avec effet au 15 septembre 2024. L'entrée à l'annexe 1 est étroite : le niveau adéquat « est réputé garanti pour les données personnelles traitées par les organisations certifiées conformément aux principes du cadre de protection des données entre la Suisse et les États-Unis ». Être une entreprise américaine ne suffit pas, ni relever du seul volet européen.",
          "Autre sujet, souvent confondu avec le premier : la juridiction. Le CLOUD Act de 2018 a introduit le 18 U.S. Code § 2713, selon lequel un fournisseur soumis au droit américain doit répondre aux obligations de conservation, de sauvegarde et de divulgation portant sur les données « within such provider's possession, custody, or control, regardless of whether [they are] located within or outside of the United States ». Le critère est le contrôle, non l'emplacement du disque. Et une constatation d'adéquation ne règle que la licéité du transfert : les art. 8 et 9 LPD s'appliquent quel que soit le pays."
        ]
      },
      {
        "heading": "Ce que le droit attend du contrat avec l'hébergeur",
        "paragraphs": [
          "L'art. 9 LPD fixe le socle : le traitement peut être confié à un sous-traitant pour autant qu'un contrat ou la loi le prévoie, que seuls soient effectués les traitements que l'institution serait en droit d'effectuer elle-même, et qu'aucune obligation de garder le secret ne l'interdise. Le responsable doit s'assurer que le sous-traitant peut garantir la sécurité des données ; la sous-traitance en cascade suppose une autorisation préalable (art. 7 OPDo).",
          "Le PFPDT retient que le fournisseur de services en nuage agit généralement comme sous-traitant, et propose une liste de vérifications : est-il tenu de ne traiter les données que selon des instructions documentées ? Le contrat règle-t-il leur effacement ou leur restitution à l'échéance ? Le responsable du traitement, rappelle l'autorité, le demeure même lorsqu'il confie le traitement à un tiers.",
          "Sans constatation d'adéquation, l'art. 9 OPDo énumère le contenu minimal des clauses : licéité, proportionnalité, transparence et finalité ; catégories de données et de personnes ; États destinataires ; conservation et effacement ; sécurité ; annonce des violations ; droits des personnes concernées. Le registre des activités de traitement mentionne l'État destinataire et les garanties de l'art. 16, al. 2 (art. 12 LPD), que l'information des personnes concernées nomme également (art. 19, al. 4, LPD)."
        ]
      },
      {
        "heading": "« Hébergé en Suisse » : ce que cela ne règle pas",
        "paragraphs": [
          "L'emplacement du serveur répond à une seule question, celle du transfert ; il ne dit rien de la sécurité effective. L'art. 8 LPD impose des mesures appropriées au risque ; l'OPDo fixe quatre objectifs (art. 2) — confidentialité, disponibilité, intégrité, traçabilité — et détaille les mesures attendues (art. 3), du contrôle des accès à la correction des failles critiques connues. Sauvegardes, environnements de test, surveillance technique, notifications, mesure d'audience et traduction automatique sont autant de canaux périphériques par lesquels des données quittent la Suisse.",
          "La journalisation, elle, est conditionnelle. Selon l'art. 4 OPDo, lors de traitements automatisés de données sensibles à grande échelle ou de profilage à risque élevé, et lorsque les mesures préventives ne suffisent pas, les responsables privés et leurs sous-traitants journalisent au moins l'enregistrement, la modification, la lecture, la communication, l'effacement et la destruction des données ; les journaux se conservent au moins un an, séparément du système. S'y ajoutent le règlement de traitement (art. 5 OPDo), l'analyse d'impact (art. 22 LPD) et l'annonce des violations (art. 24 LPD).",
          "Reste le secret professionnel. L'art. 321 du Code pénal vise notamment les médecins, sages-femmes, psychologues et infirmiers, « ainsi que leurs auxiliaires », et punit la révélation d'un secret, sur plainte, d'une peine privative de liberté de trois ans au plus ou d'une peine pécuniaire. Qui, dans une chaîne technique, est un « auxiliaire » au sens de cette disposition reste une question juridique ; un serveur genevois n'y répond pas."
        ]
      },
      {
        "heading": "Les questions qui permettent de vérifier avant de signer",
        "paragraphs": [
          "Ces points découlent des dispositions citées plus haut."
        ],
        "bullets": [
          "Où se trouvent les serveurs de production, les sauvegardes et les environnements de test, et quelle entité juridique signe le contrat ?",
          "Depuis quels pays des personnes accèdent-elles aux données en clair, et quels sous-traitants ultérieurs interviennent ?",
          "Une entité soumise au droit américain figure-t-elle dans la chaîne, et est-elle certifiée au volet suisse du Data Privacy Framework ?",
          "Quelles opérations sont journalisées, combien de temps les journaux sont-ils conservés, qui peut les consulter ?",
          "Qu'advient-il des données à l'échéance : restitution en quel format, effacement dans quel délai, avec quelle preuve ?"
        ]
      },
      {
        "heading": "En résumé",
        "paragraphs": [
          "Le droit suisse n'interdit pas d'héberger des données de santé à l'étranger : il conditionne le transfert et sanctionne les manquements. Héberger en Suisse, à l'inverse, ne suffit pas aux exigences de sécurité, de journalisation et de secret professionnel. La question utile n'est pas « où sont les serveurs ? », mais « qui accède à quoi, sous quel droit, avec quelle trace, et que se passe-t-il quand le contrat s'arrête ? ».",
          "CareBond, éditeur de cette publication, est une plateforme genevoise de communication pour institutions de soins : hébergement en Suisse chez Infomaniak, conception selon le RGPD et la nLPD, journal d'audit immuable, intégration HL7/FHIR, traduction multilingue interne, rapports signés par HMAC. Ce sont des choix d'architecture, non des certifications : la grille ci-dessus vaut aussi pour nous."
        ]
      }
    ],
    "takeaways": [
      "Aucune règle fédérale générale n'impose de conserver les données de santé en Suisse : la LPD encadre la communication à l'étranger (art. 16 et 17).",
      "Exception sectorielle nette : l'art. 12, al. 5, ODEP exige, pour les communautés du dossier électronique du patient, des supports de données situés en Suisse et régis par le droit suisse.",
      "La liste des États adéquats est l'annexe 1 OPDo, révisée périodiquement ; l'entrée « États-Unis » (15 septembre 2024) ne vaut que pour les organisations certifiées au volet suisse du Data Privacy Framework.",
      "Rendre des données accessibles depuis l'étranger est déjà une communication au sens de l'art. 5, let. e, LPD, même si les serveurs restent en Suisse.",
      "Les amendes de l'art. 61 LPD (250 000 francs au plus, sur plainte) visent des personnes privées ; l'entreprise n'est condamnée à leur place que dans le cas de l'art. 64, al. 2, LPD."
    ],
    "disclaimer": "Cet article fournit une information générale et ne constitue pas un conseil juridique. Les obligations applicables dépendent du canton, du statut de l'institution et de la situation concrète ; en cas de doute, adressez-vous à votre autorité cantonale de protection des données, au PFPDT ou à un conseil juridique.",
    "sources": [
      {
        "label": "Loi fédérale du 25 septembre 2020 sur la protection des données (LPD, RS 235.1) — art. 5, 8, 9, 12, 16, 17, 19, 22, 24, 61 et 64",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/fr"
      },
      {
        "label": "Ordonnance du 31 août 2022 sur la protection des données (OPDo, RS 235.11) — art. 2 à 9, 24 et annexe 1",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/fr"
      },
      {
        "label": "Modification du 14 août 2024 de l'annexe 1 OPDo, en vigueur depuis le 15 septembre 2024 (RO 2024 435)",
        "url": "https://www.fedlex.admin.ch/eli/oc/2024/435/fr"
      },
      {
        "label": "Conseil fédéral — communiqué du 14 août 2024 sur le Swiss-US Data Privacy Framework",
        "url": "https://www.admin.ch/gov/fr/accueil/documentation/communiques.msg-id-102054.html"
      },
      {
        "label": "PFPDT — Communication de données à l'étranger",
        "url": "https://www.edoeb.admin.ch/fr/communication-de-donnees-a-letranger"
      },
      {
        "label": "PFPDT — Externalisation (sous-traitance)",
        "url": "https://www.edoeb.admin.ch/fr/externalisation-sous-traitance"
      },
      {
        "label": "PFPDT — Traitement de données dans un nuage informatique",
        "url": "https://www.edoeb.admin.ch/fr/traitement-de-donnees-dans-un-nuage-informatique"
      },
      {
        "label": "Ordonnance du 22 mars 2017 sur le dossier électronique du patient (ODEP, RS 816.11) — art. 12, al. 5",
        "url": "https://www.fedlex.admin.ch/eli/cc/2017/204/fr"
      },
      {
        "label": "Code pénal suisse (RS 311.0) — art. 321, violation du secret professionnel",
        "url": "https://www.fedlex.admin.ch/eli/cc/54/757_781_799/fr"
      },
      {
        "label": "18 U.S. Code § 2713, introduit par le CLOUD Act (2018)",
        "url": "https://www.law.cornell.edu/uscode/text/18/2713"
      },
      {
        "label": "Autorité cantonale de la transparence, de la protection des données et de la médiation (Fribourg), 7 novembre 2024 — effets limités sur les mesures d'externalisation",
        "url": "https://www.fr.ch/atprdm/actualites/entreprises-certifiees-des-etats-unis-avec-un-niveau-de-protection-des-donnees-adequat-effets-limites-sur-les-mesures-dexternalisation"
      },
      {
        "label": "Data Privacy Framework — site officiel du programme (Département du commerce des États-Unis), cité en note de l'annexe 1 OPDo",
        "url": "https://www.dataprivacyframework.gov/"
      }
    ]
  },
  {
    "id": "families",
    "slug": "communication-familles-ems",
    "locale": "fr",
    "metaTitle": "Familles et EMS : ce que le droit suisse impose",
    "metaDescription": "Secret professionnel, représentation selon le Code civil, traçabilité : ce que le droit suisse impose dans la communication avec les familles en EMS.",
    "h1": "Communication avec les familles en EMS : ce que le droit suisse impose, et ce qui relève de l'organisation",
    "lead": "Dans un EMS, la question n'est pas de savoir s'il faut parler aux familles, mais qui a le droit d'apprendre quoi, à quel rythme, et comment le démontrer six mois plus tard. Entre secret professionnel, représentation légale et protection des données, la marge est plus étroite qu'il n'y paraît. Ce qui suit décrit, en termes généraux, ce que prévoient les textes fédéraux et deux lois cantonales.",
    "sections": [
      {
        "heading": "Ce que les familles reprochent aux institutions",
        "paragraphs": [
          "Le Bureau cantonal de médiation santé et social (BCMSS) du canton de Vaud fait état, dans son rapport d'activité 2023, de 227 doléances : 59 % émanent de patients, 24 % de proches, 12 % de professionnels. Les EMS y arrivent en troisième position, derrière les cabinets privés et le CHUV. Ces chiffres valent pour un seul canton.",
          "Le plus instructif est le dénominateur commun que relève la médiatrice : « L'élément rassembleur de toutes les médiations consiste au fait que la personne concernée a été confronté à une perte du lien, à un manque de communication lors d'un moment clef du projet de soin. » La communication, écrit-elle, est « un acte en soi, à part entière ». Des établissements ont eux-mêmes saisi le bureau pour des « difficultés de collaboration avec les proches » ; 83 % des médiations ont abouti."
        ]
      },
      {
        "heading": "Ce que la loi impose, et ce qu'elle laisse ouvert",
        "paragraphs": [
          "Une part importante des droits des patients relève du droit cantonal ; l'Office fédéral de la santé publique recommande lui-même « de se référer aux législations cantonales pour le détail ». Les exemples ci-dessous, genevois et vaudois, ne se transposent pas tels quels ailleurs.",
          "À Genève, la loi sur la santé (K 1 03) prévoit que le patient reçoit, à son admission dans une institution de santé, une information écrite sur ses droits, ses devoirs et les conditions de son séjour, et ajoute : « Si nécessaire, ses proches sont également informés » (art. 45, al. 3). En fin de vie, « leurs proches doivent bénéficier d'une assistance et des conseils nécessaires » (art. 39, al. 1).",
          "Ce que ces dispositions ne fixent pas : la fréquence des nouvelles, le référent nommé, le délai de rappel après une chute, le canal utilisé. C'est là que se logent les doléances. La loi pose un plancher ; le reste se décide dans l'établissement."
        ]
      },
      {
        "heading": "Secret professionnel : par défaut, un proche est un tiers",
        "paragraphs": [
          "L'article 321 du Code pénal soumet au secret professionnel une liste de professions, dont les médecins, sages-femmes, psychologues, infirmiers, physiothérapeutes et diététiciens, « ainsi que leurs auxiliaires ». Qui révèle un secret connu dans l'exercice de sa profession est, sur plainte, puni d'une peine privative de liberté de trois ans au plus ou d'une peine pécuniaire. La révélation n'est pas punissable si elle intervient avec le consentement de l'intéressé, ou si, sur la proposition du détenteur du secret, l'autorité supérieure ou l'autorité de surveillance l'autorise par écrit.",
          "La conséquence surprend beaucoup de familles : le lien de parenté ne fonde pas, à lui seul, un accès à l'information clinique. Un fils, une épouse, une sœur restent des tiers tant que le résident capable de discernement n'y a pas consenti — consentement qui peut ne porter que sur certains sujets, et être retiré.",
          "S'y ajoute la protection des données : la LPD, en vigueur dans sa version actuelle depuis le 1er septembre 2023, compte les « données sur la santé » parmi les données sensibles (art. 5, let. c, ch. 2). Le Préposé fédéral le rappelle : « Dans le domaine médical et paramédical, les données traitées sont souvent sensibles. » La LPD est une loi suisse, distincte du RGPD européen."
        ]
      },
      {
        "heading": "Qui peut recevoir quoi : la cascade du Code civil",
        "paragraphs": [
          "Quand le résident n'est plus capable de discernement, le Code civil désigne l'interlocuteur. Son article 377 charge le médecin traitant d'établir le traitement avec « la personne habilitée à la représenter dans le domaine médical » et de la renseigner « sur tous les aspects pertinents du traitement envisagé », l'intéressé étant associé à la décision « dans la mesure du possible ».",
          "L'article 378 fixe l'ordre : la personne désignée dans les directives anticipées ou dans un mandat pour cause d'inaptitude ; le curateur chargé de la représentation médicale ; le conjoint ou partenaire enregistré, s'il fait ménage commun ou fournit une assistance personnelle régulière ; la personne qui fait ménage commun et fournit une telle assistance ; puis descendants, père et mère, frères et sœurs, à condition de fournir une assistance personnelle régulière. En cas de pluralité, le médecin peut de bonne foi présumer que chacun agit avec le consentement des autres.",
          "Trois rôles se distinguent donc : le représentant dans le domaine médical, le contact administratif et le proche qui téléphone le plus souvent. Les deux premiers relèvent du droit, le troisième de l'organisation."
        ]
      },
      {
        "heading": "Ce qui se décide à l'admission",
        "paragraphs": [
          "Les points qui suivent ne sont pas des obligations légales : ils relèvent de l'organisation interne et se règlent mieux à l'entrée, pendant que le résident peut encore dire ce qu'il veut."
        ],
        "bullets": [
          "Consigner l'existence de directives anticipées, d'un mandat pour cause d'inaptitude ou d'une curatelle, et le nom du représentant dans le domaine médical.",
          "Distinguer par écrit trois rôles : représentation médicale, contact administratif, proches informés du quotidien.",
          "Demander au résident capable de discernement à qui l'on peut parler et de quoi, sachant qu'il peut se raviser.",
          "Séparer les nouvelles du quotidien, qui circulent s'il y consent, de l'information clinique, qui suit la cascade du Code civil.",
          "Fixer un rythme de contact, un référent nommé, et prévoir qui appelle, et dans quel délai, en cas d'événement indésirable.",
          "Dater chaque transmission et l'attribuer à son auteur."
        ]
      },
      {
        "heading": "Garder une trace : ce que prévoit la protection des données",
        "paragraphs": [
          "Le dernier point rejoint une exigence de forme. À Genève, le dossier indique « l'auteur et la date de chaque inscription » (art. 53) et, s'il est informatisé, « toute adjonction, suppression ou autre modification » doit rester décelable, avec son auteur et sa date (art. 54).",
          "La LPD pose des principes qui valent aussi pour les échanges avec les familles : licéité, bonne foi, proportionnalité et finalités reconnaissables (art. 6), sécurité adéquate au risque (art. 8), devoir d'informer lors de la collecte (art. 19), droit d'accès (art. 25).",
          "Son ordonnance va plus loin. Selon l'art. 4 OPDo, lors de traitements automatisés de données sensibles à grande échelle et lorsque les mesures préventives ne suffisent pas, le responsable du traitement privé journalise au moins l'enregistrement, la modification, la lecture, la communication, l'effacement et la destruction des données. Le journal indique l'auteur du traitement, sa nature, sa date et son heure ; il se conserve au moins un an, séparément du système.",
          "Un établissement qui communique par téléphone et notes manuscrites répond mal à « qui a dit quoi, à qui, et quand »."
        ]
      },
      {
        "heading": "Et si un proche demande le dossier ?",
        "paragraphs": [
          "Le droit de consulter le dossier appartient au patient. À Genève, il peut le consulter et s'en faire remettre en principe gratuitement les pièces ; ce droit « ne s'étend pas aux notes rédigées par le professionnel de la santé exclusivement pour son usage personnel, ni aux données concernant des tiers et protégées par le secret professionnel » (art. 55). Vaud consacre un droit équivalent à l'art. 24 de sa loi sur la santé publique.",
          "Le décès ne fait pas tomber le secret. À Genève, les proches justifiant d'un intérêt digne de protection peuvent être informés des causes du décès et du traitement qui l'a précédé, sauf opposition expresse du défunt ; ils désignent un médecin pour recueillir les données, et la commission de levée du secret doit être saisie (art. 55A). Vaud subordonne l'accès à ce que le professionnel « se soit fait délier du secret par l'autorité compétente ».",
          "Les blocages portent souvent sur le délai : selon le rapport vaudois, la médiatrice rédige un courrier rappelant le droit d'accès et invite le professionnel à remettre le dossier dans les dix jours."
        ]
      },
      {
        "heading": "Où orienter une famille mécontente",
        "paragraphs": [
          "Les huit cantons de la Suisse latine — Berne, Fribourg, Genève, Jura, Neuchâtel, Tessin, Valais et Vaud — ont publié le 3 septembre 2024 une nouvelle édition de la brochure « L'essentiel sur les droits des patients ». Des instances reçoivent par ailleurs les différends : le BCMSS dans le canton de Vaud, la commission de surveillance des professions de la santé et des droits des patients à Genève.",
          "Cet article est publié par CareBond, plateforme suisse de communication pour les établissements de soins, hébergée chez Infomaniak à Genève, conçue selon les principes du RGPD et de la nLPD, avec journal d'audit immuable et intégration HL7/FHIR. Les exigences décrites ici existent indépendamment de tout logiciel : elles se remplissent aussi avec un classeur, pourvu qu'il soit tenu."
        ]
      }
    ],
    "takeaways": [
      "Le lien de parenté ne fonde pas, à lui seul, un accès à l'information clinique : c'est le consentement du résident, ou la cascade de l'art. 378 CC, qui désigne l'interlocuteur.",
      "Trois rôles se distinguent : représentant dans le domaine médical, contact administratif, proches informés du quotidien.",
      "Le rapport vaudois 2023 situe le déclencheur des médiations dans le moment et le rythme de l'information — que la loi ne fixe pas.",
      "L'art. 4 OPDo prévoit, pour certains traitements automatisés de données sensibles à grande échelle, la journalisation des accès avec auteur, date et heure.",
      "Les droits des patients relèvent largement du droit cantonal : l'OFSP renvoie lui-même aux législations cantonales pour le détail."
    ],
    "disclaimer": "Cet article est une information générale et ne constitue pas un conseil juridique. Les droits des patients et des résidents relèvent largement du droit cantonal : les obligations concrètes dépendent du canton, du type d'établissement et de la situation individuelle. Pour un cas précis, il convient de se référer à la législation cantonale applicable et, au besoin, à un conseil juridique ou à l'instance cantonale compétente.",
    "sources": [
      {
        "label": "Loi fédérale sur la protection des données (LPD), RS 235.1, état au 1er septembre 2023 — art. 5, 6, 8, 19 et 25",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/fr"
      },
      {
        "label": "Ordonnance sur la protection des données (OPDo), RS 235.11 — art. 4, journalisation",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/fr"
      },
      {
        "label": "Code pénal suisse, RS 311.0 — art. 321, violation du secret professionnel",
        "url": "https://www.fedlex.admin.ch/eli/cc/54/757_781_799/fr"
      },
      {
        "label": "Code civil suisse, RS 210 — art. 377 et 378, représentation dans le domaine médical",
        "url": "https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr"
      },
      {
        "label": "Canton de Genève, loi sur la santé (K 1 03) — art. 39, 45, 53, 54, 55 et 55A",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "Bureau cantonal de médiation santé et social (VD), rapport d'activité 2023",
        "url": "https://www.vd.ch/fileadmin/user_upload/organisation/dsas/sg-dsas/fichiers_pdf/Rapport_act_BCMSS_2023.pdf"
      },
      {
        "label": "Canton de Vaud — accès au dossier du patient (art. 24 de la loi du 29 mai 1985 sur la santé publique)",
        "url": "https://www.vd.ch/sante-soins-et-handicap/patients-et-residents-droits-et-qualite-de-soins/les-droits-des-patients-des-residents-et-des-personnes-en-situation-de-handicap/acces-au-dossier"
      },
      {
        "label": "Office fédéral de la santé publique — droits des patients, renvoi aux législations cantonales",
        "url": "https://www.bag.admin.ch/fr/patients-vos-droits-et-votre-participation"
      },
      {
        "label": "Préposé fédéral à la protection des données et à la transparence — santé",
        "url": "https://www.edoeb.admin.ch/fr/sante"
      },
      {
        "label": "Préposé fédéral à la protection des données et à la transparence — communication des données de patients",
        "url": "https://www.edoeb.admin.ch/fr/donnees-patient-communication"
      },
      {
        "label": "République et canton de Genève — « L'essentiel sur les droits des patients », édition du 3 septembre 2024",
        "url": "https://www.ge.ch/actualite/essentiel-droit-patients-3-09-2024"
      },
      {
        "label": "Genève — Commission de surveillance des professions de la santé et des droits des patients (CSPSDP)",
        "url": "https://www.ge.ch/surveillance-professions-sante-droit-patients/commission-surveillance-cspsdp"
      }
    ]
  },
  {
    "id": "checklist",
    "slug": "numeriser-ems-checklist",
    "locale": "fr",
    "metaTitle": "Choisir un logiciel pour un EMS : la checklist suisse",
    "metaDescription": "Réversibilité, export des données, fin de contrat, DEP, HL7/FHIR, formation, accessibilité : ce qu'il faut vérifier avant de signer.",
    "h1": "Choisir un logiciel pour un EMS : la checklist à parcourir avant de signer",
    "lead": "Un contrat de logiciel métier lie un établissement pour plusieurs années, sur des données que le droit cantonal impose souvent de conserver plus longtemps que le contrat. La question n'est pas de savoir quel produit a la plus belle interface, mais ce qu'il restera de vos données le jour où vous changerez de fournisseur.",
    "sections": [
      {
        "heading": "Responsable du traitement ou sous-traitant : qui répond de quoi",
        "paragraphs": [
          "La loi fédérale sur la protection des données (LPD, RS 235.1), en vigueur dans sa version actuelle depuis le 1er septembre 2023, distingue le responsable du traitement, qui « détermine les finalités et les moyens du traitement » (art. 5 let. j), du sous-traitant, qui traite les données « pour le compte du responsable » (art. 5 let. k). Entre un établissement et un éditeur, le premier rôle revient en règle générale à l'établissement — selon qui décide réellement, et non selon l'étiquette du contrat. Le PFPDT résume : « Vous demeurez responsable de la protection des données même si vous confiez leur traitement à un sous-traitant. »",
          "L'art. 9 LPD fixe les conditions : la sous-traitance repose sur un contrat ou sur la loi ; seuls peuvent être confiés les traitements que le responsable pourrait effectuer lui-même ; aucune obligation de garder le secret ne doit s'y opposer ; le responsable doit s'assurer que le sous-traitant peut garantir la sécurité des données. Les données sur la santé sont sensibles (art. 5 let. c ch. 2).",
          "Le non-respect de ces conditions est réprimé par l'art. 61 let. b LPD, d'une amende de 250 000 francs au plus — mais sur plainte seulement, pour une infraction intentionnelle, et à la charge de personnes privées."
        ]
      },
      {
        "heading": "La « propriété des données » n'existe pas en droit suisse",
        "paragraphs": [
          "Beaucoup d'appels d'offres demandent qui est « propriétaire » des données. La LPD ne connaît pas cette catégorie : ce qui existe, c'est la qualité de responsable du traitement, les droits de la personne concernée et, pour le dossier du patient, le droit cantonal de la santé.",
          "À Genève, la loi sur la santé du 7 avril 2006 (LS, K 1 03) décrit le contenu du dossier (art. 53), reconnaît au patient le droit de le consulter et de s'en faire remettre les pièces (art. 55), et fixe la conservation à dix ans au moins dès la dernière consultation, la destruction intervenant après vingt ans au plus tard (art. 57). Chaque canton a ses règles.",
          "La conséquence est rarement anticipée : un abonnement logiciel dure presque toujours moins longtemps que la conservation exigée du dossier."
        ]
      },
      {
        "heading": "Réversibilité, export et fin de contrat",
        "paragraphs": [
          "L'art. 28 LPD instaure un droit à la remise ou à la transmission des données dans un format électronique couramment utilisé. C'est un droit de la personne concernée envers le responsable du traitement, pas un droit de l'institution envers son fournisseur : entre eux, il n'y a que le contrat. À y écrire :"
        ],
        "bullets": [
          "le périmètre exact : dossiers, messages, pièces jointes, plans de soins, journaux d'accès et métadonnées, pas seulement les tables principales ;",
          "le format : CSV, JSON ou FHIR documentés, plutôt qu'un export propriétaire illisible ;",
          "le délai et le coût, fixés à la signature et non au moment de la rupture ;",
          "un export d'essai réellement effectué et relu pendant le pilote : une réversibilité non testée n'en est pas une ;",
          "le sort des données à la fin, l'art. 6 al. 4 LPD prévoyant leur destruction ou leur anonymisation dès qu'elles ne sont plus nécessaires aux finalités du traitement.",
          "le scénario du changement de fournisseur : qui exporte, en combien de jours, à quel prix, et gardez-vous un accès en lecture pendant la migration ?",
          "le scénario de la faillite ou du rachat : qu'advient-il de l'hébergement, des sauvegardes et de la maintenance ?",
          "le scénario des deux systèmes en parallèle : qui reste sous-traitant, pour quelles données, et qui répond d'une demande d'accès arrivée entre-temps ?"
        ]
      },
      {
        "heading": "Sous-traitants ultérieurs et hébergement réel",
        "paragraphs": [
          "Le sous-traitant ne peut lui-même sous-traiter à un tiers qu'avec l'autorisation préalable du responsable du traitement (art. 9 al. 3 LPD). Le PFPDT admet une autorisation générale, mais précise que tout ajout ou remplacement d'un autre sous-traitant doit être annoncé au responsable.",
          "D'où l'utilité d'une liste nominative complète : hébergeur, sauvegardes, supervision, assistance technique, envoi de courriels et de SMS, traduction automatique, services d'intelligence artificielle. « Serveurs en Suisse » ne dit rien de l'assistance qui se connecte depuis l'étranger, ni de l'endroit où partent les sauvegardes. Communiquer des données à l'étranger suppose un État reconnu comme offrant une protection adéquate, l'une des garanties de l'art. 16 al. 2 LPD ou une dérogation de l'art. 17."
        ]
      },
      {
        "heading": "Journalisation des accès : ce que l'outil doit savoir faire",
        "paragraphs": [
          "L'ordonnance sur la protection des données (OPDo, RS 235.11) prévoit à son art. 4 al. 1 que, lors de traitements automatisés de données sensibles à grande échelle et lorsque les mesures préventives ne suffisent pas, le responsable privé et son sous-traitant privé journalisent au moins « l'enregistrement, la modification, la lecture, la communication, l'effacement et la destruction des données ». Les procès-verbaux sont conservés au moins un an, séparément du système (al. 5).",
          "Le mot important est lecture : beaucoup de logiciels tracent les modifications et pas les consultations, alors que c'est savoir qui a ouvert un dossier sans rien y changer qui permet de répondre à un soupçon d'accès indu. Le journal enregistre-t-il les lectures, est-il exportable, et qui peut l'effacer ?"
        ]
      },
      {
        "heading": "Interopérabilité : DEP, futur DES et HL7 FHIR",
        "paragraphs": [
          "La loi fédérale sur le dossier électronique du patient (LDEP) est en vigueur depuis le 15 avril 2017 : depuis avril 2022, les établissements qui proposent des traitements stationnaires, dont les EMS, doivent pouvoir utiliser le DEP, alors que l'affiliation reste facultative pour les soins à domicile et les pharmacies.",
          "Le cadre bouge : le 5 novembre 2025, le Conseil fédéral a adopté le message relatif à une loi sur le dossier électronique de santé (LDSan), qui remplacerait le DEP par le DES, pour une entrée en service annoncée comme probable en 2030. D'après l'Observatoire suisse de la santé (Obsan, bulletin 01/26 du 19 février 2026), 95 % des hôpitaux et 76 % des EMS étaient raccordés en octobre 2025, mais environ 5 % seulement des fournisseurs de prestations stationnaires interrogés utilisaient activement le DEP.",
          "Pour les échanges futurs, la Confédération s'appuie sur HL7 FHIR : une évaluation externe publiée le 19 mai 2026 dans le programme DigiSanté y voit une base solide, tout en rappelant que « le choix d'une norme ne suffit pas, à lui seul, à garantir l'interopérabilité ». « Compatible FHIR » ne veut donc rien dire en soi : quelles ressources, quelle version, en lecture ou en écriture, en production dans quel établissement ?"
        ]
      },
      {
        "heading": "La charge de formation, le coût que personne ne chiffre",
        "paragraphs": [
          "Le programme NIP-Q-UPGRADE, conduit par CURAVIVA et senesuisse sur mandat de la Commission fédérale de la qualité, examine la saisie des indicateurs de qualité médicaux dans les EMS. Son constat, tiré d'une enquête nationale auprès de 204 EMS : la qualité des données dépend de la perception qu'en a le personnel, des effectifs disponibles pour la saisie, de l'infrastructure informatique et des interfaces. Le manque de temps et de ressources vient en tête des obstacles.",
          "Autant de postes à chiffrer avant de signer : heures de formation par collaborateur, qui forme les aides-soignants, le personnel temporaire et les veilleurs de nuit, dans quelles langues, coût des formations une fois le système en service, et existence d'un environnement de test."
        ]
      },
      {
        "heading": "Accessibilité pour les résidents âgés et leurs proches",
        "paragraphs": [
          "La norme suisse eCH-0059, version 3.0 approuvée en 2020, pose que « les sites web et les applications mobiles doivent satisfaire aux critères du niveau de conformité AA du WCAG 2.1 ». Elle vise les collectivités publiques, mais rien n'empêche d'en faire un critère d'achat.",
          "Les WCAG 2.2, recommandation du W3C dans sa version du 12 décembre 2024, ajoutent des critères qui visent les difficultés d'un résident de 87 ans : taille minimale des cibles tactiles (2.5.8, AA), élément focalisé non masqué (2.4.11, AA), authentification sans test de mémoire (3.3.8, AA), saisie redondante évitée (3.3.7, A). Le test le plus utile ne coûte rien : faire essayer le produit par deux résidents et un proche âgé."
        ]
      },
      {
        "heading": "Avant de signer",
        "paragraphs": [
          "Une dernière question, valable pour tous les fournisseurs : quelles certifications sont effectivement détenues aujourd'hui — organisme, numéro, échéance — et lesquelles sont seulement « visées » ? Elle vaut aussi pour l'éditeur de cet article. CareBond est une plateforme de communication pour le soin hébergée chez Infomaniak, à Genève, avec journal d'audit immuable et intégration HL7/FHIR ; elle ne détient à ce jour ni certification ISO 27001 ni certification HDS. Une checklist qui ne s'applique pas à celui qui la publie ne vaut pas grand-chose."
        ]
      }
    ],
    "takeaways": [
      "En règle générale, l'établissement est responsable du traitement et l'éditeur sous-traitant : les conditions de l'art. 9 LPD se reportent au contrat.",
      "La LPD ne garantit aucun export face à l'éditeur : périmètre, format, délai et prix s'écrivent avant la signature.",
      "Un export d'essai effectué pendant le pilote vaut mieux qu'une clause de réversibilité jamais testée.",
      "Les durées de conservation du dossier relèvent du droit cantonal (à Genève, dix ans au moins) et survivent au contrat.",
      "La liste nominative des sous-traitants ultérieurs se demande par écrit : « serveurs en Suisse » ne dit rien de l'assistance ni des sauvegardes."
    ],
    "disclaimer": "Cet article fournit des informations générales et ne constitue pas un conseil juridique. Les obligations concrètes dépendent du canton, du type d'établissement et de la situation particulière. Pour un cas précis, adressez-vous à votre conseiller juridique, à votre autorité cantonale de la santé ou au Préposé fédéral à la protection des données et à la transparence.",
    "sources": [
      {
        "label": "Loi fédérale sur la protection des données (LPD, RS 235.1) — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/fr"
      },
      {
        "label": "Ordonnance sur la protection des données (OPDo, RS 235.11) — Fedlex",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/568/fr"
      },
      {
        "label": "PFPDT — Externalisation (sous-traitance)",
        "url": "https://www.edoeb.admin.ch/fr/externalisation-sous-traitance"
      },
      {
        "label": "Loi genevoise sur la santé du 7 avril 2006 (LS, K 1 03) — art. 53, 55 et 57",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "OFSP — LDEP, la loi qui régit le DEP (ODEP-DFI révisée, révision LDSan)",
        "url": "https://www.bag.admin.ch/fr/ldep-la-loi-qui-regit-le-dep"
      },
      {
        "label": "eHealth Suisse — État des lieux du DEP (obligation pour les établissements stationnaires depuis avril 2022)",
        "url": "https://www.e-health-suisse.ch/fr/coordination/le-dossier-electronique-du-patient/etat-des-lieux"
      },
      {
        "label": "Conseil fédéral — Le dossier électronique de santé (DES) remplace le DEP, 5 novembre 2025",
        "url": "https://www.admin.ch/fr/newnsb/kr4DmHtSWC_pdU5RVB6KX"
      },
      {
        "label": "Obsan — Le dossier électronique du patient. Adoption et taux de couverture (Bulletin 01/26, 19 février 2026)",
        "url": "https://www.obsan.admin.ch/fr/publications/2026-le-dossier-electronique-du-patient"
      },
      {
        "label": "OFSP — Monitorage de la LDEP",
        "url": "https://www.bag.admin.ch/fr/monitorage-de-la-ldep"
      },
      {
        "label": "ICTjournal — Données Obsan/OFSP sur les coûts et l'usage du DEP (16 juillet 2026)",
        "url": "https://www.ictjournal.ch/etudes/2026-07-16/le-dossier-electronique-du-patient-coute-cher-aux-hopitaux-et-aux-ems-pour-une"
      },
      {
        "label": "DigiSanté — La norme HL7 FHIR comme fondement du SwissHDS (évaluation publiée le 19 mai 2026)",
        "url": "https://www.digisante.admin.ch/fr/norme-fhir-swisshds"
      },
      {
        "label": "ARTISET — NIP-Q-UPGRADE : développer la qualité des soins fondée sur les données",
        "url": "https://artiset.ch/fr/a-notre-propos/engagement/projets/developper-la-qualite-des-soins-fondee-sur-les-donnees"
      },
      {
        "label": "eCH-0059 Accessibility Standard V3.0",
        "url": "https://www.ech.ch/fr/ech/ech-0059/3.0"
      },
      {
        "label": "ADIS — eCH-0059 : niveau de conformité AA des WCAG 2.1",
        "url": "https://www.adis.ch/fr/principes-de-base/e-accessibilite/standards/ech-0059-accessibility-standard-65.html"
      },
      {
        "label": "W3C — Web Content Accessibility Guidelines (WCAG) 2.2, version du 12 décembre 2024",
        "url": "https://www.w3.org/TR/WCAG22/"
      }
    ]
  },
  {
    "id": "interop",
    "slug": "hl7-fhir-explique",
    "locale": "fr",
    "metaTitle": "HL7 et FHIR expliqués aux établissements de soins",
    "metaDescription": "HL7 v2, FHIR R4, DEP et futur DES : ce que ces normes changent pour un EMS ou un service de soins à domicile, et quoi exiger d'un fournisseur.",
    "h1": "HL7 et FHIR expliqués aux directions d'établissements de soins",
    "lead": "« Nous sommes compatibles HL7/FHIR. » La phrase figure dans presque toutes les offres de logiciels de soins, et elle ne dit presque rien sur ce que deux systèmes pourront réellement s'échanger. Voici ce que recouvrent ces deux normes, ce qu'elles apportent à un EMS ou à un service d'aide et de soins à domicile, et comment elles s'articulent avec le dossier électronique du patient.",
    "sections": [
      {
        "heading": "HL7 et FHIR : de quoi parle-t-on exactement ?",
        "paragraphs": [
          "HL7 International est une organisation de normalisation ; HL7 v2 et FHIR sont deux de ses normes, pas deux produits. La messagerie HL7 v2 est le langage historique des échanges entre systèmes hospitaliers. FHIR, plus récent, est présenté par eHealth Suisse comme une « norme internationale d'interopérabilité pour l'échange de données médicales » qui « utilise des technologies web modernes comme les REST API et les formats de données JSON, XML et Turtle (RDF) ».",
          "Les versions comptent autant que le nom. FHIR R4 porte le numéro 4.0.1, publiée le 30 octobre 2019, avec un statut mixte : une partie normative, une partie en essai (Standard for Trial Use). La version courante, FHIR R5 (5.0.0), date de mars 2023. La spécification paraît sous licence ouverte CC0 : votre responsable informatique peut la lire gratuitement et vérifier ce qu'annonce un fournisseur.",
          "FHIR ne remplace pas pour autant la génération précédente : « FHIR complète les anciennes normes HL7 V2 et V3, mais ne les remplace pas complètement, puisque de nombreux systèmes continuent à les utiliser activement », écrit eHealth Suisse."
        ]
      },
      {
        "heading": "HL7 v2 et FHIR : la différence qui change quelque chose pour vous",
        "paragraphs": [
          "HL7 v2 fonctionne par messages déclenchés par un événement. Une admission, un transfert ou une sortie produisent un message ADT ; un résultat de laboratoire produit un message ORU. Le chapitre 1 de la version 2.7 en énonce l'objectif : des standards d'échange qui éliminent ou réduisent substantiellement la programmation d'interfaces sur mesure.",
          "Le même chapitre pose la limite, à retenir avant toute négociation. Seuls sont obligatoires les champs nécessaires à la logique des messages ; beaucoup d'autres sont spécifiés, mais laissés optionnels. Le texte en tire lui-même la conséquence : HL7 v2.7 ne peut pas être une véritable norme d'interface « plug and play », et les différences d'un site à l'autre exigeront très probablement des accords négociés site par site.",
          "FHIR raisonne autrement : il découpe l'information en ressources (Patient, Observation, DocumentReference) qu'un système va chercher par une requête web. C'est plus simple à tester et à documenter. Mais l'optionnalité ne disparaît pas : elle se déplace dans des « profils », qui précisent pour un pays ou un cas d'usage quels champs sont exigés. D'où une règle pratique : faire préciser la version exacte, car deux logiciels qui « font du FHIR » dans des versions différentes ne se parlent pas sans adaptation."
        ]
      },
      {
        "heading": "Ce que l'interopérabilité apporte vraiment à un établissement",
        "paragraphs": [
          "eHealth Suisse définit l'interopérabilité comme « la capacité de deux systèmes informatiques à échanger des données, à les interpréter correctement et à les réutiliser sans intervention humaine ».",
          "La même source distingue cinq niveaux : politique et droit, organisation, technique, syntaxe, sémantique. Cette liste explique pourquoi tant de projets d'interface déçoivent. Le niveau technique — faire circuler les données — est le plus simple, et le seul que montre une démonstration commerciale. Le sémantique et l'organisationnel décident du résultat : si « allergie » ou « chute » ne sont pas codés de la même manière des deux côtés, l'échange fonctionne et l'information clinique se perd quand même.",
          "Le gain concret tient en peu de mots : données d'admission saisies une seule fois, résultats de laboratoire arrivant dans le dossier au lieu d'un fax, rapport de transfert lisible à la sortie de l'hôpital. Rien de spectaculaire — du temps soignant rendu aux soins."
        ]
      },
      {
        "heading": "Le lien avec le DEP suisse, et ce que FHIR n'y fait pas",
        "paragraphs": [
          "La loi fédérale sur le dossier électronique du patient (LDEP) est en vigueur depuis le 15 avril 2017. Selon l'OFSP, l'affiliation au DEP est une obligation légale pour les établissements stationnaires qui facturent à la charge de l'assurance obligatoire des soins : hôpitaux, cliniques de réadaptation et psychiatriques, EMS et maisons de naissance ; depuis le 1er janvier 2022, elle vaut aussi pour les médecins nouvellement admis. Elle reste facultative pour les autres professionnels de l'ambulatoire — dont les services d'aide et de soins à domicile — et pour la population.",
          "Techniquement, le DEP ne repose pas d'abord sur FHIR. Ses spécifications, annexées à l'ordonnance du DFI sur le dossier électronique du patient (ODEP-DFI), imposent des profils IHE : CH:XDS pour le partage de documents, CH:XUA pour l'authentification, CH:PIXV3 et CH:PDQV3 pour l'identification des patients, CH:ATNA pour la journalisation. L'accès dit mobile, lui, s'appuie sur FHIR R4, via le guide d'implémentation CH EPR FHIR d'eHealth Suisse (MHD, PDQm, PIXm, IUA).",
          "Pour la suite, la direction est annoncée : « pour l'élaboration de nouveaux formats d'échange, eHealth Suisse mise sur la norme HL7 FHIR ». La conséquence : un logiciel qui « fait du FHIR » n'est pas pour autant raccordé au DEP. Le raccordement suppose d'implémenter soi-même les interfaces du DEP ou de passer par un connecteur — eHealth Suisse met à disposition son connecteur open source HUSKY — et, dans tous les cas, une affiliation à une communauté ou à une communauté de référence certifiée."
        ]
      },
      {
        "heading": "Du DEP au DES : ce que prévoit la LDSan",
        "paragraphs": [
          "Le Conseil fédéral a transmis au Parlement, le 5 novembre 2025, le message relatif à une nouvelle loi fédérale sur le dossier électronique de santé (LDSan), appelée à remplacer la LDEP. Le Conseil national l'a adoptée le 14 septembre 2026 par 134 voix contre 53 et 10 abstentions ; le dossier passe au Conseil des États.",
          "Ce que prévoit le projet, selon l'OFSP : un DES ouvert automatiquement et gratuitement pour toute personne résidant en Suisse, qui peut s'y opposer ; une obligation de raccordement étendue à tous les fournisseurs de prestations facturant à la charge de l'assurance obligatoire des soins ; la Confédération exploitant le système technique, les cantons en assumant les coûts d'exploitation. Le nouveau système pourrait être mis en service « au plus tôt en 2030 ». En parallèle court le programme national DigiSanté (2025-2034).",
          "Le terrain bouge plus vite que la loi. Le 25 juin 2026, eHealth Suisse annonçait que Post Sanela cesse ses activités de fournisseur de plateforme et de communauté de référence DEP d'ici la fin 2026 ; un changement de fournisseur évite une interruption de la disponibilité des données. Le 21 août 2026, la faîtière ARTISET relevait que la CSSS-N laissait en suspens la question de l'obligation de se raccorder, et recommandait en septembre de la lever pour les EMS jusqu'à l'introduction du DES."
        ]
      },
      {
        "heading": "Les questions à poser à un fournisseur qui annonce « HL7/FHIR »",
        "paragraphs": [
          "Ces questions ne demandent aucune compétence technique, seulement des réponses écrites. Une réponse vague est déjà une réponse.",
          "Une dimension traverse toutes les autres : la protection des données. Depuis le 1er septembre 2023, la loi fédérale révisée sur la protection des données s'applique. Les données de santé y sont des données sensibles au sens de l'art. 5 let. c ch. 2 LPD, et le PFPDT rappelle qu'un thérapeute ne peut en principe pas les communiquer à des tiers sans l'accord de la personne concernée, le secret professionnel de l'art. 321 CP s'ajoutant à la protection des données."
        ],
        "bullets": [
          "Quelle norme et quelle version, précisément : HL7 v2 dans quelle version, FHIR R4 (4.0.1) ou R5 (5.0.0) ?",
          "Quels messages ou quelles ressources sont réellement implémentés : ADT, ORU, MDM d'un côté ; Patient, Observation, DocumentReference de l'autre ?",
          "Dans quel sens circulent les données : lecture, écriture, ou les deux ? Beaucoup d'intégrations ne font que recevoir.",
          "Existe-t-il un profil de conformité écrit, champ par champ ? HL7 v2 laissant la plupart des champs optionnels, cet accord site par site est le vrai contrat d'interface.",
          "A-t-il testé au Digital Health Projectathon d'eHealth Suisse, de l'OFSP et d'IHE Suisse ? Test volontaire, pas certification, mais la participation se vérifie.",
          "Pour le DEP : implémente-t-il lui-même les profils IHE exigés ou passe-t-il par un connecteur, et avec quelle communauté ?",
          "Qui paie l'interface, et qui la maintient quand le logiciel hospitalier change de version ? C'est là que se logent les coûts oubliés."
        ]
      },
      {
        "heading": "Transparence sur l'auteur de cet article",
        "paragraphs": [
          "Cet article est publié par CareBond, plateforme de communication et de coordination hébergée en Suisse, chez Infomaniak à Genève, conçue dès l'architecture pour le RGPD et la nLPD, avec un journal d'audit immuable et une intégration HL7/FHIR (serveur FHIR R4, réception de messages HL7 v2 par HTTPS). Ce n'est ni une communauté de référence ni un fournisseur de plateforme DEP, et l'éditeur ne détient aucune certification : les questions ci-dessus valent pour lui comme pour les autres."
        ]
      }
    ],
    "takeaways": [
      "« Compatible HL7 » ne veut rien dire tant que la version, les messages ou ressources et le sens des échanges ne sont pas écrits noir sur blanc.",
      "HL7 v2 laisse la plupart des champs optionnels : l'accord site par site entre les deux systèmes est le vrai contrat d'interface.",
      "Un logiciel qui « fait du FHIR » n'est pas raccordé au DEP pour autant : le DEP impose des profils IHE et passe par une communauté certifiée.",
      "L'affiliation au DEP est obligatoire pour les hôpitaux, cliniques, EMS et maisons de naissance facturant à l'AOS, et pour les médecins admis depuis 2022 ; elle reste facultative pour les soins à domicile.",
      "Le cadre change : la LDSan a passé le Conseil national le 14 septembre 2026, et l'OFSP situe la mise en service du DES au plus tôt en 2030."
    ],
    "disclaimer": "Cet article est une information générale destinée aux directions d'établissements de soins ; il ne constitue pas un conseil juridique. Les obligations concrètes dépendent du canton, du type d'établissement et de la situation, et le cadre légal évolue : au moment de la publication, la LDSan a été adoptée par le Conseil national le 14 septembre 2026 et le dossier est pendant devant le Conseil des États. Pour toute décision, référez-vous aux textes officiels cités et adressez-vous à votre service cantonal de la santé, à votre communauté de référence ou à un conseil juridique.",
    "sources": [
      {
        "label": "OFSP — LDEP : la loi qui régit le DEP (en vigueur depuis le 15 avril 2017)",
        "url": "https://www.bag.admin.ch/fr/ldep-la-loi-qui-regit-le-dep"
      },
      {
        "label": "OFSP — Dossier électronique du patient : obligation d'affiliation des établissements stationnaires et des médecins nouvellement admis depuis le 1er janvier 2022",
        "url": "https://www.bag.admin.ch/fr/dossier-electronique-du-patient"
      },
      {
        "label": "OFSP — LDSan : DES ouvert automatiquement avec droit d'opposition, obligation étendue aux fournisseurs facturant à l'AOS, mise en service au plus tôt en 2030",
        "url": "https://www.bag.admin.ch/fr/ldsan"
      },
      {
        "label": "OFSP — DES : jalons du projet et actualités (message du 5 novembre 2025 ; Conseil national, 14 septembre 2026, 134 voix contre 53 et 10 abstentions)",
        "url": "https://www.bag.admin.ch/fr/des-jalons-du-projet-et-actualites"
      },
      {
        "label": "OFSP — DigiSanté, programme national 2025-2034",
        "url": "https://www.bag.admin.ch/fr/digisante-promouvoir-la-transformation-numerique-du-systeme-de-sante"
      },
      {
        "label": "dossierpatient.ch — Le DEP en bref : communautés et communautés de référence, participation obligatoire et facultative",
        "url": "https://www.dossierpatient.ch/professionnels/dep-en-bref"
      },
      {
        "label": "eHealth Suisse — Normes et interopérabilité : définition et cinq niveaux",
        "url": "https://www.e-health-suisse.ch/fr/standardisation/interoperabilite/normes-et-interoperabilite"
      },
      {
        "label": "eHealth Suisse — Normes techniques et syntaxiques : définition de FHIR, REST API, JSON/XML/Turtle, complémentarité avec HL7 V2 et V3",
        "url": "https://www.e-health-suisse.ch/fr/standardisation/interoperabilite/normes-techniques-et-syntaxiques"
      },
      {
        "label": "eHealth Suisse — Formats d'échange nationaux : « eHealth Suisse mise sur la norme HL7 FHIR »",
        "url": "https://www.e-health-suisse.ch/fr/standardisation/contenu-des-donnees/formats-dechange-nationaux"
      },
      {
        "label": "eHealth Suisse — Spécifications du DEP : profils IHE (CH:XDS, CH:XUA, CH:PIXV3, CH:PDQV3, CH:ATNA) annexés à l'ODEP-DFI",
        "url": "https://www.e-health-suisse.ch/fr/le-dep/aspects-techniques-du-dep/specifications-du-dep"
      },
      {
        "label": "eHealth Suisse — Intégration du DEP dans un système primaire : connecteurs et connecteur open source HUSKY",
        "url": "https://www.e-health-suisse.ch/fr/le-dep/raccordement-dep/integration-dep"
      },
      {
        "label": "eHealth Suisse — Post Sanela se retire du DEP d'ici la fin 2026 (annonce du 25 juin 2026)",
        "url": "https://www.e-health-suisse.ch/fr/nouveautes/post-sanela-se-retire-du-dep-dici-la-fin-2026"
      },
      {
        "label": "eHealth Suisse — Digital Health Projectathon 2026 : événement de test organisé avec l'OFSP et IHE Suisse, sans certification",
        "url": "https://www.e-health-suisse.ch/en/projectathon_event/digital-health-projectathon/projectathon-2026"
      },
      {
        "label": "HL7 International — FHIR R4, version 4.0.1, publiée le 30 octobre 2019, statut mixte normatif/STU",
        "url": "https://hl7.org/fhir/R4/"
      },
      {
        "label": "HL7 International — Spécification FHIR courante : R5, version 5.0.0 (mars 2023), licence CC0",
        "url": "https://www.hl7.org/fhir/"
      },
      {
        "label": "HL7 Version 2.7, chapitre 1 : objectif de la norme, champs optionnels, absence de « plug and play » et accords négociés site par site",
        "url": "https://www.hl7.eu/HL7v2x/v27/std27/ch01.html"
      },
      {
        "label": "eHealth Suisse — CH EPR FHIR Implementation Guide (FHIR R4 ; MHD, PDQm, PIXm, IUA)",
        "url": "https://fhir.ch/ig/ch-epr-mhealth/index.html"
      },
      {
        "label": "PFPDT — Rôle du PFPDT : entrée en vigueur de la nLPD le 1er septembre 2023",
        "url": "https://www.edoeb.admin.ch/fr/role-du-pfpdt"
      },
      {
        "label": "PFPDT — Données patient et communication : données de santé comme données sensibles (art. 5 let. c ch. 2 LPD) et secret professionnel (art. 321 CP)",
        "url": "https://www.edoeb.admin.ch/fr/donnees-patient-communication"
      },
      {
        "label": "ARTISET — Prises de position : « DEP : la CSSS-N laisse en suspens la question centrale de l'obligation de se raccorder » (21 août 2026)",
        "url": "https://artiset.ch/fr/a-notre-propos/engagement/politiques-publiques-prises-de-position"
      },
      {
        "label": "ARTISET — Session d'automne 2026 : recommandation de lever l'obligation de rattachement pour les EMS jusqu'à l'introduction du DES (9 septembre 2026)",
        "url": "https://artiset.ch/fr/actualites/session-d-automne-2026-recommandations-de-la-federation-artiset"
      }
    ]
  },
  {
    "id": "multilingual",
    "slug": "communication-multilingue-soins",
    "locale": "fr",
    "metaTitle": "Barrière de la langue dans les soins : le cadre suisse",
    "metaDescription": "Quatre langues nationales, des résidents allophones : les chiffres fédéraux, le consentement éclairé et le financement de l'interprétariat en Suisse.",
    "h1": "Barrière de la langue dans les soins en Suisse : chiffres, cadre légal et interprétariat",
    "lead": "Dans un EMS romand, il arrive souvent que le résident, sa famille et le soignant n'aient pas la même première langue. Cela touche au consentement éclairé, à la qualité du diagnostic et à la sécurité des soins. Voici ce qu'en disent les sources officielles suisses.",
    "sections": [
      {
        "heading": "Combien de langues parle-t-on vraiment dans les soins en Suisse ?",
        "paragraphs": [
          "La Suisse compte quatre langues nationales. Selon l'Office fédéral de la statistique (« Le paysage linguistique en Suisse », 2022, données 2020), l'allemand et/ou le suisse allemand est la langue principale de 62% de la population résidante permanente, le français de 23%, l'italien de 8,0% et le romanche de 0,5%. Les langues non nationales le sont pour 23% des personnes interrogées.",
          "Le chiffre le plus parlant pour une institution est ailleurs. En 2020, 11% de la population résidante permanente de 15 ans ou plus n'avait aucune langue nationale dans son répertoire de langues principales, contre 8,4% en 2010. Dans ce groupe, l'anglais arrive en tête (20%), devant le portugais (18%), l'albanais (12%) et l'espagnol (11%).",
          "Au niveau d'un établissement, cela devient concret. Selon le document « Communiquer avec les patients allophones », publié en 2019 par le Service de médecine de premier recours des HUG, les patients de l'hôpital parlent plus de 70 langues et un patient sur huit (12%) ne parle pas du tout le français."
        ]
      },
      {
        "heading": "Le personnel soignant est lui aussi plurilingue",
        "paragraphs": [
          "Selon le communiqué « Personnel soignant en 2018 » de l'OFS, du 26 juin 2020, 63,7% du personnel soignant hospitalier était de nationalité suisse, 12,9% allemande et 11,9% française ; les EMS comptaient fin 2018 quelque 81 000 soignants pour 60 000 équivalents plein temps.",
          "Le rapport de l'Office fédéral de la santé publique « Des ponts linguistiques pour mieux guérir » décrit la pratique qui en découle — confier la traduction au personnel polyglotte présent — et en relève les limites : conflits de rôles, tensions dans l'équipe, et une étude selon laquelle les erreurs d'interprétation augmentent lorsqu'un personnel non formé assume au pied levé la fonction d'interprète. Ce rapport date toutefois de 2011."
        ]
      },
      {
        "heading": "Démence et langue : ce que l'on sait et ce que l'on ne sait pas",
        "paragraphs": [
          "L'OFSP indique que quelque 166 300 personnes sont atteintes de démence en Suisse et que près de 35 800 nouveaux cas s'y ajoutent chaque année. Le guide pratique de l'ASSM et de la FMH rappelle que l'absence de capacité de discernement est la règle en cas de démence grave et qu'il appartient alors au représentant de décider.",
          "L'idée qu'une personne âgée « revient » à sa première langue circule beaucoup dans les équipes, mais l'état des connaissances invite à la prudence : un éditorial de 2022 de la Zeitschrift für Gerontologie und Geriatrie, consacré à la démence et à la migration, souligne que beaucoup reste incertain chez les personnes multilingues et cite une étude de cas observant au contraire un recul plus marqué dans la première langue."
        ]
      },
      {
        "heading": "Ce que la barrière de la langue change dans les soins",
        "paragraphs": [
          "Le document des HUG, qui s'appuie sur la littérature internationale, indique que, comparés aux personnes maîtrisant la langue du pays où elles vivent, les patients allophones sont plus souvent hospitalisés, ont des séjours plus longs, reçoivent moins d'antalgiques en cas de douleur et courent un plus grand risque d'être victimes d'erreurs médicales. Le rapport de l'OFSP va dans le même sens : les obstacles à la communication accroissent le risque de diagnostic erroné et compromettent la continuité du suivi.",
          "Aux HUG, une étude de 2014 a montré que pour 62% des soignants, la barrière de la langue est une cause fréquente de difficultés."
        ]
      },
      {
        "heading": "Consentement éclairé et barrière de la langue : ce que dit le cadre suisse",
        "paragraphs": [
          "La santé est largement cantonale et les lois sanitaires diffèrent. À Genève, la loi sur la santé (K 1 03) prévoit à son art. 45 que le patient a le droit d'être informé de manière claire et appropriée sur son état de santé et les traitements possibles, et à son art. 46 qu'aucun soin ne peut être fourni sans le consentement libre et éclairé du patient capable de discernement. Les autres cantons romands connaissent des dispositions analogues.",
          "Le guide pratique de l'ASSM et de la FMH est plus explicite sur la langue : l'information doit être donnée en termes clairs et compréhensibles, le médecin doit adapter ses explications, « si nécessaire, il y a lieu de recourir à un interprète », et il est primordial de vérifier que le patient a bien compris.",
          "Lorsque la personne n'a plus sa capacité de discernement, l'art. 377 du Code civil prévoit que le médecin traitant établit le traitement avec la personne habilitée à la représenter et que « dans la mesure du possible, la personne incapable de discernement est associée au processus de décision ». En EMS, ce « dans la mesure du possible » dépend directement de la langue."
        ]
      },
      {
        "heading": "Qui paie l'interprétariat en Suisse ?",
        "paragraphs": [
          "Les termes « interprète », « traduction » et « traducteur » n'apparaissent pas dans la loi fédérale sur l'assurance-maladie (LAMal, RS 832.10) — vérification faite sur le texte consolidé de Fedlex, état au 1er janvier 2026. Le rapport de l'OFSP rapporte par ailleurs un arrêt non publié du Tribunal fédéral du 31 décembre 2002 jugeant, dans un cas concret, que l'assurance obligatoire des soins n'avait pas à financer l'interprétation, celle-ci relevant de l'assistance et non de l'acte médical.",
          "Le système n'est pourtant pas uniforme. Dans un article de la Société vaudoise de médecine, l'avocate Fanette Sardet expose que les interprètes ne sont pas reconnus comme fournisseurs de prestations au sens de la LAMal, que dans le stationnaire ces coûts sont intégrés aux forfaits par cas, mais que « dans le domaine ambulatoire, cette problématique n'a toujours pas été réglée par les partenaires tarifaires » ; le Conseil fédéral a rejeté plusieurs motions, la dernière le 7 mars 2025.",
          "Des initiatives cantonales existent sans couvrir tous les cas : Vaud prend ces frais en charge pour les patients de l'EVAM. Les HUG, eux, financent l'interprétariat sur leurs budgets départementaux, gratuitement pour le patient ; une mission en présentiel est facturée environ 80 à 120 francs au service concerné."
        ]
      },
      {
        "heading": "Les solutions utilisées aujourd'hui dans les institutions",
        "paragraphs": [
          "Les sources convergent : pour un entretien d'importance médicale, l'interprète professionnel est la solution recommandée. Les HUG relèvent que de nombreuses études associent son recours à un meilleur diagnostic et à un risque d'erreur médicale moindre."
        ],
        "bullets": [
          "L'interprète communautaire professionnel, sur place, par téléphone ou par visioconférence, via un service régional. INTERPRET, l'association nationale, gère une qualification à deux niveaux : certificat INTERPRET et brevet fédéral. Selon les HUG, ces professionnels sont tenus à l'impartialité, à la confidentialité et à l'exactitude.",
          "Les documents traduits : le portail migesplus.ch, développé par la Croix-Rouge suisse avec le soutien financier de l'OFSP, met à disposition des informations sur la santé en plusieurs langues.",
          "Les réseaux entre institutions : le Swiss Health Network for Equity, issu du programme Migrant Friendly Hospitals et constitué en association en juin 2023, réunit des établissements de toutes les régions linguistiques.",
          "Ce que les HUG déconseillent pour les entretiens qui engagent : proches, enfants, personnel non soignant — ils connaissent rarement le vocabulaire médical et le patient risque de s'autolimiter sur les sujets délicats.",
          "La traduction automatique grand public : selon le même document, plusieurs études ont montré que la qualité n'est pas suffisante pour un domaine à risque comme la médecine."
        ]
      },
      {
        "heading": "Traduire des informations de santé, c'est traiter des données sensibles",
        "paragraphs": [
          "Faire passer l'état de santé d'un résident par un service de traduction grand public, c'est traiter des données sensibles. La loi fédérale sur la protection des données (LPD, RS 235.1), en vigueur depuis le 1er septembre 2023, range expressément les données sur la santé parmi les données sensibles (art. 5, let. c, ch. 2). C'est la loi suisse, pas le RGPD européen, même si les deux textes se recoupent.",
          "Si le service traite les données hors de Suisse, l'art. 16 LPD ajoute une condition : la communication n'est possible que si le Conseil fédéral a constaté que l'État concerné assure un niveau de protection adéquat ou, à défaut, si un niveau approprié est garanti autrement (traité international, clauses contractuelles communiquées au PFPDT, clauses types)."
        ]
      },
      {
        "heading": "Ce qui relève de l'organisation interne d'un EMS ou d'un service de soins à domicile",
        "paragraphs": [
          "Les points ci-dessous ne sont pas des obligations légales : ce sont les questions d'organisation que les documents cités laissent ouvertes."
        ],
        "bullets": [
          "Recueillir la première langue du résident et celle de son représentant, plutôt qu'une mention « parle français : oui/non ».",
          "Définir à l'avance les situations où un interprète professionnel est sollicité : entrée, annonce de diagnostic, consentement, fin de vie.",
          "Disposer d'un accord avec un service régional et d'un accès téléphonique utilisable la nuit et le week-end.",
          "Consigner dans le dossier la langue de l'entretien et l'aide linguistique utilisée.",
          "Distinguer la communication du quotidien des entretiens cliniques qui engagent."
        ]
      },
      {
        "heading": "Et les outils numériques dans tout cela ?",
        "paragraphs": [
          "Les outils numériques ont leur place sur le premier volet : informer une famille, transmettre une nouvelle du quotidien. Ils ne remplacent pas un interprète pour un entretien de consentement. Sur ce terrain, CareBond propose un chat multilingue dont la traduction tourne sur sa propre infrastructure hébergée en Suisse, avec un journal d'audit immuable : cela répond à la question de l'art. 16 LPD, pas à celle du consentement."
        ]
      }
    ],
    "takeaways": [
      "En 2020, 11% de la population résidante permanente de 15 ans ou plus n'avait aucune langue nationale parmi ses langues principales, contre 8,4% en 2010 (OFS).",
      "Le guide pratique ASSM/FMH est explicite : l'information doit être compréhensible, passer si nécessaire par un interprète, et la compréhension doit être vérifiée.",
      "« Interprète » et « traduction » ne figurent pas dans la LAMal ; dans le stationnaire les coûts sont intégrés aux forfaits par cas, dans l'ambulatoire la question n'est pas réglée.",
      "Les HUG déconseillent proches, enfants et personnel non soignant pour les entretiens qui engagent, et jugent la traduction automatique grand public insuffisante en médecine.",
      "Faire traduire des informations de santé, c'est traiter des données sensibles au sens de l'art. 5 LPD, avec des conditions propres à toute communication à l'étranger (art. 16 LPD)."
    ],
    "disclaimer": "Cet article est une information générale et ne constitue pas un conseil juridique. Les obligations concrètes dépendent du canton, du type d'établissement et de la situation de chaque personne ; en cas de doute, le service juridique de l'institution, l'autorité sanitaire cantonale ou un mandataire qualifié sont les interlocuteurs appropriés.",
    "sources": [
      {
        "label": "OFS — Le paysage linguistique en Suisse (Neuchâtel, 2022, données 2020)",
        "url": "https://dam-api.bfs.admin.ch/hub/api/dam/assets/23164429/master"
      },
      {
        "label": "OFS — Entre 2012 et 2018, le personnel soignant a crû de 17 %. Personnel soignant en 2018 (communiqué du 26 juin 2020)",
        "url": "https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/aide-soins-domicile.assetdetail.13307233.html"
      },
      {
        "label": "OFSP — Des ponts linguistiques pour mieux guérir. L'interprétariat communautaire et la santé publique en Suisse (2011)",
        "url": "https://www.bag.admin.ch/dam/fr/sd-web/t1Mp18derGrE/sprachliche-bruecken-zur-genesung.pdf"
      },
      {
        "label": "OFSP — Démence : faits et chiffres",
        "url": "https://www.bag.admin.ch/fr/demence-faits-et-chiffres"
      },
      {
        "label": "ASSM / FMH — Guide pratique, ch. 5.8 « Prise en charge de personnes atteintes de démence »",
        "url": "https://leitfaden.fmh.ch/fr/guide-pratique-bases-juridique/5-situations-medicales/58-personnes-atteintes-demence.pdf"
      },
      {
        "label": "ASSM / FMH — Guide pratique, ch. 3.2 « Information du patient »",
        "url": "https://leitfaden.fmh.ch/fr/guide-pratique-bases-juridique/3-fondement-juridique-medecin/32-information-du-patient.pdf"
      },
      {
        "label": "HUG — Communiquer avec les patients allophones, Service de médecine de premier recours (P. Hudelson, 2019)",
        "url": "https://www.hug.ch/sites/interhug/files/structures/medecine_de_premier_recours/Strategies/aides_linguistiques_2019.pdf"
      },
      {
        "label": "République et canton de Genève — Loi sur la santé (K 1 03), art. 45 et 46",
        "url": "https://silgeneve.ch/legis/data/rsg_k1_03.htm"
      },
      {
        "label": "Code civil suisse, art. 377 (Plan de traitement) — texte officiel bilingue",
        "url": "https://www.droit-bilingue.ch/rs/lex/1907/00/19070042-a377-fr-de.html"
      },
      {
        "label": "Fedlex — Loi fédérale sur l'assurance-maladie (LAMal, RS 832.10), texte consolidé, état au 1er janvier 2026",
        "url": "https://www.fedlex.admin.ch/eli/cc/1995/1328_1328_1328/fr"
      },
      {
        "label": "Fedlex — Loi fédérale sur la protection des données (LPD, RS 235.1) du 25 septembre 2020, état au 1er septembre 2023",
        "url": "https://www.fedlex.admin.ch/eli/cc/2022/491/fr"
      },
      {
        "label": "PFPDT — Communication de données à l'étranger",
        "url": "https://www.edoeb.admin.ch/fr/communication-de-donnees-a-letranger"
      },
      {
        "label": "Société vaudoise de médecine — Le défi des barrières linguistiques (F. Sardet, avocate en droit de la santé)",
        "url": "https://www.svmed.ch/doc-mag/dossiers/vulnerabilites-soigner-sans-discriminer/le-defi-des-barrieres-linguistiques/"
      },
      {
        "label": "INTERPRET — Système de qualification (certificat INTERPRET, brevet fédéral)",
        "url": "https://www.inter-pret.ch/fr/formation-et-qualification_0/systeme-de-qualification-interpret-303.html"
      },
      {
        "label": "migesplus.ch — Croix-Rouge suisse, avec le soutien financier de l'OFSP",
        "url": "https://www.migesplus.ch/fr"
      },
      {
        "label": "Swiss Health Network for Equity — mission et historique",
        "url": "https://www.health-equity-network.ch/fr/ueber-uns/mission"
      },
      {
        "label": "Thyrian JR — Demenz und Migration, Z Gerontol Geriatr 2022;55(4):267-268",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9213363/"
      }
    ]
  },
];
