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
  description: 'Deterministische Engineering-Workflows. Reproduzierbar, kontrolliert, engineering-fokussiert. Modell-agnostisch, EU-gehostet.',
  openGraph: {
    title: 'WerkingFlow — KI-Plattform für Engineering-Workflows',
    description: 'Deterministische Engineering-Workflows. Reproduzierbar, kontrolliert, modell-agnostisch.',
  },
  alternates: { canonical: '/platform' },
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
            Das Wertvollste an Ingenieurarbeit ist das Urteil des Fachmanns — die Entscheidung, die Verantwortung, die Unterschrift. Doch genau diese Zeit versinkt in wiederkehrender Dokumentation und Routineprozessen. Und das Know-how dahinter steckt in einzelnen Köpfen: schwer weiterzugeben, und weg, sobald jemand das Unternehmen verlässt.
          </p>
          <p className="text-text-body leading-relaxed">
            Was es braucht, ist kein Werkzeug, das improvisiert, sondern Engineering-Workflows mit Handschlagsqualität — definierte Prozesse, in denen das Fachwissen fest verankert ist. Gleicher Input, gleiche Qualität: nachvollziehbar, prüfbar und freigegeben vom Ingenieur.
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
            Die existierenden Produkte (WerkING Report, Energy, Noise) zeigen, dass der Ansatz funktioniert. WerkingFlow macht diese Architektur zur offenen Plattform — für fertige Workflows und eigene Prozesse.
          </p>
        </div>
      </section>

      {/* Studio-Modell — So entsteht ein Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">So entsteht ein WerkING Workflow</h2>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">
              WerkING Tools ist ein Studio: Jeder Workflow wird selbst gebaut — mit dem Domänen-Know-how erfahrener Fachpartner und fachlich geprüft, bevor er produktiv läuft.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Fachwissen', 'Ein Fachpartner — Ingenieurbüro oder Sachverständiger — bringt das Domänen-Know-how ein: Welche Schritte, welche Normen, welche Prüfkriterien gelten?'],
              ['Entwicklung', 'WerkING entwickelt daraus einen deterministischen Workflow — Phase für Phase, mit validierten Datenquellen statt freier KI-Improvisation.'],
              ['Prüfung & Freigabe', 'Jeder Workflow wird fachlich geprüft und freigegeben, bevor er läuft. Handschlagsqualität — reproduzierbar wie ein Fertigungsprozess.'],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-black/5 bg-bg-light p-6">
                <span className="w-9 h-9 rounded-full bg-gold/15 text-gold font-bold flex items-center justify-center mb-4">{i + 1}</span>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{t}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemeinsam entwickeln — WerkING Partner-Plattform */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Gemeinsam entwickeln — die WerkING Partner-Plattform</h2>
            <p className="text-white/55 mt-3 max-w-2xl mx-auto">
              Sie haben einen eigenen Engineering-Prozess oder bestehende Software, die mit soll? Auf der Partner-Plattform arbeiten Ihr Team und wir parallel — in einer gehosteten Umgebung, jede Änderung über Git nachvollziehbar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border-2 border-gold/30 bg-navy-mid p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">Co-Entwicklung</span>
              <h3 className="font-heading text-lg font-semibold text-white mt-1 mb-2">Workflow gemeinsam entwickeln</h3>
              <p className="text-sm text-white/60 leading-relaxed">Sie liefern das Fachwissen, wir die Engine — geprüft und freigegeben, bevor er läuft. Entweder exklusiv für Ihren eigenen Betrieb — oder als Fachpartner gemeinsam vermarktet, mit Beteiligung am Erfolg.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-navy-mid p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">Entwicklungsunterstützung</span>
              <h3 className="font-heading text-lg font-semibold text-white mt-1 mb-2">Entwicklungsunterstützung durch den Profi</h3>
              <p className="text-sm text-white/60 leading-relaxed">Beliebige Engineering-Software übernehmen, dokumentieren, stabilisieren, weiterentwickeln — flexibel im Stundenmodell. Ihre Mitarbeiter arbeiten KI-gestützt mit, wir auditieren und geben frei.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['Gehostete Umgebung', 'Zusammenarbeit über Git-Repository', 'Beidseitige Wartung', 'Keine interne IT-Integration nötig'].map((f) => (
              <span key={f} className="text-xs font-medium text-white/70 border border-white/15 rounded-full px-3 py-1.5 bg-white/5">{f}</span>
            ))}
          </div>
          <p className="text-center text-sm text-white/45 mt-8 max-w-2xl mx-auto">
            Flexibles Stundenmodell, Priorisierung gemeinsam pro Block — Sie sehen den aktuellen Stand jederzeit im Repository.
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
              <h3 className="font-heading text-base font-semibold text-navy mb-2">WerkING Noise</h3>
              <p className="text-sm text-text-muted">KI-gestützte Schallgutachten — kartenbasiert, Berechnung nach CNOSSOS-EU, ÖNORM-konform. Die KI formuliert den Gutachtentext, der Sachverständige prüft.</p>
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
