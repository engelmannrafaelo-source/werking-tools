import { TRUST_ITEMS } from '@/lib/constants'

export default function Trust() {
  return (
    <section id="vertrauen" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Vertrauen &amp; Sicherheit
          </h2>
          <p className="text-text-muted text-lg">
            20 Jahre Ingenieurserfahrung. Enterprise-Sicherheit. Keine Kompromisse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {TRUST_ITEMS.slice(0, 3).map((item) => (
            <div key={item.title} className="bg-bg-light rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {TRUST_ITEMS.slice(3).map((item) => (
            <div key={item.title} className="bg-bg-light rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
