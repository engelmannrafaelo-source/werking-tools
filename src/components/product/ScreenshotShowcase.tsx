import Image from 'next/image'
import { type ProductStep } from '@/lib/products'

export default function ScreenshotShowcase({ steps }: { steps: ProductStep[] }) {
  if (steps.length === 0) return null

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">So funktioniert&apos;s</h2>
        </div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Screenshot */}
              <div className="flex-1 w-full">
                <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(222,193,94,0.12)] bg-navy-mid aspect-video">
                  <Image
                    src={step.screenshot}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gold/20 text-gold text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
