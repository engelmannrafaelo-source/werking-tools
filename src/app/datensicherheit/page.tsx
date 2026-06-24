import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'

export const metadata: Metadata = {
  title: 'Datensicherheit — WerkING Tools',
  description:
    'Ihre Daten bleiben in Deutschland. Vor jeder KI-Verarbeitung werden personenbezogene Daten pseudonymisiert — Namen, Firmen und Adressen werden durch Platzhalter ersetzt.',
  alternates: { canonical: '/datensicherheit' },
}

const PILLARS = [
  ['Daten in Deutschland', 'Ihre Projektdateien und Ergebnisse liegen auf Servern in Deutschland (Hetzner, Standort Falkenstein).'],
  ['Pseudonymisierung vor der KI', 'Namen, Firmen, Adressen, E-Mails und Telefonnummern werden ersetzt, bevor etwas an das KI-Modell geht.'],
  ['Keine Weitergabe, kein Training', 'Ihre Daten werden nicht an Dritte verkauft und nicht zum Training von KI-Modellen verwendet.'],
  ['Sie behalten die Kontrolle', 'Sie prüfen und verantworten jedes Ergebnis. Die fachliche Verantwortung bleibt bei Ihnen.'],
]

// Pseudonymisierungs-Beispiel — Originaltext-Segmente mit erkannten Entitäten.
const SEGMENTS: { t?: string; pii?: string; tok?: string }[] = [
  { t: 'Im Auftrag von ' },
  { pii: 'Dipl.-Ing. Thomas Berger', tok: 'PERSON_001' },
  { t: ' (' },
  { pii: 'Berger Immobilien GmbH', tok: 'ORG_001' },
  { t: '), ' },
  { pii: 'Hauptstraße 12, 1010 Wien', tok: 'LOCATION_001' },
  { t: ', E-Mail ' },
  { pii: 't.berger@berger-immo.at', tok: 'EMAIL_001' },
  { t: ' — Druckbelüftungsanlage geprüft am 12.06.2026.' },
]

export default function Datensicherheit() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Datensicherheit"
        subtitle="Ihre Daten bleiben in Deutschland — und bevor die KI etwas zu sehen bekommt, werden personenbezogene Daten pseudonymisiert."
      />

      {/* Säulen */}
      <section className="bg-navy pb-16 -mt-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {PILLARS.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-navy-mid p-6">
                <h2 className="font-heading text-lg font-semibold text-white mb-2">{t}</h2>
                <p className="text-sm text-white/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pseudonymisierung — Vorher/Nachher */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">So funktioniert die Pseudonymisierung</h2>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">
              Vor jeder KI-Verarbeitung erkennt das System personenbezogene Daten und ersetzt sie durch Platzhalter. Das KI-Modell sieht nur die Platzhalter — die Zuordnung bleibt bei Ihnen und wird im fertigen Dokument wieder eingesetzt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Original */}
            <div className="rounded-2xl border border-black/5 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Ihre Eingabe</div>
              <p className="text-sm text-text-body leading-loose">
                {SEGMENTS.map((s, i) =>
                  s.pii ? (
                    <span key={i} className="rounded bg-rose-100 text-rose-700 px-1 py-0.5">{s.pii}</span>
                  ) : (
                    <span key={i}>{s.t}</span>
                  ),
                )}
              </p>
            </div>

            {/* Pseudonymisiert */}
            <div className="rounded-2xl border-2 border-gold/30 bg-navy p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">An die KI übermittelt</div>
              <p className="text-sm text-white/80 leading-loose">
                {SEGMENTS.map((s, i) =>
                  s.tok ? (
                    <span key={i} className="rounded bg-gold/15 text-gold px-1 py-0.5 font-mono text-[0.8em]">{s.tok}</span>
                  ) : (
                    <span key={i}>{s.t}</span>
                  ),
                )}
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-text-muted mt-6 max-w-2xl mx-auto">
            Erkannt und ersetzt werden u.&nbsp;a. Personen, Firmen, Adressen, E-Mail-Adressen und Telefonnummern. Fachliche Inhalte, Messwerte und Berechnungen bleiben unverändert.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
