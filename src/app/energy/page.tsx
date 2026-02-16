import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProblemSection from '@/components/product/ProblemSection'
import ScreenshotShowcase from '@/components/product/ScreenshotShowcase'
import FeaturePillars from '@/components/product/FeaturePillars'
import LbnlShowcase from '@/components/product/LbnlShowcase'
import ProductCTA from '@/components/product/ProductCTA'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.energy

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.tagline,
}

export default function EnergyPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title={product.name}
        titleHtml={product.nameHtml}
        subtitle={product.tagline}
        status={{ status: product.status, label: product.statusLabel }}
      />

      {product.problem && <ProblemSection text={product.problem} />}

      {product.steps.length > 0 && <ScreenshotShowcase steps={product.steps} />}

      {product.pillars && product.pillars.length > 0 && (
        <FeaturePillars pillars={product.pillars} />
      )}

      {/* LBNL Chiller Plant — Beispiel-Analyse mit Downloads */}
      <LbnlShowcase />

      {/* Stats row */}
      {product.stats.length > 0 && (
        <section className="py-16 bg-navy-mid">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-8">
              {product.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">{s.value}</div>
                  <div className="text-sm text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-bg-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-text-muted">Preise werden nach Abschluss der Testphase veroffentlicht. Melden Sie Ihr Interesse — wir halten Sie auf dem Laufenden.</p>
        </div>
      </section>

      <ProductCTA
        headline={`${product.name} — Interesse?`}
        headlineHtml={`${product.nameHtml} — Interesse?`}
        buttonText="Interesse anmelden"
        buttonHref="/kontakt/"
      />
      <Footer />
    </>
  )
}
