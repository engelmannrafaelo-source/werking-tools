// Product data for all WerkING Tools products
// Each product has its own subpage at /{slug}/

export type ProductStatus = 'live' | 'prelaunch' | 'beta' | 'development'

export type PricingPlan = {
  name: string
  price: number
  period: string
  features: string[]
  highlighted?: boolean
}

export type ProductStep = {
  title: string
  desc: string
  screenshot: string
}

export type ProductFeature = {
  title: string
  desc: string
}

export type ProductStat = {
  value: string
  label: string
}

export type ProductPillar = {
  title: string
  desc: string
  capabilities: string[]
}

export type Product = {
  slug: string
  name: string
  nameHtml: string // with ING highlight
  tagline: string
  status: ProductStatus
  statusLabel: string
  href: string
  appUrl: string
  screenshot: string // main screenshot for product grid
  problem: string
  features: ProductFeature[]
  pillars?: ProductPillar[]
  steps: ProductStep[]
  stats: ProductStat[]
  pricing: {
    model: 'subscription' | 'per-report' | 'custom'
    plans: PricingPlan[]
  } | null
}

export const PRODUCTS: Record<string, Product> = {
  report: {
    slug: 'report',
    name: 'WerkING Report',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Report</span>',
    tagline: 'Technische Gutachten. Reproduzierbar. In Ihrem Stil.',
    status: 'live',
    statusLabel: 'Early Access',
    href: '/report/',
    appUrl: 'https://werking-report.vercel.app',
    screenshot: '/images/products/report-dashboard.png',
    problem: 'Druckbelüftungsprüfung: 6 Stiegenhäuser, 18 Messpunkte, Differenzdrücke, Strömungsgeschwindigkeiten. Der Bericht ist jedes Mal gleich aufgebaut — aber Sie schreiben ihn jedes Mal neu.',
    features: [], // Report uses pillars instead
    pillars: [
      {
        title: 'Ihr Dokumenttyp',
        desc: 'Sie definieren einmal die Struktur — z.B. "Druckbelüftungsprüfung" mit Checkliste, Beispiel-Formulierungen und Design-Vorlage. Ab dann folgt jeder Bericht dieses Typs demselben Prozess.',
        capabilities: [
          'Beliebige Berichtstypen — von Druckbelüftung bis Schallgutachten',
          'Muster hochladen — Stil und Struktur werden übernommen',
          'Checkliste: Das System weiss, welche Daten fehlen',
          'Eigene Design-Vorlagen für das fertige PDF',
        ],
      },
      {
        title: 'Ihr Schreibstil',
        desc: 'Laden Sie ein bestehendes Gutachten als Muster hoch. Formulierungen, Fachbegriffe und Struktur werden erkannt. Neue Berichte klingen wie von Ihnen geschrieben.',
        capabilities: [
          'Stil-Erkennung aus einem einzigen Beispieldokument',
          'Vollständige Berichte, kein Lückentext',
          'Fachbegriffe und Formulierungen werden übernommen',
        ],
      },
      {
        title: 'Ihre Arbeitsweise',
        desc: 'Messwerte eingeben, Fotos hochladen, Befunde diktieren. Die KI weiss, was Ihr Berichtstyp braucht — und schreibt den Bericht auf Anweisung um.',
        capabilities: [
          'Spracheingabe — diktierte Notizen werden Fachtext',
          'Bildanalyse — Fotos werden fachlich beschrieben',
          '"Formaler formulieren" — Absätze auf Anweisung umschreiben',
          'Druckfertiges PDF — direkt versenden oder drucken',
        ],
      },
    ],
    steps: [
      { title: 'Dokumenttyp definieren', desc: 'Einmal: Struktur festlegen, Muster hochladen, Checkliste konfigurieren. Gilt für alle zukünftigen Berichte dieses Typs.', screenshot: '/images/products/report-dashboard.png' },
      { title: 'Wizard starten', desc: 'Projekt zuordnen, Titel und Adresse eingeben, Auftraggeber angeben. Der 5-Schritt-Wizard führt Sie durch den gesamten Prozess.', screenshot: '/images/products/report-wizard.png' },
      { title: 'Bericht entsteht', desc: 'Die KI generiert Ihren Bericht — formatiert, in Ihrem Stil, direkt bearbeitbar im integrierten Editor mit Toolbar und Versionierung.', screenshot: '/images/products/report-editor.png' },
      { title: 'Berichte verwalten', desc: 'Alle Gutachten auf einen Blick — bearbeiten, drucken, Eingabedaten anpassen. Versionierung und Demo-Beispiele inklusive.', screenshot: '/images/products/report-generation.png' },
      { title: 'Wissensbasis pflegen', desc: 'KI-Recherche, eigene Wissensbasis, Kontext-Budget — Ihr Dokumenttyp wird mit jedem Bericht besser.', screenshot: '/images/products/report-preview.png' },
    ],
    stats: [
      { value: 'Workflow', label: 'Definierter Prozess, kein Chatbot' },
      { value: 'Reproduzierbar', label: 'Gleiche Daten, gleiches Ergebnis' },
      { value: 'Ihr Stil', label: 'Schreibt wie Sie — nicht wie eine Maschine' },
    ],
    pricing: null, // Beta Testing — Preise werden nach der Testphase veröffentlicht
  },

  energy: {
    slug: 'energy',
    name: 'WerkING Energy',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Energy</span>',
    tagline: 'Energieberichte aus Betriebsdaten. 8 Phasen. Selbstkorrigierend.',
    status: 'beta',
    statusLabel: 'In Entwicklung',
    href: '/energy/',
    appUrl: '',
    screenshot: '/images/products/energy-dashboard.png',
    problem: '2 Jahre Betriebsdaten einer Kälteanlage. Excel-Dateien mit Temperaturen, Volumenströmen, Leistungswerten. Daraus manuell Anomalien finden, Wirkungsgrade berechnen, Einsparpotenziale quantifizieren — dauert Wochen. Und jedes Gebäude ist anders.',
    features: [], // Energy uses pillars instead
    pillars: [
      {
        title: 'Beliebige Messdaten',
        desc: 'CSV, Excel oder Parquet — egal ob Kälteanlage, Heizung oder Lüftung. Das System erkennt Spalten, versteht die Anlage und ordnet Sensoren automatisch zu. Dazu optional: Anlagenschemata oder Betriebsanleitungen als PDF für zusätzlichen Kontext.',
        capabilities: [
          'Automatische Spaltenerkennung — Temperaturen, Volumenströme, Leistungen',
          'Beliebige Gebäudetechnik: Kälte, Heizung, Lüftung, Klima',
          'Kontext-Dokumente als PDF: Anlagenschemata, Betriebsanleitungen',
          'Gezielte Rückfragen statt Raten — erst wenn der Kontext klar ist, startet die Analyse',
        ],
      },
      {
        title: '8-Phasen-Pipeline',
        desc: 'Vom Rohdaten-Upload bis zum fertigen Bericht: Datenverständnis, Qualitätsprüfung, Baseline-Berechnung, Formelentdeckung, Verhaltensanalyse, Effizienzberechnung, Einsparpotenziale und Berichtgenerierung. Jede Phase baut auf allen vorherigen auf — ein durchgängiger Datenfluss über ~40 Minuten.',
        capabilities: [
          '8 aufeinanderfolgende Analysephasen — vollautomatisch',
          'Phasenübergreifender Datenfluss: jede Phase nutzt die Ergebnisse aller vorherigen',
          '~40 Minuten für einen vollständigen Energiebericht',
          'Jede Berechnung nachvollziehbar mit Begründung und Quelldaten',
        ],
      },
      {
        title: 'Selbstkorrigierende Schleifen',
        desc: 'Die KI generiert Berechnungsformeln, führt sie gegen Echtdaten aus, erstellt Grafiken und prüft visuell, ob die Ergebnisse physikalisch sinnvoll sind. Bis zu 10 Iterationen — bis das Ergebnis stimmt. Kein blindes Durchrechnen, sondern intelligente Validierung.',
        capabilities: [
          'Formelentdeckung: KI leitet Berechnungsformeln aus den Daten ab',
          'Automatische Grafik-Erzeugung und visuelle Plausibilitätsprüfung durch KI',
          'Bis zu 10 Korrekturschleifen pro Berechnung',
          'Abbruchbedingung: erst wenn das Ergebnis physikalisch konsistent ist',
        ],
      },
    ],
    steps: [
      { title: 'Projekte verwalten', desc: 'Alle Energy Reports auf einen Blick — Status, Fortschritt und Dateien pro Projekt. Neuen Report mit einem Klick starten.', screenshot: '/images/products/energy-dashboard.png' },
      { title: 'Daten hochladen', desc: 'Excel, CSV oder Parquet hochladen. Die KI analysiert sofort: Systemtyp, Betriebscharakteristik, Datenqualität — und zeigt fehlende Informationen.', screenshot: '/images/products/energy-wizard-upload.png' },
      { title: 'KI klärt Kontext', desc: 'Gezielte Rückfragen zur Anlagentopologie: Chiller, Verbraucher, Kreisläufe. Technische Referenzdokumente und Spaltenzuordnung werden automatisch erkannt.', screenshot: '/images/products/energy-wizard-conversation.png' },
      { title: 'Review & Systemschema', desc: 'Interaktives Anlagenschema zeigt die erkannte Topologie. Spaltenzuordnung prüfen, Konfidenz bewerten — erst dann startet die 8-Phasen-Analyse.', screenshot: '/images/products/energy-wizard-review.png' },
      { title: 'Fertiger Energiebericht', desc: 'Temperaturverläufe, Leistungsprofile, Anomalie-Erkennung — alles automatisch berechnet und visualisiert. Professioneller Report mit Grafiken und Handlungsempfehlungen.', screenshot: '/images/products/energy-report-analysis.png' },
    ],
    stats: [
      { value: '8 Phasen', label: 'Vom Rohdaten-Upload bis zum Bericht' },
      { value: '~40 Min', label: 'Vollständiger Energiebericht' },
      { value: 'Selbstkorrigierend', label: 'KI prüft und iteriert automatisch' },
    ],
    pricing: null, // In Entwicklung — Preise folgen
  },

  safety: {
    slug: 'safety',
    name: 'WerkING Safety',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Safety</span>',
    tagline: 'Risikoanalysen für Maschinen. Von der Dokumentation bis zur Massnahme.',
    status: 'beta',
    statusLabel: 'Alpha Testing',
    href: '/safety/',
    appUrl: '',
    screenshot: '/images/products/safety-analysis.png',
    problem: 'Eine Bohrmaschine mit Servoantrieb und hydraulischer Klemmung. 200 Seiten Dokumentation. Daraus manuell Gefährdungen identifizieren und bewerten — pro Maschine mehrere Tage.',
    features: [], // Safety uses pillars instead
    pillars: [
      {
        title: 'Liest Ihre Dokumentation',
        desc: 'PDF hochladen — Vision-AI analysiert Bilder, Schaltpläne und technische Daten. Maschinenkomponenten werden automatisch erkannt.',
        capabilities: [
          'Vision-AI erkennt Komponenten aus Bildern und Schaltplänen',
          '200+ Seiten Betriebsanleitung in einer Analyse',
          'Automatische Bildextraktion und Komponentenerkennung',
        ],
      },
      {
        title: 'Bewertet systematisch',
        desc: 'Jede Gefährdung nach Schwere, Wahrscheinlichkeit und Häufigkeit. 4-Phasen-Pipeline: Analyse, Durchsuchung, Identifikation, Bewertung.',
        capabilities: [
          '4-Phasen-Pipeline — vollständig automatisiert',
          'Schwere, Wahrscheinlichkeit, Häufigkeit — systematisch bewertet',
          'Massnahmenvorschläge mit fachlicher Begründung',
        ],
      },
      {
        title: 'Exportiert für Ihre Tools',
        desc: '9-Spalten CE-Format. JSON-Export für Safe Expert. PDF-Report für die Dokumentation. Direkt weiterverarbeiten.',
        capabilities: [
          '9-Spalten CE-konformes Risikoanalyse-Format',
          'JSON-Export für Safe Expert Integration',
          'PDF-Report mit vollständiger Dokumentation',
        ],
      },
    ],
    steps: [
      { title: 'Dokumentation hochladen', desc: 'Betriebsanleitung als PDF. Bilder, Schaltpläne, technische Daten — die Vision-AI liest alles.', screenshot: '/images/products/safety-upload.png' },
      { title: '4 Phasen analysieren', desc: 'Vision-AI erkennt Komponenten. Gefährdungen werden identifiziert, kategorisiert und nach CE-Schema bewertet. Jede Bewertung begründet.', screenshot: '/images/products/safety-analysis.png' },
      { title: 'Risikoanalyse exportieren', desc: '9-Spalten CE-Format mit begründeten Massnahmen. Export für Safe Expert oder als vollständiger PDF-Report.', screenshot: '/images/products/safety-analysis.png' },
    ],
    stats: [
      { value: '4 Phasen', label: 'Von Dokumentation bis Massnahme' },
      { value: 'CE-konform', label: '9-Spalten Risikoanalyse-Format' },
      { value: 'Vision-AI', label: 'Erkennt Bilder, Schaltpläne, Komponenten' },
    ],
    pricing: null, // Auf Anfrage
  },

  noise: {
    slug: 'noise',
    name: 'WerkING Noise',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Noise</span>',
    tagline: 'Lärmberechnung direkt auf der Karte. Europäischer Standard.',
    status: 'development',
    statusLabel: 'In Entwicklung',
    href: '/noise/',
    appUrl: '',
    screenshot: '/images/products/noise-map.png',
    problem: 'Neues Gewerbeobjekt neben Wohngebiet. Wie laut wird es bei den Nachbarn? Spezialsoftware kostet tausende Euro pro Lizenz. Manuelle Modellierung dauert Stunden.',
    features: [], // Noise uses pillars instead
    pillars: [
      {
        title: 'Direkt auf der Karte',
        desc: 'Adresse eingeben, Gebäude laden sich aus OpenStreetMap. Quellen und Empfänger per Drag & Drop platzieren. Keine separate Software nötig.',
        capabilities: [
          'Interaktiver Karten-Editor mit Zeichenwerkzeugen',
          'Gebäude und Gelände automatisch aus OpenStreetMap',
          'Quellen und Empfänger per Drag & Drop platzieren',
        ],
      },
      {
        title: 'CNOSSOS-EU Berechnung',
        desc: 'Europäischer Standard für Lärmberechnung. Reflexionen, Beugung, Geländeeinfluss — automatisch berücksichtigt. Kein Spezialwissen nötig.',
        capabilities: [
          'CNOSSOS-EU — europäischer Berechnungsstandard',
          'Reflexionen und Beugung an Gebäuden',
          'Geländeeinfluss und Abschirmung automatisch',
        ],
      },
      {
        title: 'Ergebnis auf einen Blick',
        desc: 'Farbkodierte Lärmkarte zeigt sofort, wo Grenzwerte überschritten werden. Export für Gutachten und Behörden.',
        capabilities: [
          'Heatmap mit farbkodierter Grenzwert-Prüfung',
          'Pegelwerte an jedem Empfängerpunkt',
          'Export für Gutachten und Behörden',
        ],
      },
    ],
    steps: [
      { title: 'Standort wählen', desc: 'Adresse eingeben. Gebäude und Gelände werden automatisch aus OpenStreetMap geladen.', screenshot: '/images/products/noise-map.png' },
      { title: 'Quellen platzieren', desc: 'Lärmquellen und Empfänger auf der Karte positionieren. Schallleistung und Frequenzspektrum definieren.', screenshot: '/images/products/noise-map.png' },
      { title: 'Berechnung & Heatmap', desc: 'CNOSSOS-EU Berechnung auf Knopfdruck. Farbkodierte Lärmkarte zeigt, wo Grenzwerte überschritten werden.', screenshot: '/images/products/noise-heatmap.png' },
    ],
    stats: [
      { value: 'CNOSSOS-EU', label: 'Europäischer Berechnungsstandard' },
      { value: 'Kartenbasiert', label: 'Direkt auf OpenStreetMap arbeiten' },
      { value: 'Sofort sichtbar', label: 'Farbkodierte Lärmkarte' },
    ],
    pricing: null,
  },

  platform: {
    slug: 'platform',
    name: 'WerkingFlow',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline">Flow</span>',
    tagline: 'KI-Plattform für automatisierte Engineering-Workflows. Reproduzierbar. Kontrolliert.',
    status: 'development',
    statusLabel: 'In Entwicklung',
    href: '/platform/',
    appUrl: '',
    screenshot: '/images/products/platform-dashboard.png',
    problem: 'Ingenieure verbringen 40-60% ihrer Zeit mit Dokumentation und wiederkehrenden Prozessen. Generische KI-Chatbots helfen nicht — sie erzeugen jedes Mal andere Ergebnisse und verstehen keine Fachprozesse. Was fehlt: strukturierte Workflows, die reproduzierbare Ergebnisse liefern.',
    features: [], // Platform uses pillars instead
    pillars: [
      {
        title: 'Workflow statt Chatbot',
        desc: 'Kein Chatbot, sondern definierte Prozesse mit klaren Schritten. Gleicher Input führt zu gleicher Qualität, gleicher Struktur und gleichen Kernaussagen. Die KI arbeitet innerhalb fester Phasen — von der Datenerfassung bis zum fertigen Ergebnis.',
        capabilities: [
          'Sequenzielle Phasen statt freie Konversation',
          'Reproduzierbare Ergebnisse bei gleichen Eingabedaten',
          'KI als Werkzeug innerhalb definierter Schritte — nicht als Gesprächspartner',
          'Validierung und Qualitätsprüfung in jeder Phase',
        ],
      },
      {
        title: 'Engineering-Intelligenz',
        desc: 'Keine generische KI — die Plattform versteht Fachprozesse. Energieberichte, Gutachten, Risikoanalysen: Jeder Workflow kennt die Domäne, die Datenformate und die Qualitätsanforderungen.',
        capabilities: [
          'Fertige Workflows für Gutachten, Energieberichte, Risikoanalysen, Akustik',
          'Eigene Workflows für firmeninterne Prozesse entwickeln',
          'Von Ingenieuren geprüft und fachlich validiert',
          'Human-in-the-Loop: KI erstellt Entwürfe, Sie prüfen und geben frei',
        ],
      },
      {
        title: 'Ihre Daten, Ihre Kontrolle',
        desc: 'Modell-agnostisch, EU-gehostet, Know-how bleibt im Unternehmen. Heute Claude API, morgen ein anderes Modell — die Plattform funktioniert unabhängig vom KI-Anbieter.',
        capabilities: [
          'Modell-agnostisch — kein Lock-in bei einem KI-Anbieter',
          'EU-gehostete Infrastruktur — volle Datensouveränität',
          'Know-how bleibt im Unternehmen — nichts verlässt Ihre Kontrolle',
          'API-first: Beliebige Interfaces — Browser, Chat, Voice',
        ],
      },
    ],
    steps: [],
    stats: [
      { value: 'Deterministisch', label: 'Gleiche Daten, gleiche Qualität' },
      { value: 'EU-hosted', label: 'Datensouveränität und Sicherheit' },
      { value: 'Modell-agnostisch', label: 'Kein Lock-in, volle Kontrolle' },
    ],
    pricing: null,
  },
} as const

export const PRODUCT_ORDER = ['report', 'energy', 'safety', 'noise', 'platform'] as const

export function getStatusColor(status: ProductStatus): string {
  switch (status) {
    case 'live': return 'bg-green/20 text-green border-green/30'
    case 'prelaunch': return 'bg-gold/20 text-gold border-gold/30'
    case 'beta': return 'bg-gold/20 text-gold border-gold/30'
    case 'development': return 'bg-text-muted/20 text-text-muted border-text-muted/30'
  }
}
