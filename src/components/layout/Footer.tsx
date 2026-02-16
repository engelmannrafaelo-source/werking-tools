import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { PRODUCTS, PRODUCT_ORDER } from '@/lib/products'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Kontakt */}
          <div>
            <h3 className="font-heading text-white text-sm font-semibold uppercase tracking-wider mb-6 pb-3 border-b-2 border-gold inline-block">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-white hover:text-gold transition-colors no-underline font-medium">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
              <li className="pt-2">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/15 hover:bg-gold/25 transition-colors"
                >
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-white text-sm font-semibold uppercase tracking-wider mb-6 pb-3 border-b-2 border-gold inline-block">
              Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/preise/', label: 'Preise' },
                { href: '/ueber-mich/', label: 'Über mich' },
                { href: '/kontakt/', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold transition-colors no-underline flex items-center gap-2">
                    <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produkte */}
          <div>
            <h3 className="font-heading text-white text-sm font-semibold uppercase tracking-wider mb-6 pb-3 border-b-2 border-gold inline-block">
              Produkte
            </h3>
            <ul className="space-y-3 text-sm">
              {PRODUCT_ORDER.map((key) => {
                const p = PRODUCTS[key]
                return (
                  <li key={key}>
                    <Link href={p.href} className="hover:text-gold transition-colors no-underline flex items-center gap-2">
                      <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {p.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} DI Dr. Rafael Engelmann — Ziviltechniker für Maschinenbau</p>
          <div className="flex gap-6">
            <Link href="/impressum/" className="hover:text-gold transition-colors no-underline">Impressum</Link>
            <Link href="/datenschutz/" className="hover:text-gold transition-colors no-underline">Datenschutz</Link>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors no-underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
