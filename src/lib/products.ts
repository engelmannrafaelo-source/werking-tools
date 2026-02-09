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
    tagline: 'KI-gestuetzte Gutachten-Erstellung. Reproduzierbar.',
    status: 'live',
    statusLabel: 'Verfuegbar',
    href: '/report/',
    appUrl: 'https://werking-report.vercel.app',
    screenshot: '/images/products/report-dashboard.png',
    problem: 'Technische Gutachten: Dieselbe Struktur, andere Daten, andere Adresse. Jedes Mal von vorne.',
    features: [
      { title: 'Dokumenttypen', desc: 'Eigene Gutachten-Typen definieren mit individuellen Anforderungen und Struktur.' },
      { title: 'Projekte', desc: 'Gutachten in Projekten organisieren. Drag-and-Drop, Filter, Suche.' },
      { title: 'KI-Generierung', desc: 'Die KI erstellt einen vollstaendigen Entwurf. Sie pruefen und geben frei.' },
      { title: 'WYSIWYG Editor', desc: 'Professioneller Rich-Text Editor. Formatierung, Bilder, Tabellen.' },
      { title: 'Muster-Bibliothek', desc: 'Eigene Vorlagen hochladen und wiederverwenden. DOCX, PDF, HTML.' },
      { title: 'PDF/DOCX Export', desc: 'Fertiges Gutachten als PDF oder Word exportieren.' },
      { title: 'Foto-Upload', desc: 'Fotos hochladen. Die KI analysiert Bilder und beschreibt Befunde.' },
      { title: 'Spracherkennung', desc: 'Diktieren statt tippen. Speech-to-Text fuer Notizen und Befunde.' },
    ],
    steps: [
      { title: 'Dokumenttyp waehlen', desc: 'Waehlen Sie einen Gutachten-Typ oder erstellen Sie einen neuen.', screenshot: '/images/products/report-dashboard.png' },
      { title: 'Projekt anlegen', desc: 'Legen Sie ein Projekt an und ordnen Sie es einem Dokumenttyp zu.', screenshot: '/images/products/report-wizard.png' },
      { title: 'KI generiert', desc: 'Die KI erstellt einen vollstaendigen Entwurf. Prozess statt Prompt.', screenshot: '/images/products/report-editor.png' },
      { title: 'Pruefen & Exportieren', desc: 'Pruefen Sie den Entwurf im Editor und exportieren Sie als PDF.', screenshot: '/images/products/report-preview.png' },
    ],
    stats: [
      { value: 'Definiert', label: 'Jeder Schritt ist festgelegt' },
      { value: 'Reproduzierbar', label: 'Gleiche Daten, gleiches Ergebnis' },
      { value: '8', label: 'Features integriert' },
    ],
    pricing: {
      model: 'subscription',
      plans: [
        {
          name: 'Basic',
          price: 29,
          period: 'Monat',
          features: ['10 Gutachten/Monat', 'KI-Generierung', 'PDF Export', 'Email-Support'],
        },
        {
          name: 'Professional',
          price: 79,
          period: 'Monat',
          highlighted: true,
          features: ['Unbegrenzte Gutachten', 'KI-Generierung', 'KI-Editing', 'Stammdaten-Verwaltung', 'PDF & DOCX Export', 'Prioritaets-Support'],
        },
        {
          name: 'Enterprise',
          price: 149,
          period: 'Monat',
          features: ['Alles aus Professional', 'Multi-User', 'API-Zugang', 'Eigenes Branding', 'Dedizierter Support'],
        },
      ],
    },
  },

  energy: {
    slug: 'energy',
    name: 'WerkING Energy',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Energy</span>',
    tagline: 'KI-gestuetzte Energiediagnostik mit 8-Phasen-Pipeline.',
    status: 'beta',
    statusLabel: 'Alpha Testing',
    href: '/energy/',
    appUrl: 'https://werking-energy.vercel.app',
    screenshot: '/images/products/energy-wizard.png',
    problem: 'Energieberichte sind aufwaendig — Datenanalyse, Heizlastberechnung, Berichterstellung. Stunden an Arbeit fuer jedes Gebaeude.',
    features: [
      { title: 'Daten-Upload', desc: 'Verbrauchsdaten als Excel oder Parquet hochladen.' },
      { title: 'KI-Klaerungsfragen', desc: '7 automatisch generierte Fragen zu Ihren Daten.' },
      { title: 'Auto-Spaltenzuordnung', desc: 'Automatische Erkennung und Zuordnung der Datenspalten.' },
      { title: '9-Phasen Pipeline', desc: 'Vollstaendige Analyse: Baseline, Anomalien, Fehler, Einsparungen, Empfehlungen.' },
      { title: 'HTML Preview', desc: 'Interaktive Vorschau des fertigen Berichts.' },
      { title: 'PDF Export', desc: 'Professioneller Energiebericht als PDF.' },
    ],
    steps: [
      { title: 'Daten hochladen', desc: 'Laden Sie Ihre Verbrauchsdaten und Kontext-Dokumente hoch.', screenshot: '/images/products/energy-wizard.png' },
      { title: 'Fragen beantworten', desc: 'Die KI stellt 7 gezielte Fragen zu Ihren Daten.', screenshot: '/images/products/energy-pipeline.png' },
      { title: 'Pipeline laeuft', desc: '9 Phasen analysieren Ihre Daten automatisch.', screenshot: '/images/products/energy-pipeline.png' },
      { title: 'Bericht erhalten', desc: 'Fertiger Energiebericht mit Empfehlungen und Einsparpotenzialen.', screenshot: '/images/products/energy-report.png' },
    ],
    stats: [
      { value: '9', label: 'Analyse-Phasen' },
      { value: '70+', label: 'API-Calls pro Bericht' },
      { value: 'Automatisiert', label: 'Vollstaendige Pipeline' },
    ],
    pricing: {
      model: 'per-report',
      plans: [
        {
          name: 'Einzelbericht',
          price: 1000,
          period: 'einmalig',
          features: ['1 Energiebericht', 'Vollstaendige 9-Phasen Analyse', 'PDF Export', 'Email-Support'],
        },
        {
          name: '5er-Pack',
          price: 4000,
          period: 'einmalig',
          highlighted: true,
          features: ['5 Energieberichte', 'Mengenrabatt', 'Alle Features', 'Prioritaets-Support'],
        },
        {
          name: '10er-Pack',
          price: 7000,
          period: 'einmalig',
          features: ['10 Energieberichte', 'Mengenrabatt', 'Alle Features', 'Dedizierter Support'],
        },
      ],
    },
  },

  safety: {
    slug: 'safety',
    name: 'WerkING Safety',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Safety</span>',
    tagline: 'CE-Risikoanalysen automatisiert.',
    status: 'beta',
    statusLabel: 'Alpha Testing',
    href: '/safety/',
    appUrl: 'https://tecc-safety-expert.vercel.app',
    screenshot: '/images/products/safety-analysis.png',
    problem: 'CE-Risikoanalysen sind komplex — Gefaehrdungen identifizieren, Massnahmen definieren, alles dokumentieren. Pro Maschine mehrere Stunden.',
    features: [
      { title: 'PDF-Analyse', desc: 'Maschinen-Dokumentation als PDF hochladen. Vision-AI erkennt Komponenten.' },
      { title: '4-Phasen Pipeline', desc: 'Automatische Analyse: Bildextraktion, Dokumenten-Analyse, Gefaehrdungen, Report.' },
      { title: '9-Spalten Format', desc: 'CE-konforme Risikoanalyse mit Severity, Probability, Frequency.' },
      { title: 'Quellenangabe', desc: 'Jede Massnahme mit Verweis auf die Wissensbasis-Quelle.' },
      { title: 'JSON Export', desc: 'Export fuer Safe Expert Import. Nahtlose Integration.' },
    ],
    steps: [
      { title: 'PDF hochladen', desc: 'Laden Sie die Maschinen-Dokumentation als PDF hoch.', screenshot: '/images/products/safety-upload.png' },
      { title: 'KI analysiert', desc: 'Vision-AI extrahiert Bilder und identifiziert Gefaehrdungen.', screenshot: '/images/products/safety-analysis.png' },
      { title: 'Risikoanalyse', desc: '9-Spalten CE-Format mit Massnahmen und Quellenangaben.', screenshot: '/images/products/safety-analysis.png' },
    ],
    stats: [
      { value: 'Automatisiert', label: 'Gefaehrdungen erkennen und bewerten' },
      { value: '9 Spalten', label: 'CE-konformes Risikoanalyse-Format' },
      { value: 'Quellenangabe', label: 'Jede Massnahme mit Verweis' },
    ],
    pricing: null, // Auf Anfrage
  },

  noise: {
    slug: 'noise',
    name: 'WerkING Noise',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Noise</span>',
    tagline: 'CNOSSOS-EU Schallberechnung mit interaktivem Map-Editor.',
    status: 'development',
    statusLabel: 'In Entwicklung',
    href: '/noise/',
    appUrl: '',
    screenshot: '/images/products/noise-map.png',
    problem: 'Laermberechnungen erfordern spezialisierte Software und manuelle Modellierung. Zeitaufwaendig und fehleranfaellig.',
    features: [
      { title: 'Karten-Editor', desc: 'OpenStreetMap-basierter Editor mit Zeichenwerkzeugen.' },
      { title: 'CNOSSOS-EU', desc: 'Normkonforme Laermberechnung nach europaeischem Standard.' },
      { title: '3D-Visualisierung', desc: 'Dreidimensionale Darstellung von Gebaeuden und Schallausbreitung.' },
      { title: 'Heatmap', desc: 'Farbkodierte Laermkarten mit Grenzwert-Pruefung.' },
    ],
    steps: [
      { title: 'Standort waehlen', desc: 'Waehlen Sie den Standort auf der Karte.', screenshot: '/images/products/noise-map.png' },
      { title: 'Quellen platzieren', desc: 'Platzieren Sie Laermquellen und Empfaenger.', screenshot: '/images/products/noise-heatmap.png' },
      { title: 'Berechnung', desc: 'Automatische Laermberechnung mit Heatmap-Visualisierung.', screenshot: '/images/products/noise-heatmap.png' },
    ],
    stats: [],
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
    features: [
      { title: 'Workflow-Marktplatz', desc: 'Fertige Workflows nutzen — von Ingenieuren geprueft.' },
      { title: 'Eigene Workflows', desc: 'Eigene Workflows entwickeln und im Unternehmen einsetzen.' },
      { title: 'Marketplace', desc: 'Workflows an andere Ingenieure verkaufen. 70% bleibt beim Entwickler.' },
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
