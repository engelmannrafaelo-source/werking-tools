import { SITE } from '@/lib/constants'

export default function CTA() {
  return (
    <section id="kontakt" className="py-24 bg-navy text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="gold-line-center" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Bereit fuer effizientere Dokumentation?
        </h2>
        <p className="text-white/60 text-lg mb-10">
          Testen Sie WerkING Tools unverbindlich. Erstes Gutachten kostenlos.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a
            href={`mailto:${SITE.email}`}
            className="bg-gold text-navy px-8 py-3 rounded-full font-semibold text-lg hover:bg-gold-light transition-colors no-underline"
          >
            Kontakt aufnehmen
          </a>
          <a
            href="https://gutachten-standalone.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold text-lg hover:border-gold hover:text-gold transition-colors no-underline"
          >
            Werking Report testen
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-white/50">
          <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors no-underline flex items-center gap-2">
            <span>✉</span> {SITE.email}
          </a>
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-colors no-underline flex items-center gap-2">
            <span>📞</span> {SITE.phone}
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors no-underline flex items-center gap-2">
            <span>💼</span> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
