import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Datenschutz - WerkING Tools',
  robots: 'noindex',
}

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-navy text-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-4xl font-bold mb-8">Datenschutzerklaerung</h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">1. Verantwortlicher</h2>
              <p>
                DI Dr. tech. Rafael Engelmann<br />
                {SITE.address}<br />
                E-Mail: {SITE.email}<br />
                Telefon: {SITE.phone}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">2. Erhobene Daten</h2>
              <p>
                Diese Website erhebt keine personenbezogenen Daten. Es werden keine
                Cookies gesetzt, kein Tracking eingesetzt und keine Analytics-Tools verwendet.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">3. Hosting</h2>
              <p>
                Die Website wird auf Vercel (Vercel Inc., San Francisco, USA) gehostet.
                Vercel verarbeitet technisch bedingt Server-Logs (IP-Adresse, Zeitstempel,
                aufgerufene Seite). Details: vercel.com/legal/privacy-policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">4. Google Fonts</h2>
              <p>
                Diese Website nutzt Google Fonts, die ueber next/font lokal eingebettet werden.
                Es werden keine Anfragen an Google-Server gestellt.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">5. Externe Links</h2>
              <p>
                Diese Website enthaelt Links zu externen Websites. Beim Klick auf
                diese Links gelten die Datenschutzerklaerungen der jeweiligen Anbieter.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">6. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Loeschung,
                Einschraenkung der Verarbeitung, Datenuebertragbarkeit und
                Widerspruch. Kontaktieren Sie uns unter {SITE.email}.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-white mb-3">7. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, Beschwerde bei der oesterreichischen
                Datenschutzbehoerde (dsb.gv.at) einzureichen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
