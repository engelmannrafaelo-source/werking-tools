import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Early Access — Kostenlos testen',
  description: 'WerkING Tools kostenlos als Beta-Tester ausprobieren. Kein Abo, keine Kreditkarte. Feedback geben und mitgestalten.',
  openGraph: {
    title: 'Early Access — WerkING Tools kostenlos testen',
    description: 'Jetzt als Beta-Tester registrieren. Kein Abo, keine Kreditkarte.',
  },
  alternates: { canonical: '/early-access' },
}

const STATUS_CONFIG: Record<string, { color: string; label: string }> = {
  live: { color: 'bg-green-500/20 text-green-400 border-green-500/30', label: 'Live Beta' },
  beta: { color: 'bg-gold/20 text-gold border-gold/30', label: 'In Entwicklung' },
  development: { color: 'bg-white/10 text-white/50 border-white/20', label: 'In Entwicklung' },
}

export default function EarlyAccessPage() {
  const products = [
    { ...PRODUCTS.report, statusOverride: 'Live Beta' },
    PRODUCTS.energy,
    PRODUCTS.safety,
    PRODUCTS.noise,
  ]

  return (
    <>
      <Navbar />
      <PageHeader
        title="Early Access"
        subtitle="Testen Sie WerkING Tools kostenlos. Ihr Feedback formt das Produkt."
      />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
            Jetzt als Beta-Tester registrieren
          </h2>
          <p className="text-text-body text-lg mb-4">
            WerkING Report ist live und bereit zum Testen. Registrieren Sie sich kostenlos,
            wir schalten Ihren Zugang frei und Sie können alle Funktionen ausprobieren.
          </p>
          <p className="text-text-muted mb-8">
            Kein Abo, keine Kreditkarte. Einfach testen und Feedback geben.
          </p>

          <a
            href="https://werking-report.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.4)] text-lg"
          >
            Als Beta-Tester registrieren
          </a>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl font-bold text-navy mb-2">Produkte im Überblick</h2>
            <p className="text-text-muted">4 spezialisierte Workflows für Ingenieure.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => {
              const cfg = STATUS_CONFIG[product.status] || STATUS_CONFIG.development
              const label = 'statusOverride' in product ? (product as typeof product & { statusOverride: string }).statusOverride : cfg.label

              return (
                <div key={product.slug} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-heading text-xl font-bold text-navy">{product.name}</h3>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${cfg.color}`}>
                      {label}
                    </span>
                  </div>
                  <p className="text-text-body mb-6">{product.tagline}</p>
                  <Link
                    href={product.href}
                    className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors no-underline"
                  >
                    Mehr erfahren &rarr;
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Beta Testing Works */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl font-bold text-navy mb-2">So funktioniert der Beta-Test</h2>
          </div>

          <div className="space-y-8">
            {[
              { step: '1', title: 'Registrieren', desc: 'Account erstellen mit Name und E-Mail. Kein Einladungscode nötig.' },
              { step: '2', title: 'Freischaltung', desc: 'Wir prüfen Ihre Registrierung und schalten Ihren Zugang frei. Sie erhalten eine E-Mail.' },
              { step: '3', title: 'Testen & Feedback', desc: 'Alle Funktionen stehen Ihnen zur Verfügung. Ihr Feedback hilft uns, das Produkt zu verbessern.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-1">{item.title}</h3>
                  <p className="text-text-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">
            Bereit zum Testen?
          </h2>
          <p className="text-white/60 mb-8">
            Registrieren Sie sich jetzt und gehören Sie zu den ersten Nutzern.
          </p>
          <a
            href="https://werking-report.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.4)] text-lg"
          >
            Jetzt registrieren
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
