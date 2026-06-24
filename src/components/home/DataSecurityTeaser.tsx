import Link from 'next/link'

const POINTS = [
  {
    title: 'Daten in Deutschland',
    text: 'Ihre Projektdateien und Ergebnisse liegen auf Servern in Deutschland (Hetzner, Standort Falkenstein).',
  },
  {
    title: 'Pseudonymisiert vor der KI',
    text: 'Namen, Firmen, Adressen und Kontaktdaten werden durch Platzhalter ersetzt, bevor etwas an das KI-Modell geht.',
  },
  {
    title: 'Keine Weitergabe, kein Training',
    text: 'Ihre Daten werden nicht an Dritte verkauft und nicht zum Training von KI-Modellen verwendet.',
  },
] as const

export default function DataSecurityTeaser() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">
            Vertraulich. Von Anfang an.
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Sie arbeiten mit sensiblen Projekt- und Personendaten. Datensicherheit und Pseudonymisierung sind in jedem Workflow von Anfang an eingebaut — kein nachträglicher Zusatz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {POINTS.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-navy mb-3">{p.title}</h3>
              <p className="text-text-body text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/datensicherheit/"
            className="inline-block px-6 py-3 border-2 border-navy/20 text-navy font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors no-underline"
          >
            Wie wir Ihre Daten schützen →
          </Link>
        </div>
      </div>
    </section>
  )
}
