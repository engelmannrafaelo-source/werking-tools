export const SITE = {
  name: 'WerkING Tools',
  tagline: 'AI-Workflows mit Handschlagsqualitaet.',
  description: 'Technische Gutachten, Energieberichte, Risikoanalysen — KI-gestuetzt, ingenieur-geprueft.',
  url: 'https://werking-tools.at',
  email: 'office@werking-tools.at',
  phone: '+43 676 542 3883',
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
  { label: 'Ueber mich', href: '/ueber-mich/' },
] as const

export const SOLUTION_STEPS = [
  {
    number: 1,
    title: 'Hochladen',
    desc: 'Ihre Unterlagen: Messdaten, Fotos, Plaene, Notizen.',
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
    title: 'Pruefen & Freigeben',
    desc: 'Sie pruefen, passen an und geben frei. Die Verantwortung bleibt bei Ihnen.',
    icon: 'check',
  },
] as const

export const FOUNDER = {
  name: 'DI Dr. Rafael Engelmann',
  title: 'Ziviltechniker fuer Maschinenbau. Und Softwareentwickler.',
  bio: 'Als Ziviltechniker habe ich taeglich gesehen, wie viel Zeit mit repetitiven Excel-Workflows, manuellen Berechnungen und Copy-Paste in Berichten draufgeht. Die Idee: Was wenn die KI den Entwurf schreibt und der Ingenieur nur noch prueft? WerkING Tools entsteht aus dieser Erfahrung — jedes Tool loest ein Problem, das ich selbst hatte.',
  facts: [
    'Dr. techn., TU Wien (Maschinenbau / Aeroakustik)',
    '15+ Jahre Software-Entwicklung',
    'Referenzprojekte: Otto-Wagner Areal, Raiffeisen Linz, Muenzing Chemie',
    'Ziviltechniker-Kammer Wien, NOe, Bgld',
  ],
  references: [
    { name: 'Otto-Wagner Areal', category: 'Energiekonzept' },
    { name: 'Raiffeisenlandesbank Linz', category: 'Technische Studie' },
    { name: 'Muenzing Chemie', category: 'Anlagenstudie' },
    { name: 'Invenio', category: 'Spezialsoftware' },
  ],
} as const
