const STATS = [
  { value: 'Workflow', label: 'Definierter Prozess statt Chatbot-Raten' },
  { value: 'Für Ingenieure', label: 'Jedes Tool löst ein konkretes Problem' },
  { value: 'Reproduzierbar', label: 'Gleiche Daten, gleiche Analyse, gleiche Empfehlungen.' },
] as const

export default function Stats() {
  return (
    <section className="py-20 bg-navy-mid">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
