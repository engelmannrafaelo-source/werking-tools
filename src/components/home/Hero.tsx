import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image placeholder — replace with AI-generated hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-navy-light" />
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_30%_50%,_#DEC15E_0%,_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <div className="gold-line mb-6" />

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
            AI-Workflows mit<br />
            <span className="text-gold">Handschlagsqualität.</span>
          </h1>

          <p className="font-heading text-lg md:text-xl text-white/70 mb-3 tracking-wide">
            Werkzeug, kein Spielzeug.
          </p>

          <p className="text-base text-white/50 mb-10">
            Von Ingenieuren. Für Ingenieure.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/report/"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.4)] text-base"
            >
              WerkING Report testen
            </Link>
            <a
              href="#produkte"
              className="inline-block px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors no-underline text-base"
            >
              Alle Produkte
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gold rounded-full mt-2" style={{ animation: 'scrollPulse 2s infinite' }} />
        </div>
      </div>
    </section>
  )
}
