import Link from 'next/link'
import Image from 'next/image'
import { FOUNDER } from '@/lib/constants'

const IDENTITY = [
  { skill: 'Fachsprache verstehen', via: 'Maschinenbau-Ingenieur' },
  { skill: 'Normen kennen', via: 'Ziviltechniker' },
  { skill: 'Automatisieren', via: '10+ Jahre Fullstack' },
] as const

export default function FounderTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Photo */}
          <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              width={112}
              height={140}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1">
            <div className="gold-line" />
            <h2 className="font-heading text-2xl font-bold text-navy mb-1">{FOUNDER.name}</h2>
            <p className="text-sm text-gold font-medium mb-6">{FOUNDER.title}</p>

            {/* Dreier-Identität */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {IDENTITY.map((item) => (
                <div key={item.skill} className="p-3 rounded-lg bg-bg-light">
                  <p className="text-xs font-semibold text-navy mb-1">{item.skill}</p>
                  <p className="text-xs text-text-muted">{item.via}</p>
                </div>
              ))}
            </div>

            {/* Zitat */}
            <blockquote className="border-l-3 border-gold pl-4 mb-6">
              <p className="text-text-body text-sm italic leading-relaxed">
                &ldquo;Jedes Tool löst ein Problem, das ich selbst hatte.&rdquo;
              </p>
            </blockquote>

            <Link href="/ueber-mich/" className="text-sm text-gold font-medium hover:underline no-underline">
              Mehr erfahren &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
