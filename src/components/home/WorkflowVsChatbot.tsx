export default function WorkflowVsChatbot() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Workflow vs. Chatbot
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stellen Sie sich zwei Schachspieler vor. Einer improvisiert jede Partie.
            Der andere hat einen durchdachten Spielplan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chatbot */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-white/80">Chatbot / Agent</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">✗</span>
                <span>Jede Anfrage ist ein neues Experiment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">✗</span>
                <span>Unterschiedliche Ergebnisse bei gleichem Input</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">✗</span>
                <span>Keine Qualitaetskontrolle eingebaut</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">✗</span>
                <span>40%+ der Agent-Projekte scheitern (Gartner 2025)</span>
              </li>
            </ul>
          </div>

          {/* Workflow */}
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-gold">WerkING Tools Workflow</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span>Deterministische Pipeline mit 70+ Schritten</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span>Reproduzierbar — gleicher Input, gleiches Ergebnis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span>Ingenieurs-Siegel: fachlich geprueft und zertifiziert</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">✓</span>
                <span>Human-in-the-Loop: Experte prueft und gibt frei</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-white/40 text-sm mt-8">
          &laquo;Ein Chatbot improvisiert. Ein Workflow hat einen Plan.&raquo;
        </p>
      </div>
    </section>
  )
}
