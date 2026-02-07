import { STEPS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <section id="so-funktionierts" className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            So funktioniert&apos;s
          </h2>
          <p className="text-text-muted text-lg">
            Upload. Pruefen. Fertig. Drei Schritte zum fertigen Dokument.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-gold text-navy rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
