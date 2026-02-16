const ARGUMENTS = [
  {
    title: 'Definierter Prozess',
    text: 'Jeder Workflow ist eine feste Abfolge von Schritten. Jede Phase wird validiert. Nichts wird improvisiert.',
    contrast: 'Chatbots entscheiden selbst was sie tun.',
  },
  {
    title: 'Inhaltlich reproduzierbar',
    text: 'Gleiche Daten, gleiche Analyse, gleiche Empfehlungen. Die KI formuliert frei — aber die inhaltlichen Ergebnisse sind nachvollziehbar und prüfbar.',
    contrast: 'Chatbots liefern heute so, morgen anders.',
  },
  {
    title: 'Sie behalten die Kontrolle',
    text: 'Die KI erstellt einen Entwurf. Sie prüfen, passen an und geben frei.',
    contrast: 'Keine Blackbox. Kein blindes Vertrauen.',
  },
] as const

export default function WhyWorkflows() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">
            Workflow statt Chatbot.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ARGUMENTS.map((arg) => (
            <div key={arg.title} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                {arg.title}
              </h3>
              <p className="text-text-body text-sm leading-relaxed mb-4">
                {arg.text}
              </p>
              <p className="text-xs text-text-muted italic">
                {arg.contrast}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-text-muted mt-12 font-heading tracking-wide">
          Werkzeug, kein Spielzeug.
        </p>
      </div>
    </section>
  )
}
