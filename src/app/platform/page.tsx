import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import FeaturePillars from '@/components/product/FeaturePillars'
import ProductCTA from '@/components/product/ProductCTA'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.platform

export const metadata: Metadata = {
  title: 'WerkingFlow — KI-Plattform für Engineering-Workflows',
  description: 'Deterministische Engineering-Workflows. Reproduzierbar, kontrolliert, engineering-fokussiert.',
}

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="WerkINGFlow"
        titleHtml='<span class="brand-outline">Werk</span><span class="brand-ing">ING</span><span class="brand-outline">Flow</span>'
        subtitle="KI-Plattform für automatisierte Engineering-Workflows. Reproduzierbar. Kontrolliert."
        status={{ status: 'development', label: 'In Entwicklung' }}
      />

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="gold-line" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">Das Problem</h2>
          <p className="text-lg text-text-body leading-relaxed mb-8">
            Ingenieure verbringen 40-60% ihrer Zeit mit Dokumentation und wiederkehrenden Prozessen. Generische KI-Chatbots helfen nicht — sie erzeugen jedes Mal andere Ergebnisse und verstehen keine Fachprozesse.
          </p>
          <p className="text-text-body leading-relaxed">
            Was fehlt: strukturierte Workflows, die reproduzierbare Ergebnisse liefern. Nicht &quot;frag die KI&quot;, sondern definierte Prozesse mit klaren Schritten, Qualitätsprüfung und nachvollziehbaren Ergebnissen.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">Die Vision</h2>
          <p className="text-lg text-text-body leading-relaxed mb-4">
            Eine Plattform, auf der Engineering-Workflows laufen. Jedes Tool ist ein deterministischer Prozess — gleicher Input, gleiche Qualität. Die KI erstellt den Entwurf, der Ingenieur prüft und gibt frei.
          </p>
          <p className="text-text-muted leading-relaxed">
            Die existierenden Produkte (WerkING Report, Energy, Safety, Noise) zeigen, dass der Ansatz funktioniert. WerkingFlow macht diese Architektur zur offenen Plattform — für fertige Workflows und eigene Prozesse.
          </p>
        </div>
      </section>

      {/* Pillars */}
      {product.pillars && <FeaturePillars pillars={product.pillars} />}

      {/* Stats */}
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

      {/* Proven Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Validierte Technologie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-bg-light">
              <h3 className="font-heading text-base font-semibold text-navy mb-2">WerkING Report</h3>
              <p className="text-sm text-text-muted">Gutachtenerstellung mit eigenen Dokumenttypen, Stilerkennung und KI-Editor. Marktstart 2026.</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-light">
              <h3 className="font-heading text-base font-semibold text-navy mb-2">WerkING Energy</h3>
              <p className="text-sm text-text-muted">8-Phasen-Pipeline mit selbstkorrigierenden Schleifen. Aus Rohdaten zum fertigen Energiebericht in ~40 Minuten.</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-light">
              <h3 className="font-heading text-base font-semibold text-navy mb-2">WerkING Safety</h3>
              <p className="text-sm text-text-muted">Automatisierte Gefährdungsbeurteilung aus Maschinendokumentation. Vision-AI erkennt Komponenten aus Bildern und Schaltplänen.</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-light">
              <h3 className="font-heading text-base font-semibold text-navy mb-2">WerkING Noise</h3>
              <p className="text-sm text-text-muted">Lärmberechnung direkt auf der Karte. CNOSSOS-EU validiert, OpenStreetMap-basierter Editor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-text-muted">
            In Entwicklung. Geplanter Start: 2026. FFG-Forschungsprojekt in Vorbereitung.
          </p>
        </div>
      </section>

      <ProductCTA
        headline="Updates erhalten?"
        buttonText="Interesse anmelden"
        buttonHref="/kontakt/"
      />
      <Footer />
    </>
  )
}
