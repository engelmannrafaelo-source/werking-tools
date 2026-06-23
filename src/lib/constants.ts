export const SITE = {
  name: 'WerkING Tools',
  tagline: 'AI-Workflows mit Handschlagsqualität.',
  description: 'Technische Gutachten, Energieberichte, Schallgutachten — KI-gestützt, ingenieur-geprüft.',
  url: 'https://werking.tools',
  email: 'office@werking.tools',
  // phone removed — no phone support
  address: 'Florianigasse 17/19, 1080 Wien',
  linkedin: 'https://www.linkedin.com/in/rafael-engelmann-02567a2aa/',
  hours: 'Mo-Do: 09-17, Fr: 09-12',
} as const

export const NAV_ITEMS = [
  {
    label: 'Produkte',
    href: '#produkte',
    children: [
      { label: 'WerkING Report', href: '/report/', desc: 'Technische Gutachten' },
      { label: 'WerkING Energy', href: '/energy/', desc: 'Energieberichte' },
      { label: 'WerkING Noise', href: '/noise/', desc: 'Schallgutachten' },
      { label: 'WerkingFlow', href: '/platform/', desc: 'Workflow Marketplace' },
    ],
  },
  { label: 'Team', href: '/ueber-mich/' },
] as const

export const SOLUTION_STEPS = [
  {
    number: 1,
    title: 'Hochladen',
    desc: 'Ihre Unterlagen: Messdaten, Fotos, Pläne, Notizen.',
    icon: 'upload',
  },
  {
    number: 2,
    title: 'KI-Pipeline',
    desc: 'Definierter Prozess — analysiert, strukturiert, erstellt einen Entwurf.',
    icon: 'pipeline',
  },
  {
    number: 3,
    title: 'Prüfen & Freigeben',
    desc: 'Sie prüfen, passen an und geben frei. Die Verantwortung bleibt bei Ihnen.',
    icon: 'check',
  },
] as const

export const FOUNDER = {
  name: 'DI Dr. Rafael Engelmann',
  title: 'Ingenieur + Entwickler',
  photo: '/images/rafael-engelmann.webp',
  bio: 'Als Ziviltechniker habe ich täglich gesehen, wie viel Zeit repetitive Excel-Workflows, manuelle Berechnungen und Copy-Paste in Berichten kosten.',
  bioSecond: 'Mit WerkING Tools automatisiere ich genau diese Prozesse — von jemandem, der sie aus der Praxis kennt.',
  credentials: [
    { icon: 'graduation', text: 'DI Dr. tech. Maschinenbau (TU Wien) — 5 Publikationen, 1 Patent' },
    { icon: 'shield', text: 'Ziviltechniker für Maschinenbau — befugter Gutachter' },
    { icon: 'brain', text: 'Entwickelt die WerkING-Produkte selbst — Engineering-Praxis trifft KI' },
  ],
  expertise: [
    {
      title: 'Der akademische Weg',
      description: '4 Jahre Forschung in Aeroakustik, Publikationen in internationalen Journals, Zusammenarbeit mit der Automobilindustrie.',
      items: ['Doktorat Aero-Vibro-Akustik', '5 peer-reviewed Publikationen', '1 Patent (Fahrzeug-Akustik)', 'CFD & numerische Simulation'],
    },
    {
      title: 'Die Praxis als ZT',
      description: 'Als befugter Ziviltechniker betreue ich Projekte von Energiekonzepten bis Schallschutz-Gutachten.',
      items: ['Otto-Wagner Areal (Energiekonzept)', 'Raiffeisen Linz (HVAC-Studie)', 'Bauakustik-Gutachten', 'Technische Beratung'],
    },
  ],
} as const

// Team & Fachpartner. Fakten aus Business-Docs (team/PLASSER-FACHPARTNER.md, LOI-PLASSER.md,
// Engelmann-AI-Hub-Konzept). photo: '' → Initialen-Avatar; Pfad eintragen sobald Foto/Logo vorliegt.
export const TEAM = [
  {
    name: 'Markus Plasser',
    role: 'ReFit Energy GmbH · Fachpartner Energy',
    initials: 'MP',
    photo: '/images/team/markus-plasser.webp',
    desc: 'Energieberatung und HVAC-Anlagenoptimierung mit über 20 Jahren Branchenerfahrung. Fachlicher Partner für WerkING Energy.',
  },
  {
    name: 'David Engelmann',
    role: 'Entwicklungskooperation · alle WerkING-Produkte',
    initials: 'DE',
    photo: '',
    desc: 'Engelmann Energiesysteme — TGA-Ingenieurbüro in vierter Generation (seit 1895) — setzt alle WerkING-Produkte im Bürobetrieb ein und entwickelt sie als Kooperationspartner mit.',
  },
  {
    name: 'Kurt Engelmann',
    role: 'Engelmann Energiesysteme · Fachpartner WerkingFlow',
    initials: 'KE',
    photo: '',
    desc: 'Jahrzehntelange Praxis aus TGA-Planung und Energiekonzepten — bringt die Fachprozesse als Fachpartner in die Workflow-Plattform WerkingFlow ein.',
  },
] as const
