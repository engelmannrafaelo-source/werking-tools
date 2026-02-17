import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="min-h-[70vh] flex items-center justify-center bg-navy">
        <div className="text-center px-6">
          <div className="gold-line-center" />
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-gold mb-4">404</h1>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Seite nicht gefunden.
          </h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            Die angeforderte Seite existiert nicht oder wurde verschoben.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline"
            >
              Zur Startseite
            </Link>
            <Link
              href="/early-access/"
              className="inline-block px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors no-underline"
            >
              Early Access
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
