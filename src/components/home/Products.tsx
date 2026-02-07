import { PRODUCTS } from '@/lib/constants'

const badgeStyles = {
  live: 'bg-green/20 text-green',
  soon: 'bg-gold/20 text-gold',
} as const

export default function Products() {
  return (
    <section id="produkte" className="py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Unsere Tools
          </h2>
          <p className="text-white/60 text-lg">
            Spezialisierte KI-Pipelines fuer technische Dokumentation.
            Jedes Tool loest ein konkretes Problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{product.icon}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${badgeStyles[product.badge]}`}>
                  {product.badge === 'live' ? 'Live' : 'Coming Soon'}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">{product.desc}</p>
              <div className="text-xs text-gold mb-3">{product.price}</div>
              {product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold hover:text-gold-light transition-colors no-underline"
                >
                  App oeffnen &rarr;
                </a>
              ) : (
                <span className="text-sm text-white/30">Bald verfuegbar</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
