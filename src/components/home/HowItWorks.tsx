import { SOLUTION_STEPS } from '@/lib/constants'

const ICONS = {
  upload: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
  pipeline: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  check: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
} as const

export default function HowItWorks() {
  return (
    <section id="loesung" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">So funktioniert&apos;s</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SOLUTION_STEPS.map((step) => (
            <div key={step.number} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                {ICONS[step.icon as keyof typeof ICONS]}
              </div>
              <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                Schritt {step.number}
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy mb-3">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
