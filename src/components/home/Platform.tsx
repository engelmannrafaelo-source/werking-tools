export default function Platform() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Drei Ebenen. Ein Marketplace.
          </h2>
          <p className="text-text-muted text-lg">
            Workflows nutzen. Eigene bauen. An andere verkaufen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-bg-light rounded-2xl p-8 text-center border border-transparent hover:border-gold/20 transition-colors">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-heading text-xl font-semibold text-navy mb-3">Nutzen</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Fertige Workflows starten. Daten hochladen, pruefen, fertig.
              Kein Setup, keine Installation.
            </p>
          </div>

          <div className="bg-bg-light rounded-2xl p-8 text-center border border-transparent hover:border-gold/20 transition-colors">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="font-heading text-xl font-semibold text-navy mb-3">Bauen</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Eigene Engineering-Workflows entwickeln.
              Ihr Know-how bleibt in der Firma — als produktive Software.
            </p>
          </div>

          <div className="bg-bg-light rounded-2xl p-8 text-center border border-transparent hover:border-gold/20 transition-colors">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="font-heading text-xl font-semibold text-navy mb-3">Verkaufen</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Workflows im Marketplace anbieten.
              70% des Umsatzes bleiben beim Entwickler.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
