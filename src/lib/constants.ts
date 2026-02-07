export const SITE = {
  name: 'WerkING Tools',
  tagline: 'AI-Workflows mit Handschlagsqualitaet',
  description: 'Engineering Workflow Marketplace. Gutachten, Energieberichte, Risikoanalysen automatisiert. 90% Zeitersparnis. DSGVO-konform.',
  url: 'https://werking-tools.at',
  email: 'office@data-energyneering.at',
  phone: '+43 676 542 3883',
  address: 'Florianigasse 17/19, 1080 Wien',
  linkedin: 'https://www.linkedin.com/in/rafael-engelmann-02567a2aa/',
} as const

export const NAV_ITEMS = [
  { label: 'Produkte', href: '#produkte' },
  { label: 'So funktioniert\'s', href: '#so-funktionierts' },
  { label: 'Vertrauen', href: '#vertrauen' },
  { label: 'Foerderung', href: '#foerderung' },
] as const

export const PRODUCTS = [
  {
    name: 'Werking Report',
    icon: '📋',
    badge: 'live' as const,
    desc: 'Gutachten in 5 Minuten statt 5 Stunden. Upload, pruefen, fertig. Fuer Ziviltechniker und Sachverstaendige.',
    link: 'https://gutachten-standalone.vercel.app',
    price: 'ab EUR 29/Monat',
  },
  {
    name: 'Werking Safety',
    icon: '⚠️',
    badge: 'live' as const,
    desc: 'CE-Risikoanalysen automatisiert. Normenkonform nach Maschinenrichtlinie 2006/42/EG.',
    link: 'https://tecc-safety-expert.vercel.app',
    price: 'Projektbasis',
  },
  {
    name: 'Werking Energy',
    icon: '⚡',
    badge: 'soon' as const,
    desc: 'Energieberichte fuer Gebaeude generieren. 70+ Berechnungsschritte automatisiert.',
    link: null,
    price: 'EUR 700-1.000/Report',
  },
  {
    name: 'Werking Noise',
    icon: '🔊',
    badge: 'soon' as const,
    desc: 'Schallschutz-Nachweise und Akustik-Gutachten digital erstellen.',
    link: null,
    price: 'Maerz 2026',
  },
] as const

export const STATS = [
  { value: 90, suffix: '%', label: 'Zeitersparnis' },
  { value: 70, suffix: '+', label: 'API-Calls pro Report' },
  { value: 3, suffix: '', label: 'Schritte zum Ergebnis' },
  { value: 100, suffix: '%', label: 'DSGVO-konform' },
] as const

export const STEPS = [
  {
    number: 1,
    title: 'Upload',
    desc: 'Daten hochladen — Plaene, Fotos, Messwerte, Bestandsdokumente. Drag & Drop oder strukturierte Eingabe.',
  },
  {
    number: 2,
    title: 'KI-Analyse',
    desc: 'Spezialisierte Pipeline erstellt den Entwurf. Deterministische Verarbeitung — gleicher Input, gleiches Ergebnis.',
  },
  {
    number: 3,
    title: 'Freigabe',
    desc: 'Ingenieur prueft, korrigiert und gibt frei. Human-in-the-Loop — keine Black Box, volle Kontrolle.',
  },
] as const

export const TRUST_ITEMS = [
  { icon: '🇪🇺', title: 'EU-Server', desc: 'Hosting in Deutschland. Keine Daten ausserhalb der EU.' },
  { icon: '🔒', title: 'DSGVO-konform', desc: 'Presidio-Anonymisierung. Keine Datenweitergabe an Dritte.' },
  { icon: '⚖️', title: 'Normenkonform', desc: 'DIN V 18599, OIB-Richtlinie, OENORM. Branchenstandards eingebaut.' },
  { icon: '👤', title: 'Human-in-the-Loop', desc: 'KI erstellt Entwuerfe. Der Experte prueft und gibt frei.' },
  { icon: '🔄', title: 'Reproduzierbar', desc: 'Deterministische Pipelines. Gleicher Input ergibt gleiches Ergebnis.' },
] as const
