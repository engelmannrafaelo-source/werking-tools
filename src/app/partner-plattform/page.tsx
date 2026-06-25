import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProductCTA from '@/components/product/ProductCTA'

export const metadata: Metadata = {
  title: 'WerkING Partner-Plattform — Engineering-Workflows gemeinsam entwickeln',
  description:
    'Sie kennen einen Engineering-Prozess, der sich wiederholt? Auf der WerkING Partner-Plattform entwickeln wir daraus gemeinsam einen Workflow — von der Idee zum geprüften Produkt auf WerkingFlow. Sie bringen das Fachwissen, wir die Engine.',
  openGraph: {
    title: 'WerkING Partner-Plattform — Engineering-Workflows gemeinsam entwickeln',
    description:
      'Aus Ihrem Fachprozess wird ein deterministischer, geprüfter Workflow auf WerkingFlow. Sie bringen das Fachwissen, wir die Engine.',
  },
  alternates: { canonical: '/partner-plattform' },
}

// Von der Idee zum Workflow (Quelle: VISION.md Studio-Modell Stufe 2, BUSINESSPLAN-2026.md Fachpartner-Modell)
const SCHRITTE = [
  {
    title: 'Ihre Idee',
    desc: 'Sie kennen einen Engineering-Prozess, der sich wiederholt und sich lohnt zu automatisieren. Das ist der Ausgangspunkt.',
  },
  {
    title: 'Sie werden Product Owner',
    desc: 'Sie bringen das Domänen-Wissen ein und behalten die fachliche Hoheit über den Workflow — wie unsere Fachpartner für Energy, Report und Safety.',
  },
  {
    title: 'Gemeinsam entwickeln',
    desc: 'Wir bauen daraus einen deterministischen Workflow — Phase für Phase, mit validierten Datenquellen statt freier KI-Improvisation. Sie arbeiten KI-gestützt mit, in derselben Umgebung.',
  },
  {
    title: 'Produkt & Beteiligung',
    desc: 'Der fertige Workflow wird ein Produkt auf WerkingFlow — exklusiv für Ihren Betrieb oder gemeinsam vermarktet, mit Beteiligung am Erfolg.',
  },
] as const

// So funktioniert die Zusammenarbeit (Quelle: PARTNER-CUI-PLAN.md)
const MECHANIK = [
  {
    title: 'Browser-Login, kein Setup',
    desc: 'Ein Link, einloggen, loslegen — kein SSH, kein Terminal, keine interne IT-Integration nötig.',
  },
  {
    title: 'Isolierte Zugänge',
    desc: 'Jede Person arbeitet in ihrem eigenen, abgegrenzten Zugang — auf denselben Repositories.',
  },
  {
    title: 'Git-Branches & Ticket-System',
    desc: 'Alle Änderungen laufen über Git-Branches, Aufgaben werden über ein integriertes Ticket-System koordiniert.',
  },
  {
    title: 'KI-gestützt mitarbeiten',
    desc: 'Sie und Ihre Mitarbeiter entwickeln KI-gestützt mit — in derselben Umgebung wie wir, mit identischem Werkzeug-Stand.',
  },
] as const

export default function PartnerPlattformPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="WerkING Partner-Plattform"
        subtitle="Hier entwickeln Fachpartner gemeinsam mit uns ihre Engineering-Workflows — von der Idee zum geprüften, einsatzbereiten Produkt."
        status={{ status: 'live', label: 'Produktiv im Einsatz' }}
      />

      {/* Intro + Screenshot */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="gold-line-center" />
          <p className="text-lg text-text-body leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Eine gehostete Arbeitsumgebung, in der Fachpartner und das WerkING-Team parallel an einem
            Workflow entwickeln — über den Browser, jede Änderung über Git nachvollziehbar. Klassische
            Koordinations-Aufwände wie Abstimmungs-Telefonate, E-Mail-Verkehr oder das wiederholte
            Erklären von Code-Kontext entfallen weitgehend.
          </p>

          {/* Screenshot im Browser-Rahmen */}
          <div className="rounded-xl overflow-hidden border border-black/10 shadow-2xl bg-navy-mid max-w-5xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-navy border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-white/40 font-mono">partner.werking.tools</span>
            </div>
            <Image
              src="/images/products/partner-plattform.webp"
              alt="WerkING Partner-Plattform — gehostete Arbeitsumgebung mit Workflow Explorer, Tool Hub, Chat und Live-Updates"
              width={1680}
              height={1097}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Von der Idee zum Workflow */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Von der Idee zum Workflow</h2>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">
              Hat jemand in Ihrem Fachgebiet eine gute Idee, finden wir gemeinsam den Weg zum fertigen
              Workflow — und entwickeln das Modell zusammen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SCHRITTE.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                <span className="w-9 h-9 rounded-full bg-gold/15 text-gold font-bold flex items-center justify-center mb-4">{i + 1}</span>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* So funktioniert die Zusammenarbeit */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">So funktioniert die Zusammenarbeit</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {MECHANIK.map((m) => (
              <div key={m.title} className="p-6 rounded-2xl border border-white/10 bg-navy-mid">
                <h3 className="font-heading text-base font-semibold text-white mb-2">{m.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA
        headline="Eine Idee für einen Engineering-Workflow?"
        buttonText="Idee besprechen"
        buttonHref="/kontakt/"
      />

      {/* Hinweis: Entwicklungsunterstützung für bestehende Software — bewusst klein, kein Schwerpunkt */}
      <section className="py-10 bg-bg-light border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-muted/80 leading-relaxed text-center">
            Grundsätzlich lässt sich auf der Plattform auch bestehende Engineering-Software übernehmen,
            stabilisieren und weiterentwickeln. Unser Fokus liegt aber auf der gemeinsamen
            Workflow-Entwicklung — skalierbare Produkte, die auf WerkingFlow laufen.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
