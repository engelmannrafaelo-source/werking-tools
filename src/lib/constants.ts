export const SITE = {
  name: 'WerkING Tools',
  tagline: 'AI-Workflows mit Handschlagsqualität.',
  description: 'Technische Gutachten, Energieberichte, Risikoanalysen — KI-gestützt, ingenieur-geprüft.',
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
      { label: 'WerkING Safety', href: '/safety/', desc: 'CE-Risikoanalysen' },
      { label: 'WerkING Noise', href: '/noise/', desc: 'Akustik-Planung' },
      { label: 'WerkingFlow', href: '/platform/', desc: 'Workflow Marketplace' },
    ],
  },
  { label: 'Preise', href: '/preise/' },
  { label: 'Über mich', href: '/ueber-mich/' },
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
  bio: 'Mein Weg führte von der Aeroakustik-Forschung an der TU Wien über klassische Ingenieurprojekte zur Softwareentwicklung. Warum? Weil ich als Ziviltechniker täglich gesehen habe, wie viel Zeit mit repetitiven Excel-Workflows, manuellen Berechnungen und Copy-Paste in Berichten draufgeht.',
  bioSecond: 'Heute kombiniere ich beides: Ich verstehe Engineering-Prozesse bis ins Detail — und kann sie automatisieren.',
  credentials: [
    { icon: 'graduation', text: 'DI Dr. tech. Maschinenbau (TU Wien) — 5 Publikationen, 1 Patent' },
    { icon: 'shield', text: 'Ziviltechniker für Maschinenbau — befugter Gutachter' },
    { icon: 'code', text: 'Fullstack Developer — TypeScript, React, Python, FastAPI' },
    { icon: 'brain', text: 'KI-Integration — OpenAI, Claude, Automatisierung' },
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
    {
      title: 'Der Tech-Stack',
      description: 'Full-Stack Development mit modernen Tools. Von der Datenbank bis zum React-Frontend.',
      items: ['Frontend: React, Next.js, TypeScript', 'Backend: Node.js, Python, FastAPI', 'KI: OpenAI, Claude API', 'Deploy: Vercel, AWS, Docker'],
    },
  ],
} as const
