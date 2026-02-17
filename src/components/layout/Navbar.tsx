'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_ITEMS, SITE } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold text-white tracking-tight no-underline hover:opacity-90 transition-opacity">
          <span className="brand-outline">Werk</span><span className="brand-ing">ING</span><span className="brand-outline"> Tools</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => 'children' in item ? setOpenDropdown(item.label) : undefined}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {'children' in item ? (
                <>
                  <button
                    className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium no-underline"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <svg className="inline-block ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-navy-mid border border-white/10 rounded-xl shadow-2xl py-2" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-white/5 transition-colors no-underline"
                        >
                          <span className="text-sm font-medium text-white">{child.label}</span>
                          <span className="block text-xs text-white/50 mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium no-underline"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/kontakt/"
            className="ml-4 px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.3)]"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-mid/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {'children' in item ? (
                  <>
                    <p className="px-3 py-2 text-xs uppercase tracking-wider text-white/40 font-semibold">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-2.5 text-white/80 hover:text-white transition-colors no-underline"
                      >
                        {child.label}
                        <span className="block text-xs text-white/40">{child.desc}</span>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2.5 text-white/80 hover:text-white transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/kontakt/"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3 bg-gold text-navy text-center font-semibold rounded-lg no-underline"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
