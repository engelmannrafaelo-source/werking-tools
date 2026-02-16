import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Kontakt — WerkING Tools',
  description: 'Kontaktieren Sie uns für ein Gespräch.',
}

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Kontakt"
        subtitle="Sprechen wir darüber."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* CTA */}
            <div>
              <div className="gold-line" />
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Schreiben Sie uns.</h2>
              <p className="text-text-body leading-relaxed mb-8">
                Sie wollen Ingenieurprozesse automatisieren oder haben Fragen zu unseren Produkten? Melden Sie sich — wir antworten innerhalb von 24 Stunden.
              </p>

              <a
                href={`mailto:${SITE.email}`}
                className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.3)] text-lg"
              >
                Email senden
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-bg-light">
                <h3 className="font-heading text-sm font-semibold text-navy uppercase tracking-wider mb-4">Kontaktdaten</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href={`mailto:${SITE.email}`} className="text-navy font-medium hover:text-gold transition-colors no-underline">
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-navy font-medium">{SITE.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-bg-light">
                <h3 className="font-heading text-sm font-semibold text-navy uppercase tracking-wider mb-3">Öffnungszeiten</h3>
                <p className="text-text-muted text-sm">{SITE.hours}</p>
              </div>

              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-bg-light hover:bg-gold/5 transition-colors no-underline group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-navy font-medium group-hover:text-gold transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
