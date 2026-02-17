import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProductCTA from '@/components/product/ProductCTA'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.safety

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: 'Automatisierte Gefährdungsbeurteilung aus Maschinendokumentation. Vision-AI analysiert Bilder, Schaltpläne und technische Daten.',
  openGraph: {
    title: `${product.name} — ${product.tagline}`,
    description: 'Automatisierte Gefährdungsbeurteilung aus Maschinendokumentation. Vision-AI analysiert Bilder und Schaltpläne.',
  },
  alternates: { canonical: '/safety' },
}

const phases = [
  {
    title: 'Dokumentation hochladen',
    desc: 'Betriebsanleitung als PDF hochladen. Vision-AI liest Bilder, Schaltpläne und technische Daten.',
  },
  {
    title: 'Komponenten erkennen',
    desc: 'Das System identifiziert Maschinenkomponenten, Antriebe, Steuerungen und Schutzeinrichtungen aus der Dokumentation.',
  },
  {
    title: 'Gefährdungen bewerten',
    desc: 'Gefährdungen werden automatisch nach CE-Schema kategorisiert und mit Risikobewertung versehen. Jede Bewertung ist begründet.',
  },
  {
    title: 'Risikoanalyse exportieren',
    desc: 'Vollständige Gefährdungsbeurteilung als strukturiertes Dokument — mit Massnahmen und Nachweiskette.',
  },
]

export default function SafetyPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title={product.name}
        titleHtml={product.nameHtml}
        subtitle={product.tagline}
        status={{ status: product.status, label: product.statusLabel }}
      />

      {/* Screenshot */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(222,193,94,0.12)]">
            <Image
              src="/images/products/werking-safety.png"
              alt="WerkING Safety — Gefährdungsbeurteilung"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Phasen als Text */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">4 Phasen — von der Doku zur Risikoanalyse</h2>
          </div>
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 text-gold text-sm font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-1">{phase.title}</h3>
                  <p className="text-text-muted leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
