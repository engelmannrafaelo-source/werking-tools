export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-mid to-navy" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#DEC15E_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Werk<span className="brand-ing">ING</span> Tools
        </h1>
        <p className="text-xl md:text-2xl text-gold font-heading font-medium mb-4">
          AI-Workflows mit Handschlagsqualitaet
        </p>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Jeder Workflow ist fachlich geprueft und freigegeben.
          Workflows nutzen, eigene bauen, oder an andere verkaufen.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#produkte"
            className="bg-gold text-navy px-8 py-3 rounded-full font-semibold text-lg hover:bg-gold-light transition-colors no-underline"
          >
            Produkte entdecken
          </a>
          <a
            href="#kontakt"
            className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold text-lg hover:border-gold hover:text-gold transition-colors no-underline"
          >
            Demo anfragen
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2" style={{ animation: 'scrollPulse 2s infinite' }} />
        </div>
      </div>
    </section>
  )
}
