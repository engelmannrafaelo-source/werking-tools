export default function ProblemSection() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-line" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              40-60% der Arbeitszeit geht fuer Dokumentation drauf
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              Ingenieure verbringen mehr Zeit mit Schreiben als mit Engineering.
              Gutachten, Berichte, Protokolle — immer dieselben Formate,
              immer dieselben Normen, immer Copy-Paste.
            </p>
            <p className="text-text-body leading-relaxed">
              Das aendert sich jetzt.
            </p>
          </div>
          <div className="bg-navy rounded-2xl p-8 text-white">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-heading font-bold text-gold">5h</span>
                <div>
                  <p className="text-sm text-white/50">Bisher</p>
                  <p className="text-white/80">Gutachten manuell erstellen</p>
                </div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="flex items-center gap-4">
                <span className="text-3xl font-heading font-bold text-gold">20min</span>
                <div>
                  <p className="text-sm text-white/50">Mit WerkING Tools</p>
                  <p className="text-white/80">Upload, pruefen, fertig</p>
                </div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="flex items-center gap-4">
                <span className="text-3xl font-heading font-bold text-green">90%</span>
                <div>
                  <p className="text-sm text-white/50">Zeitersparnis</p>
                  <p className="text-white/80">Mehr Engineering, weniger Schreiben</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
