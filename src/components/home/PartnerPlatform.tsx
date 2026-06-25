import Image from 'next/image'
import Link from 'next/link'

const POINTS = [
  {
    title: 'Co-Development',
    text: 'Ihr Team und wir arbeiten parallel an derselben Codebasis — jeder Zugang isoliert, jede Änderung über Git-Branches nachvollziehbar.',
  },
  {
    title: 'Audit vor jedem Merge',
    text: 'Ihre Mitarbeiter arbeiten KI-gestützt mit. Wir auditieren und prüfen die Änderungen, bevor sie in den Hauptzweig gehen.',
  },
  {
    title: 'Tickets & Mitarbeiter-Chatbot',
    text: 'Aufgaben laufen über ein integriertes Ticket-System, Rückfragen zum Code beantwortet der eingebaute Chatbot — ohne Abstimmungs-Telefonate.',
  },
] as const

export default function PartnerPlatform() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">
            Gemeinsam an Ihrer Codebasis arbeiten
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Die WerkING Partner-Plattform ist eine gehostete Arbeitsumgebung, in der mehrere
            Personen parallel an Software entwickeln — Ihr Team gemeinsam mit uns. Bereits in
            mehreren Engineering-Partnerschaften produktiv im Einsatz.
          </p>
        </div>

        {/* Browser-Rahmen mit Screenshot */}
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
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {POINTS.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl bg-bg-light border border-gray-200">
              <h3 className="font-heading text-lg font-semibold text-navy mb-3">{p.title}</h3>
              <p className="text-text-body text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/partner-plattform/"
            className="inline-block px-6 py-3 border-2 border-navy/20 text-navy font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors no-underline"
          >
            Mehr zur Partner-Plattform →
          </Link>
        </div>
      </div>
    </section>
  )
}
