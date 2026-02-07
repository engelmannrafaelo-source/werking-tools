import Link from 'next/link'
import { SITE } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-heading text-xl font-semibold text-white mb-4">
              Werk<span className="brand-ing">ING</span> Tools
            </div>
            <p className="text-sm leading-relaxed">
              Engineering Workflow Marketplace.<br />
              Von einem Ziviltechniker fuer Ziviltechniker.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#produkte" className="hover:text-gold transition-colors no-underline">Produkte</a></li>
              <li><a href="#so-funktionierts" className="hover:text-gold transition-colors no-underline">So funktioniert&apos;s</a></li>
              <li><a href="#vertrauen" className="hover:text-gold transition-colors no-underline">Vertrauen</a></li>
              <li><a href="#foerderung" className="hover:text-gold transition-colors no-underline">Foerderung</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors no-underline">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-colors no-underline">
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>Mo-Do: 09-17, Fr: 09-12</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Dr. Rafael Engelmann — Ziviltechniker fuer Maschinenbau</p>
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
