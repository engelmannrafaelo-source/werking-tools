export default function AboutFounder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bio Card */}
          <div className="bg-bg-light rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Dr. Rafael Engelmann</h3>
                <p className="text-sm text-text-muted">Gruender, WerkING Tools</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-text-body">
              <div className="flex items-center gap-3">
                <span className="text-gold">🎓</span>
                <span>Dr. tech. Maschinenbau (TU Wien) — 5 Publikationen, 1 Patent</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold">🛡️</span>
                <span>Ziviltechniker fuer Maschinenbau — befugter Gutachter</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold">💻</span>
                <span>Fullstack Developer — TypeScript, React, Python, FastAPI</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold">🧠</span>
                <span>KI-Integration — Claude API, deterministische Pipelines</span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div>
            <div className="gold-line" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Ueber den Gruender
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              Mein Weg fuehrte von der Aeroakustik-Forschung an der TU Wien ueber
              klassische Ingenieurprojekte zur Softwareentwicklung.
            </p>
            <p className="text-text-body leading-relaxed mb-4">
              Als Ziviltechniker habe ich taeglich gesehen, wie viel Zeit mit
              repetitiven Excel-Workflows, manuellen Berechnungen und Copy-Paste
              in Berichten draufgeht.
            </p>
            <p className="text-text-body leading-relaxed">
              Heute kombiniere ich beides: Ich verstehe Engineering-Prozesse
              bis ins Detail — und kann sie automatisieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
