export default function Foerderung() {
  return (
    <section id="foerderung" className="py-24 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="gold-line-center" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Bis zu 50% gefoerdert
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
          Digitalisierung wird in Oesterreich gefoerdert.
          Wir unterstuetzen Sie beim Antrag.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-4xl mb-4">🇦🇹</div>
            <h3 className="font-heading text-xl font-semibold mb-2 text-gold">KMU.DIGITAL</h3>
            <p className="text-sm text-white/60 mb-4">
              Bis zu 50% Foerderung fuer Digitalisierungsprojekte in KMU.
              Beratung und Umsetzung gefoerdert.
            </p>
            <p className="text-xs text-white/40">Oesterreichische Wirtschaftskammer</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-4xl mb-4">🇪🇺</div>
            <h3 className="font-heading text-xl font-semibold mb-2 text-gold">FFG Foerderung</h3>
            <p className="text-sm text-white/60 mb-4">
              Bis zu 100% Foerderung fuer F&amp;E-Projekte.
              Ideal fuer eigene Workflow-Entwicklung.
            </p>
            <p className="text-xs text-white/40">Oesterreichische Forschungsfoerderungsgesellschaft</p>
          </div>
        </div>
      </div>
    </section>
  )
}
