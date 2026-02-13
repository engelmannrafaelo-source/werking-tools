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
      { title: 'Wizard starten', desc: 'Projekt zuordnen, Stammdaten, Begehungsdatum. Der 6-Schritt-Wizard führt Sie durch — in 2 Minuten bereit.', screenshot: '/images/products/report-wizard.png' },
      { title: 'Material sammeln', desc: 'Messwerte eingeben, Fotos hochladen, Befunde diktieren. Die Checkliste weiss, was Ihr Berichtstyp braucht — nichts wird vergessen.', screenshot: '/images/products/report-wizard.png' },
      { title: 'Bericht entsteht', desc: 'Vollständiger Fachbericht in Ihrem Stil. Tabellen mit Messwerten, fachliche Bewertungen, Empfehlungen — kein Lückentext.', screenshot: '/images/products/report-editor.png' },
      { title: 'Prüfen & PDF', desc: 'Überarbeitungen per Anweisung: "Kürzer", "Formaler", "Mehr Detail". Design-Vorlage wählen, PDF generieren, versenden.', screenshot: '/images/products/report-preview.png' },
    ],
    stats: [
      { value: 'Workflow', label: 'Definierter Prozess, kein Chatbot' },
      { value: 'Reproduzierbar', label: 'Gleiche Daten, gleiches Ergebnis' },
      { value: 'Ihr Stil', label: 'Schreibt wie Sie — nicht wie eine Maschine' },
    ],
    pricing: {
      model: 'subscription',
      plans: [
        {
          name: 'Starter',
          price: 40,
          period: 'Monat',
          features: ['Haiku 4.5 KI-Modell', 'EUR 10 API-Budget inkl.', '3 Dokumenttypen', '5 Projekte', '1 Design-Vorlage', 'PDF Export'],
        },
        {
          name: 'Professional',
          price: 100,
          period: 'Monat',
          highlighted: true,
          features: ['Sonnet 4.5 KI-Modell', 'EUR 35 API-Budget inkl.', '10 Dokumenttypen', '25 Projekte', '3 Design-Vorlagen', 'KI-Recherche', 'Spracheingabe'],
        },
        {
          name: 'Expert',
          price: 250,
          period: 'Monat',
          features: ['Opus 4.6 KI-Modell', 'EUR 100 API-Budget inkl.', 'Unbegrenzte Dokumenttypen', 'Unbegrenzte Projekte', 'Unbegrenzte Vorlagen', 'KI-Recherche unbegrenzt', 'Spracheingabe unbegrenzt'],
        },
      ],
    },
  },

  energy: {
    slug: 'energy',
    name: 'WerkING Energy',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Energy</span>',
    tagline: 'Energieberichte aus Betriebsdaten. Automatisch. Nachvollziehbar.',
    status: 'beta',
    statusLabel: 'Alpha Testing',
    href: '/energy/',
    appUrl: '',
    screenshot: '/images/products/energy-wizard.png',
    problem: '2 Jahre Betriebsdaten einer Kälteanlage. Excel-Dateien mit Temperaturen, Volumenströmen, Leistungswerten. Daraus manuell Anomalien finden, Wirkungsgrade berechnen, Einsparpotenziale quantifizieren — dauert Wochen.',
    features: [], // Energy uses pillars instead
    pillars: [
      {
        title: 'Beliebige Daten',
        desc: 'CSV, Excel oder Parquet — egal ob Kälteanlage, Heizung oder Lüftung. Das System erkennt die Spalten und versteht die Anlage. Dazu optional: Anlagenschemata oder Betriebsanleitungen als PDF.',
        capabilities: [
          'Automatische Spaltenerkennung — Temperaturen, Volumenströme, Leistungen',
          'Beliebige Gebäudetechnik: Kälte, Heizung, Lüftung, Klima',
          'Kontext-Dokumente als PDF: Anlagenschemata, Betriebsanleitungen',
        ],
      },
      {
        title: 'KI klärt Kontext',
        desc: 'Rückfragen statt Raten: Welche Anlage? Welche Sensoren? Welcher Zeitraum? Erst wenn alles klar ist, startet die Analyse.',
        capabilities: [
          'Gezielte Rückfragen — kein blindes Analysieren',
          'Sensor-Zuordnung und Anlagen-Verständnis',
          'Zeitraum, Betriebsmodi und Randbedingungen werden geklärt',
        ],
      },
      {
        title: '9 Phasen, 1 Bericht',
        desc: 'Von Datenvalidierung über Baseline-Berechnung und Anomalie-Erkennung bis hin zu bezifferten Einsparpotenzialen. Vollautomatisch in ~30 Minuten. Jedes Ergebnis nachvollziehbar.',
        capabilities: [
          'Datenvalidierung, Baseline, Anomalien, Effizienz, Einsparpotenziale',
          '~30 Minuten für einen vollständigen Energiebericht',
          'Jede Berechnung mit Begründung und Quelldaten',
        ],
      },
    ],
    steps: [
      { title: 'Daten hochladen', desc: 'Excel, CSV oder Parquet — beliebige Gebäudetechnik-Daten. Dazu optional: Anlagenschemata oder Betriebsanleitungen als PDF.', screenshot: '/images/products/energy-wizard.png' },
      { title: 'KI klärt Kontext', desc: 'Gezielte Rückfragen: Welche Anlage? Welche Sensoren? Welcher Zeitraum? Erst wenn der Kontext steht, startet die Analyse.', screenshot: '/images/products/energy-pipeline.png' },
      { title: '9 Phasen laufen', desc: 'Datenvalidierung, Baseline, Anomalien, Effizienz, Einsparpotenziale. Vollautomatisch in ~30 Minuten. Sie sehen den Fortschritt live.', screenshot: '/images/products/energy-pipeline.png' },
      { title: 'Fertiger Energiebericht', desc: 'Professioneller Report: Inhaltsverzeichnis, Kapitel, Berechnungen, Empfehlungen. HTML-Vorschau oder PDF-Export.', screenshot: '/images/products/energy-report.png' },
    ],
    stats: [
      { value: '9 Phasen', label: 'Von Rohdaten bis Empfehlung' },
      { value: '~30 Min', label: 'Für einen vollständigen Energiebericht' },
      { value: 'Nachvollziehbar', label: 'Jede Berechnung mit Quelldaten' },
    ],
    pricing: null, // Alpha Testing — Preise folgen
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
    tagline: 'Engineering Workflow Marketplace.',
    status: 'development',
    statusLabel: 'In Entwicklung',
    href: '/platform/',
    appUrl: '',
    screenshot: '/images/products/platform-dashboard.png',
    problem: '',
    features: [], // Platform uses pillars instead
    pillars: [
      {
        title: 'Nutzen',
        desc: 'Fertige Workflows aus dem Marktplatz — von Ingenieuren entwickelt, geprüft und bereit zum Einsatz.',
        capabilities: [
          'Workflows für verschiedene Fachgebiete',
          'Von Ingenieuren geprüft und dokumentiert',
          'Sofort einsetzbar, ohne Konfiguration',
        ],
      },
      {
        title: 'Bauen',
        desc: 'Eigene Workflows entwickeln und im Unternehmen einsetzen. Kein Code nötig — visuelle Konfiguration.',
        capabilities: [
          'Eigene Workflows visuell zusammenstellen',
          'KI-Bausteine kombinieren und anpassen',
          'Im eigenen Team deployen und nutzen',
        ],
      },
      {
        title: 'Verkaufen',
        desc: 'Workflows an andere Ingenieure verkaufen. Sie entwickeln, WerkingFlow vertreibt. 70% bleibt beim Entwickler.',
        capabilities: [
          'Eigene Workflows im Marktplatz anbieten',
          '70% Umsatzbeteiligung für Entwickler',
          'Automatische Abrechnung und Vertrieb',
        ],
      },
    ],
    steps: [],
    stats: [],
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
