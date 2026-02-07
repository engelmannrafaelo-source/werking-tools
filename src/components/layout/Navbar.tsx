'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_ITEMS, SITE } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-semibold text-white tracking-tight no-underline">
          Werk<span className="brand-ing">ING</span> Tools
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-white/70 hover:text-gold transition-colors no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              className="text-sm bg-gold text-navy px-4 py-2 rounded-full font-semibold hover:bg-gold-light transition-colors no-underline"
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10">
          <ul className="flex flex-col p-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-gold transition-colors no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-gold text-navy px-4 py-2 rounded-full font-semibold no-underline"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
