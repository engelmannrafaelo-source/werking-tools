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
    appUrl: '',
    screenshot: '/images/products/report-dashboard.webp',
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
        desc: 'Messwerte eingeben, Fotos hochladen, Befunde diktieren. Die KI ist in jeden Schritt eingebettet — und schreibt den fertigen Bericht im Chat auf Anweisung um. Mit WerkING-Check lässt sich jeder fertige Bericht von der KI auf Qualität prüfen.',
        capabilities: [
          'Spracheingabe — diktierte Notizen werden Fachtext',
          'Bildanalyse — Fotos werden fachlich beschrieben',
          'KI-Editor-Chat — Abschnitte fertiger Berichte gezielt überarbeiten',
          'Export als PDF (druckfertig) oder DOCX (weiterbearbeitbar)',
          'WerkING-Check — KI-Qualitätscheck für fertige Berichte, ohne Account; das Ergebnis bleibt privat',
        ],
      },
    ],
    steps: [
      { title: 'Dokumenttyp definieren', desc: 'Einmal: Struktur festlegen, Muster hochladen, Checkliste konfigurieren. Gilt für alle zukünftigen Berichte dieses Typs.', screenshot: '/images/products/report-dokumenttypen.webp' },
      { title: 'Wizard starten', desc: 'Projekt zuordnen, Titel und Adresse eingeben, Auftraggeber angeben. Der 5-Schritt-Wizard führt Sie durch den gesamten Prozess.', screenshot: '/images/products/report-wizard.webp' },
      { title: 'Bericht entsteht', desc: 'Die KI generiert Ihren Bericht — formatiert, in Ihrem Stil, direkt bearbeitbar im integrierten Editor mit KI-Assistent und Versionierung.', screenshot: '/images/products/report-editor.webp' },
      { title: 'Berichte verwalten', desc: 'Alle Gutachten auf einen Blick — bearbeiten, drucken, Eingabedaten anpassen. Versionierung und Projektordner inklusive.', screenshot: '/images/products/report-berichte.webp' },
      { title: 'Quellen & Wissensbasis', desc: 'Alle Quellen, die in den Bericht einfliessen, werden referenziert und sind aus dem Editor anklickbar. KI-Recherche und eigene Wissensbasis ergänzen den Kontext.', screenshot: '/images/products/report-quellen.webp' },
    ],
    stats: [
      { value: 'Ihr Stil', label: 'Schreibt wie Sie — nicht wie eine Maschine' },
      { value: 'PDF + DOCX', label: 'Druckfertig oder weiterbearbeitbar exportieren' },
      { value: 'WerkING-Check', label: 'KI-Qualitätscheck für Ihre Berichte' },
    ],
    pricing: null, // Beta Testing — Preise werden nach der Testphase veröffentlicht
  },

  energy: {
    slug: 'energy',
    name: 'WerkING Energy',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Energy</span>',
    tagline: 'Energieberichte aus Betriebsdaten. 8 Phasen. Selbstkorrigierend.',
    status: 'development',
    statusLabel: 'In Entwicklung',
    href: '/energy/',
    appUrl: '',
    screenshot: '/images/products/energy-dashboard.webp',
    problem: '2 Jahre Betriebsdaten einer Kälteanlage. Excel-Dateien mit Temperaturen, Volumenströmen, Leistungswerten. Daraus manuell Anomalien finden, Wirkungsgrade berechnen, Einsparpotenziale quantifizieren — dauert Wochen. Und jedes Gebäude ist anders.',
    features: [], // Energy uses pillars instead
    pillars: [
      {
        title: 'Beliebige Messdaten',
        desc: 'CSV, Excel oder Parquet — bis 5 GB pro Datei, egal ob Kälteanlage, Heizung oder Lüftung. Das System erkennt Spalten, versteht die Anlage und ordnet Sensoren automatisch zu. Anlagenschemata und Energieausweise als PDF werden per Computer Vision ausgelesen — kein manuelles Abtippen.',
        capabilities: [
          'Upload bis 5 GB — CSV, Excel, Parquet',
          'Automatische Spaltenerkennung — Temperaturen, Volumenströme, Leistungen',
          'Computer Vision liest Schemapläne und Energieausweise aus PDFs',
          'Gezielte Rückfragen statt Raten — erst wenn der Kontext klar ist, startet die Analyse',
        ],
      },
      {
        title: '8-Phasen-Pipeline',
        desc: 'Vom Rohdaten-Upload bis zum fertigen Bericht: Datenverständnis, autonome Web-Recherche, Qualitätsprüfung, Formelentdeckung, Verhaltensanalyse, Einsparpotenzial-Recherche, Effizienzberechnung und Berichtgenerierung. Jede Phase baut auf allen vorherigen auf und sichert ihren Zustand als Checkpoint — nach einer Unterbrechung setzt die Pipeline exakt dort fort.',
        capabilities: [
          '8 aufeinanderfolgende Analysephasen — vollautomatisch auf eigener Backend-Infrastruktur',
          'Autonomer Research-Agent recherchiert Richtwerte und Effizienz-Benchmarks',
          'Checkpoint-gesichert: jede Phase ist wiederaufsetzbar',
          'Jede Berechnung nachvollziehbar mit Begründung und Quelldaten',
        ],
      },
      {
        title: 'Selbstkorrigierende Schleifen',
        desc: 'Die KI generiert Python-Code für Berechnungen und Diagramme, führt ihn gegen die Echtdaten aus und prüft visuell, ob die Ergebnisse physikalisch sinnvoll sind. Jeder Plot entsteht aus den konkreten Messdaten — kein vordefiniertes Template. Iteriert, bis das Ergebnis stimmt.',
        capabilities: [
          'Formelentdeckung: KI leitet Berechnungsformeln aus den Daten ab',
          'Python-Plot-Generierung: Jahresdauerlinien, Lastgänge, Zeitreihen aus echten Daten',
          'Visuelle Plausibilitätsprüfung durch KI-Vision',
          'Abbruchbedingung: erst wenn das Ergebnis physikalisch konsistent ist',
        ],
      },
    ],
    steps: [
      { title: 'Projekte verwalten', desc: 'Alle Energy Reports auf einen Blick — Status, Fortschritt und Dateien pro Projekt. Neuen Report mit einem Klick starten.', screenshot: '/images/products/energy-projektliste.webp' },
      { title: 'Daten hochladen', desc: 'Excel, CSV oder Parquet hochladen — bis 5 GB. Die KI analysiert sofort: Zeitraum, Sampling-Rate, Datenlücken — und zeigt fehlende Informationen.', screenshot: '/images/products/energy-wizard-upload.webp' },
      { title: 'KI klärt Kontext', desc: 'Ein Copilot stellt gezielte Rückfragen zum Datensatz. Antworten fliessen direkt in die Analyse ein — kein Raten.', screenshot: '/images/products/energy-wizard-kontext.webp' },
      { title: 'Review & Systemschema', desc: 'Die KI erstellt automatisch ein Schema der Anlage: Heizkreise, Vor-/Rücklauf, Zähler. Sie prüfen das Mapping und korrigieren — editierbar, keine Black Box. Erst dann startet die 8-Phasen-Pipeline.', screenshot: '/images/products/energy-schema.webp' },
      { title: 'Fertiger Energiebericht', desc: 'Druckfertiger A4-Bericht mit Diagrammen, Befunden und Handlungsempfehlungen — als Browser-Vorschau mit PDF-Export und KI-Editor zum Nachbearbeiten.', screenshot: '/images/products/energy-report.webp' },
    ],
    stats: [
      { value: '8 Phasen', label: 'Vom Rohdaten-Upload bis zum Bericht' },
      { value: '~40 Min', label: 'Vollständiger Energiebericht' },
      { value: 'Selbstkorrigierend', label: 'KI prüft und iteriert automatisch' },
    ],
    pricing: null, // Beta — Preise folgen nach der Testphase
  },

  noise: {
    slug: 'noise',
    name: 'WerkING Noise',
    nameHtml: '<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline"> Noise</span>',
    tagline: 'KI-Schallgutachten. Auf der Karte berechnet, ÖNORM-konform formuliert.',
    status: 'development',
    statusLabel: 'In Entwicklung',
    href: '/noise/',
    appUrl: '',
    screenshot: '/images/products/werking-noise.webp',
    problem: 'Neues Gewerbeobjekt neben Wohngebiet. Wie laut wird es bei den Nachbarn — und wie wird daraus ein rechtsgültiges Gutachten? Spezialsoftware kostet tausende Euro pro Lizenz, die Modellierung dauert Stunden, und der Gutachtentext kommt obendrauf.',
    features: [], // Noise uses pillars instead
    pillars: [
      {
        title: 'Kartenbasierte Eingabe',
        desc: 'Adresse eingeben, Gebäude laden sich aus OpenStreetMap — als Grundriss und 3D-Modell. Quellen und Immissionsorte per Klick platzieren. Die KI liest Schallleistungspegel (Lw) und Oktavbandspektren direkt aus den PDF-Datenblättern aus.',
        capabilities: [
          'Gebäudegeometrie und Gelände automatisch aus OpenStreetMap',
          'Interaktive Karte + 3D-Gebäudemodell',
          'KI liest Lw-Werte und Spektren aus Datenblättern (Wärmepumpe, Lüftung, …)',
          'Quellen und Immissionsorte per Klick platzieren — mehrere Höhen möglich',
        ],
      },
      {
        title: 'Normkonforme Berechnung',
        desc: 'Die Schallausbreitung wird nach CNOSSOS-EU berechnet — dem europäischen Standard. Ergebnis: LAeq-Werte pro Immissionsort und Höhe mit automatischem Grenzwertvergleich nach ÖNORM S 5021 — inklusive Lärmkonturkarte.',
        capabilities: [
          'Berechnung nach CNOSSOS-EU — europäischer Standard',
          'ÖNORM S 5021: alle Gebietskategorien, Tag/Abend/Nacht',
          'Ampel-Status pro Empfänger — OK / Warnung / überschritten',
          'Rasterisierte Heatmap mit Isolinien direkt auf der Karte',
        ],
      },
      {
        title: 'KI schreibt das Gutachten',
        desc: 'Werking Noise ist kein Rechner mit KI-Knopf. Die KI formuliert den vollständigen Gutachtentext — Projektbeschreibung, Umgebung, Immissionsprognose, Beurteilung, Maßnahmen, Fazit. Berechnungswerte und Norm-Referenzen bleiben dabei unverändert. Export als DOCX in Ihrem Briefkopf.',
        capabilities: [
          '6 von 8 Gutachtenabschnitten KI-generiert — Gutachter prüft und ergänzt',
          'KI-Editor-Chat: Abschnitte per Spracheingabe gezielt überarbeiten',
          'Fakten bleiben stabil: Messwerte und Grenzwerte werden nicht verändert',
          'DOCX-Export mit eigener Designvorlage pro Mandant',
        ],
      },
    ],
    steps: [
      { title: 'Projekt anlegen', desc: 'Adresse, Auftraggeber und technische Datenblätter importieren. Die KI liest Schallleistungspegel und Oktavbandspektren automatisch aus den PDFs aus.', screenshot: '/images/products/noise-projekt.webp' },
      { title: 'Geometrie aus OpenStreetMap', desc: 'Bereich auf der Karte wählen — Gebäudegeometrie und Stockwerke kommen direkt aus OpenStreetMap. Kein manuelles CAD-Zeichnen.', screenshot: '/images/products/noise-karte-3d.webp' },
      { title: 'Simulationsmodell konfigurieren', desc: 'Schallquellen und Immissionsorte per Klick platzieren — mehrere Messpunkte und Höhen. Die KI schlägt Positionen und Parameter vor.', screenshot: '/images/products/noise-receivers.webp' },
      { title: 'Berechnung & Auswertung', desc: 'Berechnung nach CNOSSOS-EU. Ergebnis: LAeq pro Immissionsort und Höhe, automatischer Grenzwertvergleich nach ÖNORM S 5021, Lärmkonturkarte.', screenshot: '/images/products/noise-berechnung.webp' },
      { title: 'KI generiert das Schallgutachten', desc: 'Die KI erstellt den gesamten Gutachtentext. Der Gutachter prüft, ergänzt im KI-Editor und exportiert als DOCX — im eigenen Briefkopf.', screenshot: '/images/products/noise-gutachten.webp' },
    ],
    stats: [
      { value: 'CNOSSOS-EU', label: 'europäischer Berechnungsstandard' },
      { value: 'ÖNORM S 5021', label: 'Grenzwert-Ampel pro Immissionsort' },
      { value: '≤ 1 Stunde', label: 'Bis zum Gutachten-Entwurf' },
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
    screenshot: '/images/products/platform-dashboard.webp',
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
        desc: 'Keine generische KI — die Plattform versteht Fachprozesse. Prüfberichte, Energieanalysen, Schallgutachten: Jeder Workflow kennt die Domäne, die Datenformate und die Qualitätsanforderungen.',
        capabilities: [
          'Fertige Workflows für Prüfberichte, Energieanalysen und Schallgutachten',
          'Eigene Workflows für firmeninterne Prozesse entwickeln',
          'Entwickelt von einem Ziviltechniker für Maschinenbau',
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

export const PRODUCT_ORDER = ['report', 'energy', 'noise', 'platform'] as const

export function getStatusColor(status: ProductStatus): string {
  switch (status) {
    case 'live': return 'bg-green/20 text-green border-green/30'
    case 'prelaunch': return 'bg-gold/20 text-gold border-gold/30'
    case 'beta': return 'bg-gold/20 text-gold border-gold/30'
    case 'development': return 'bg-text-muted/20 text-text-muted border-text-muted/30'
  }
}
