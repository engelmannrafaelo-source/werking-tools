import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS, PRODUCT_ORDER, getStatusColor } from '@/lib/products'

export default function ProductGrid() {
  // Show report, energy, noise — not platform (gets its own mention)
  const visibleProducts = PRODUCT_ORDER.filter(k => k !== 'platform')

  return (
    <section id="produkte" className="py-24 bg-navy">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Tools für Ingenieure.</h2>
          <p className="text-white/50 mt-3 text-base">Spezialisierte Produkte — eine Vision.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {visibleProducts.map((key) => {
            const p = PRODUCTS[key]
            const isLinked = key !== 'report'
            const Wrapper = isLinked ? Link : 'div'
            const wrapperProps = isLinked
              ? { href: p.href, className: "group relative rounded-2xl overflow-hidden bg-navy-mid border border-white/10 hover:border-gold/30 transition-all duration-300 no-underline min-h-[240px] flex flex-col justify-end" }
              : { className: "group relative rounded-2xl overflow-hidden bg-navy-mid border border-white/10 min-h-[240px] flex flex-col justify-end" }
            return (
              <Wrapper
                key={key}
                {...wrapperProps as any}
              >
                {/* Screenshot background */}
                <div className="absolute inset-0">
                  <Image
                    src={p.screenshot}
                    alt={p.name}
                    fill
                    className="object-cover opacity-30 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-navy-mid/80 to-transparent" />
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${getStatusColor(p.status)}`}>
                    {p.statusLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    Werk<span className="brand-ing">ING</span>{p.name.replace('WerkING', '')}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-3">
                    {p.tagline}
                  </p>
                  {isLinked && (
                    <span className="text-xs text-gold font-medium group-hover:underline">
                      Mehr erfahren &rarr;
                    </span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>

        {/* WerkingFlow Vision — Premium Product */}
        <div className="mt-12">
          <Link
            href="/platform/"
            className="group block rounded-2xl overflow-hidden border-2 border-gold/30 hover:border-gold/60 transition-all duration-300 no-underline bg-gradient-to-br from-navy-mid via-navy to-navy-mid"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider">Die Plattform</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-1 group-hover:text-gold transition-colors">
                    <span className="brand-outline">Werk</span><span className="brand-ing">ING</span><span className="brand-outline">Flow</span>
                  </h3>
                  <p className="text-white/50 mt-1 text-sm">KI-Plattform · Co-Entwicklung · Entwicklungsunterstützung</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/50 bg-white/5 whitespace-nowrap">
                  In Entwicklung
                </span>
              </div>

              {/* Das Angebot */}
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-heading text-sm font-semibold text-gold mb-1">Fertige Workflows</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Report, Energy, Noise — sofort einsatzbereit, ingenieur-geprüft.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-heading text-sm font-semibold text-gold mb-1">Gemeinsam entwickeln</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Ihr eigener Workflow als Co-Entwicklung — exklusiv oder als Fachpartner vermarktet.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-heading text-sm font-semibold text-gold mb-1">Entwicklungsunterstützung</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Sie entwickeln selbst mit Claude Code — und holen sich Unterstützung vom Profi, wenn's drauf ankommt.</p>
                </div>
              </div>

              {/* Tagline */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/40">Eine Arbeitsplattform für Ihre KI-gestützten Ingenieur-Werkzeuge.</p>
                <span className="text-sm text-gold font-medium group-hover:underline">
                  Mehr erfahren &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
