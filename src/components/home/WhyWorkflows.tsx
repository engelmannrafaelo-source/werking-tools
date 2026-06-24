const ARGUMENTS = [
  {
    title: 'Eine Pipeline, kein Chatfenster',
    text: 'Ein Workflow ist eine Pipeline aus vielen spezialisierten KI-Schritten — jeder mit klarer Aufgabe, jede Phase validiert. Wie ein eingespieltes Team aus Spezialisten statt einem einzelnen Alleskönner.',
    contrast: 'Ein Chatbot ist ein Generalist, der bei jeder Frage neu entscheidet.',
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
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Hinter einem WerkING-Workflow steckt kein einzelner Chatbot, sondern eine Pipeline aus vielen spezialisierten, kuratierten KI-Schritten, die nacheinander an Ihren Daten arbeiten und sich gegenseitig prüfen. Genau das macht das Ergebnis verlässlich — und lässt sich in einem Chatfenster nicht nachbauen.
          </p>
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
