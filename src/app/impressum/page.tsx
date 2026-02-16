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
                Medieninhaber und Herausgeber
              </h2>
              <p>
                Werkingflow<br />
                DI Dr. tech. Rafael Engelmann<br />
                IT-Dienstleistungen<br />
                {SITE.address}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">Kontakt</h2>
              <p>
                E-Mail: {SITE.email}<br />
                Telefonischer Rückruf auf Anfrage per E-Mail
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">
                Berufsbezeichnung des Gründers
              </h2>
              <p>
                Ziviltechniker (Ingenieurkonsulent für Technische Physik)<br />
                Verliehen in: Österreich<br />
                Kammer: Bundeskammer der ZiviltechnikerInnen
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">
                Informationen gemäß &sect; 5 ECG
              </h2>
              <p>
                Unternehmensgegenstand: IT-Dienstleistungen<br />
                UID-Nr.: auf Anfrage
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">Haftungshinweis</h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
