import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="gold-line-center" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Werk<span className="brand-ing">ING</span> Tools — jetzt im Early Access.
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Workflow statt Prompt. Reproduzierbare Prüfberichte, Energie- und Schallgutachten.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/kontakt/"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.4)] text-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  )
}
