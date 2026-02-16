import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProblemSection from '@/components/product/ProblemSection'
import ScreenshotShowcase from '@/components/product/ScreenshotShowcase'
import FeatureGrid from '@/components/product/FeatureGrid'
import FeaturePillars from '@/components/product/FeaturePillars'
import PricingTable from '@/components/product/PricingTable'
import ProductCTA from '@/components/product/ProductCTA'
import { type Product } from '@/lib/products'

export default function ProductPage({ product }: { product: Product }) {
  const isLive = product.status === 'live' && !!product.appUrl
  const ctaHref = product.appUrl || '/kontakt/'
  const ctaText = isLive ? 'Jetzt testen' : 'Interesse anmelden'

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

      {product.pillars && product.pillars.length > 0
        ? <FeaturePillars pillars={product.pillars} />
        : product.features.length > 0 && <FeatureGrid features={product.features} />
      }

      {/* Stats row */}
      {product.stats.length > 0 && (
        <section className="py-16 bg-navy-mid">
          <div className="max-w-4xl mx-auto px-6">
            <div className={`grid grid-cols-${Math.min(product.stats.length, 4)} gap-8`}>
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

      {product.pricing && (
        <PricingTable
          model={product.pricing.model}
          plans={product.pricing.plans}
          ctaHref={ctaHref}
        />
      )}

      {!product.pricing && product.status !== 'development' && (
        <section className="py-16 bg-bg-light">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-text-muted">Preise werden nach Abschluss der Testphase veröffentlicht. Melden Sie Ihr Interesse — wir halten Sie auf dem Laufenden.</p>
          </div>
        </section>
      )}

      <ProductCTA
        headline={`${product.name} ${isLive ? 'testen' : '— Interesse?'}`}
        headlineHtml={`${product.nameHtml} ${isLive ? 'testen' : '— Interesse?'}`}
        buttonText={ctaText}
        buttonHref={ctaHref}
      />
      <Footer />
    </>
  )
}
