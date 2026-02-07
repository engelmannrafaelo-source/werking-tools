export default function Handschlagsqualitaet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="gold-line-center" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
          Was bedeutet Handschlagsqualitaet?
        </h2>
        <p className="text-lg text-text-body leading-relaxed mb-8">
          Jeder Workflow auf unserer Plattform traegt ein{' '}
          <span className="text-gold font-semibold">Ingenieurs-Siegel</span>.
          Ein Ziviltechniker hat den Workflow fachlich geprueft, die Normen verifiziert
          und die Ergebnisqualitaet sichergestellt — bevor er verfuegbar wird.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Fachlich geprueft</h3>
            <p className="text-sm text-text-muted">
              Kein generisches KI-Tool. Jeder Workflow versteht die Fachsprache und die relevanten Normen.
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Reproduzierbar</h3>
            <p className="text-sm text-text-muted">
              Deterministische Pipelines. Gleicher Input ergibt gleiches Ergebnis — wie ein Industrieprozess.
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Ingenieur gibt frei</h3>
            <p className="text-sm text-text-muted">
              Die KI erstellt den Entwurf. Sie pruefen und geben frei. Human-in-the-Loop.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
