import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Preise — WerkING Tools',
  description: 'Transparente Preise. Keine versteckten Kosten.',
}

export default function PreisePage() {
  const report = PRODUCTS.report
  const energy = PRODUCTS.energy

  return (
    <>
      <Navbar />
      <PageHeader
        title="Preise"
        subtitle="Transparente Preise. Keine versteckten Kosten."
      />

      {/* Report Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl font-bold text-navy mb-2">{report.name}</h2>
            <p className="text-text-muted">Voraussichtliche Preise — monatliches Abo, jederzeit kündbar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {report.pricing!.plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all ${
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
                <h3 className={`font-heading text-lg font-semibold mb-2 ${plan.highlighted ? 'text-white' : ''}`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-gold' : ''}`}>&euro;{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.highlighted ? 'text-white/60' : 'text-text-muted'}`}>/{plan.period}</span>
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
                  href="/kontakt/"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors no-underline ${
                    plan.highlighted
                      ? 'bg-gold text-navy hover:bg-gold-light'
                      : 'bg-navy text-white hover:bg-navy-mid'
                  }`}
                >
                  Interesse melden
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy — Alpha Testing */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl font-bold text-navy mb-2">{energy.name}</h2>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-gold/20 text-gold border border-gold/30 mb-4">
              {energy.statusLabel}
            </span>
            <p className="text-text-muted max-w-lg mx-auto">
              {energy.tagline} Preise werden nach Abschluss der Testphase veröffentlicht.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/energy/"
              className="inline-block px-6 py-3 bg-navy text-white rounded-lg font-semibold text-sm hover:bg-navy-mid transition-colors no-underline mr-3"
            >
              Mehr erfahren
            </Link>
            <Link
              href="/kontakt/"
              className="inline-block px-6 py-3 bg-white text-navy border border-gray-200 rounded-lg font-semibold text-sm hover:shadow-lg transition-all no-underline"
            >
              Interesse melden
            </Link>
          </div>
        </div>
      </section>

      {/* Safety & Noise */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-xl font-bold text-navy mb-4">
            Werk<span className="brand-ing">ING</span> Safety &amp; Werk<span className="brand-ing">ING</span> Noise
          </h2>
          <p className="text-text-muted mb-6">
            Beide Produkte sind in Entwicklung. Preise werden nach Abschluss der Testphase veröffentlicht.
          </p>
          <Link
            href="/kontakt/"
            className="inline-block px-6 py-3 bg-navy text-white rounded-lg font-semibold text-sm hover:bg-navy-mid transition-colors no-underline"
          >
            Interesse anmelden
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
