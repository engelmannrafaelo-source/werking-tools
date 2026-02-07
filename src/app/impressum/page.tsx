import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Impressum - WerkING Tools',
  robots: 'noindex',
}

export default function Impressum() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-navy text-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-4xl font-bold mb-8">Impressum</h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">
                Informationen gemaess &sect; 5 ECG
              </h2>
              <p>
                DI Dr. tech. Rafael Engelmann<br />
                Ingenieurbuero fuer Technische Physik<br />
                Gewerbe: IT-Dienstleistungen
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">Kontakt</h2>
              <p>
                Adresse: {SITE.address}<br />
                E-Mail: {SITE.email}<br />
                Telefon: {SITE.phone}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">Berufsbezeichnung</h2>
              <p>
                Ziviltechniker (Ingenieurkonsulent fuer Technische Physik)<br />
                Verliehen in: Oesterreich<br />
                Kammer: Bundeskammer der ZiviltechnikerInnen
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">Haftungshinweis</h2>
              <p>
                Trotz sorgfaeltiger inhaltlicher Kontrolle uebernehmen wir keine
                Haftung fuer die Inhalte externer Links. Fuer den Inhalt der
                verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
