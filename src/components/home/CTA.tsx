import Link from 'next/link'
import { PRODUCTS } from '@/lib/products'

export default function CTA() {
  const reportUrl = PRODUCTS.report.appUrl

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="gold-line-center" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          WerkING Report kostenlos testen.
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Prozess statt Prompt. Erstellen Sie Ihren ersten Entwurf — kostenlos.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.4)] text-lg"
          >
            Jetzt testen
          </a>
          <Link
            href="/kontakt/"
            className="inline-block px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors no-underline text-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  )
}
