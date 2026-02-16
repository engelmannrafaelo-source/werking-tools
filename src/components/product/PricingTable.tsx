import Link from 'next/link'
import { type PricingPlan } from '@/lib/products'

type PricingTableProps = {
  model: 'subscription' | 'per-report' | 'custom'
  plans: PricingPlan[]
  ctaHref?: string
}

export default function PricingTable({ model, plans, ctaHref }: PricingTableProps) {
  if (plans.length === 0) return null

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">
            {model === 'subscription' ? 'Voraussichtliche Preise' : 'Preise pro Bericht'}
          </h2>
        </div>

        <div className={`grid gap-6 ${plans.length === 3 ? 'md:grid-cols-3' : plans.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'max-w-md mx-auto'}`}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-navy text-white shadow-2xl scale-[1.02] border-2 border-gold'
                  : 'bg-white text-navy border border-gray-200 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-xs font-bold rounded-full uppercase tracking-wider">
                  Empfohlen
                </div>
              )}

              <h3 className={`font-heading text-lg font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-navy'}`}>
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-gold' : 'text-navy'}`}>
                  &euro;{plan.price.toLocaleString('de-AT')}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-white/60' : 'text-text-muted'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-gold' : 'text-green'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-white/80' : 'text-text-body'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={ctaHref || '/kontakt/'}
                className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors no-underline ${
                  plan.highlighted
                    ? 'bg-gold text-navy hover:bg-gold-light'
                    : 'bg-navy text-white hover:bg-navy-mid'
                }`}
              >
                {model === 'subscription' ? 'Interesse melden' : 'Kontakt aufnehmen'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
