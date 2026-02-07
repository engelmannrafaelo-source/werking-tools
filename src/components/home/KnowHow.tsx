export default function KnowHow() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-line" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Know-how bleibt im Unternehmen
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              Ihre Engineering-Expertise gehoert Ihnen.
              Bauen Sie eigene Workflows, die Ihr Fachwissen als produktive Software abbilden.
            </p>
            <p className="text-text-body leading-relaxed mb-4">
              Kein Vendor-Lock-in. Modell-agnostisch — heute Claude, morgen ein anderes Modell.
              Die Workflows gehoeren Ihnen.
            </p>
            <p className="text-text-body leading-relaxed">
              Und wenn Ihre Workflows gut genug sind: Verkaufen Sie sie
              im Marketplace an andere Ingenieure.{' '}
              <span className="text-gold font-semibold">70% des Umsatzes bleiben bei Ihnen.</span>
            </p>
          </div>
          <div className="bg-navy rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold">🔐</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Ihre Daten</h4>
                  <p className="text-white/50 text-sm">Verarbeitung auf EU-Servern. Nichts wird gespeichert oder weiterverwendet.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold">🔧</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Ihre Workflows</h4>
                  <p className="text-white/50 text-sm">Ihr Fachwissen als Software. Unter Ihrer Kontrolle, nicht unserer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold">🤖</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Ihre KI-Wahl</h4>
                  <p className="text-white/50 text-sm">Modell-agnostisch. Wechseln Sie das Modell, ohne Workflows umzubauen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
