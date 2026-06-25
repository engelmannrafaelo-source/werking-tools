import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProductCTA from '@/components/product/ProductCTA'

export const metadata: Metadata = {
  title: 'WerkING Partner-Plattform — gemeinsam Software entwickeln',
  description:
    'Gehostete Arbeitsumgebung für Co-Development: Ihr Team und WerkING arbeiten parallel an einer Codebasis. Entwicklungsunterstützung für beliebige Apps und gemeinsame Workflow-Entwicklung — über den Browser, ohne Setup.',
  openGraph: {
    title: 'WerkING Partner-Plattform — gemeinsam Software entwickeln',
    description:
      'Gehostete Arbeitsumgebung für Co-Development: Ihr Team und WerkING arbeiten parallel an einer Codebasis — über den Browser, ohne Setup.',
  },
  alternates: { canonical: '/partner-plattform' },
}

// Typische Leistungen (Quelle: Stoller-Angebot AN-26102)
const LEISTUNGEN = [
  {
    title: 'Bestandsaufnahme & Dokumentation',
    desc: 'Architektur-Übersicht, Setup- und Deployment-Anleitungen, Domänen-Glossar und eine strukturierte Risiko-Übersicht — damit der Stand der Software für alle nachvollziehbar wird.',
  },
  {
    title: 'Code-Stabilisierung & Risiko-Bereinigung',
    desc: 'Beseitigung hartcodierter Tokens und API-Schlüssel, konfigurierbare Endpoints, Auth-Härtung der Backend-API und aktualisierte Dependencies.',
  },
  {
    title: 'Test-Automatisierung & CI-Pipeline',
    desc: 'Unit- und Integrationstests für die produktiven Repositories, automatische Build- und Test-Läufe über eine CI-Pipeline.',
  },
  {
    title: 'Refactoring & Modernisierung',
    desc: 'Strukturelle Verbesserungen, Reduktion von Redundanzen, sauberere Modul-Trennung — priorisiert nach Risikobeitrag und Wartbarkeit.',
  },
  {
    title: 'Migration & Hosting',
    desc: 'Backend-Server-Migration auf einen wartbaren Host — wo möglich ohne Eingriff in bestehende Clients, etwa per DNS-Switch.',
  },
  {
    title: 'Laufende Pflege & Erweiterungen',
    desc: 'Bugfixes, kleinere Erweiterungen und Anpassungen nach Bedarf — Reaktion auf die konkreten Anforderungen Ihres Teams.',
  },
] as const

// So funktioniert die Zusammenarbeit (Quelle: PARTNER-CUI-PLAN.md, Stoller-Angebot)
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
    title: 'Mitarbeiter-Chatbot',
    desc: 'Rückfragen zum Code beantwortet der eingebaute Chatbot — wiederholtes Erklären von Kontext entfällt.',
  },
  {
    title: 'KI-gestützt mitarbeiten',
    desc: 'Ihre Mitarbeiter entwickeln eigenständig mit KI-Unterstützung in derselben Umgebung wie wir.',
  },
  {
    title: 'Audit vor jedem Merge',
    desc: 'Wir auditieren und prüfen die Änderungen, bevor sie in den Hauptzweig übernommen werden.',
  },
] as const

export default function PartnerPlattformPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="WerkING Partner-Plattform"
        subtitle="Eine gehostete Arbeitsumgebung, in der Ihr Team und WerkING parallel an einer Codebasis entwickeln — über den Browser, jede Änderung über Git nachvollziehbar."
        status={{ status: 'live', label: 'Produktiv im Einsatz' }}
      />

      {/* Was ist die Partner-Plattform — Intro + Screenshot */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="gold-line-center" />
          <p className="text-lg text-text-body leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Mehrere Personen — Ihre Mitarbeiter gemeinsam mit Rafael Engelmann — arbeiten parallel an
            derselben Software. Klassische Koordinations-Aufwände wie Abstimmungs-Telefonate, E-Mail-Verkehr
            oder das wiederholte Erklären von Code-Kontext entfallen weitgehend. Die Plattform wird bereits
            für mehrere Engineering-Partnerschaften produktiv eingesetzt.
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

      {/* Zwei Wege */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Zwei Wege, wie wir zusammenarbeiten</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-gold/40 bg-white p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">Für Ihre Software</span>
              <h3 className="font-heading text-xl font-semibold text-navy mt-2 mb-3">Entwicklungsunterstützung für beliebige Apps</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Beliebige Engineering-Software übernehmen, dokumentieren, stabilisieren und weiterentwickeln —
                flexibel im Stundenmodell. Ihre Mitarbeiter arbeiten KI-gestützt mit, wir auditieren und geben frei.
                So wird Ihre Codebasis von beiden Seiten wartbar.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">Für WerkingFlow</span>
              <h3 className="font-heading text-xl font-semibold text-navy mt-2 mb-3">Workflows gemeinsam entwickeln</h3>
              <p className="text-sm text-text-body leading-relaxed">
                Sie bringen das Fachwissen, wir die Engine: Als Fachpartner entwickeln Sie mit uns
                deterministische Engineering-Workflows für WerkingFlow — entweder exklusiv für Ihren
                eigenen Betrieb oder gemeinsam vermarktet, mit Beteiligung am Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typische Leistungen */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Typische Leistungen</h2>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">
              Deskriptiv, nicht abschließend — die Schwerpunkte werden gemeinsam pro Stundenblock priorisiert.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LEISTUNGEN.map((l) => (
              <div key={l.title} className="p-6 rounded-2xl border border-gray-200 bg-bg-light">
                <h3 className="font-heading text-base font-semibold text-navy mb-2">{l.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{l.desc}</p>
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
          <div className="grid md:grid-cols-3 gap-6">
            {MECHANIK.map((m) => (
              <div key={m.title} className="p-6 rounded-2xl border border-white/10 bg-navy-mid">
                <h3 className="font-heading text-base font-semibold text-white mb-2">{m.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-white/45 mt-10 max-w-2xl mx-auto">
            Flexibles Stundenmodell, Priorisierung gemeinsam pro Block — Sie sehen den aktuellen Stand
            jederzeit im Repository.
          </p>
        </div>
      </section>

      <ProductCTA
        headline="Gemeinsam an Ihrer Software arbeiten?"
        buttonText="Gespräch vereinbaren"
        buttonHref="/kontakt/"
      />
      <Footer />
    </>
  )
}
