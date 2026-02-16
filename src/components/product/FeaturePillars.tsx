import { type ProductPillar } from '@/lib/products'

const PILLAR_ICONS = [
  // Versteht — Lupe/Recherche
  <svg key="understand" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  // Lernt — Stift/Stil
  <svg key="learn" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>,
  // Arbeitet — Mikrofon/Kamera
  <svg key="work" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>,
]

export default function FeaturePillars({ pillars }: { pillars: ProductPillar[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">
            Intelligenz in jedem Schritt
          </h2>
          <p className="text-text-muted mt-3 text-base max-w-2xl mx-auto">
            Kein Tool mit KI-Button. Ein System, das Ihr Fachgebiet versteht, Ihren Stil lernt und arbeitet wie Sie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border-2 border-gray-100 hover:border-gold/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                {PILLAR_ICONS[i]}
              </div>

              {/* Title + Description */}
              <h3 className="font-heading text-lg font-bold text-navy mb-2">
                {pillar.title}
              </h3>
              <p className="text-text-body text-sm leading-relaxed mb-5">
                {pillar.desc}
              </p>

              {/* Capabilities */}
              <ul className="space-y-2.5">
                {pillar.capabilities.map((cap, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
