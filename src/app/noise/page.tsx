import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProductCTA from '@/components/product/ProductCTA'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.noise

export const metadata: Metadata = {
  title: `${product.name} — Schallgutachten nach ÖNORM S 5021`,
  description:
    'Validierte Schallberechnung nach CNOSSOS-EU, Grenzwertvergleich nach ÖNORM S 5021 — plus automatische Gutachtenerstellung. Die Berechnungswerte kommen aus der Berechnung, nicht aus der KI. Sie prüfen und unterschreiben.',
  openGraph: {
    title: `${product.name} — Schallgutachten nach ÖNORM S 5021`,
    description:
      'Validierte Berechnung nach CNOSSOS-EU und ÖNORM S 5021 + KI-gestützte Dokumentation. Berechnungswerte bleiben fix, Sie unterschreiben.',
  },
  alternates: { canonical: '/noise' },
}

const CHIPS = [
  { value: '5 Schritte', label: 'zum Gutachten' },
  { value: 'CNOSSOS-EU', label: 'europäischer Standard' },
  { value: 'ÖNORM S 5021', label: 'Grenzwert-Ampel' },
  { value: 'DOCX', label: 'in Ihrem Briefkopf' },
]

const TRUSTBAR = ['DSGVO-konform', 'EU-Hosting', 'Keine Weitergabe an Dritte']

const ENGINE_BADGES = ['CNOSSOS-EU', 'ÖNORM S 5021', 'LAeq pro Immissionsort', 'Lärmkonturkarte']

const PAINPOINTS = [
  'Spezial-Akustiksoftware kostet hohe Lizenzgebühren — und das Gutachten tippen Sie danach trotzdem selbst.',
  'Geometrie modellieren, Quellen setzen, rechnen, Werte prüfen, schreiben — Stunden pro Gutachten.',
  'Eine automatische Berechnung ist nur brauchbar, wenn sie normkonform und nachvollziehbar ist.',
]

const WORKFLOW = [
  { n: 1, title: 'Projekt & Datenblätter', screenshot: '/images/products/noise-projekt.webp', w: 1600, h: 900, desc: 'Adresse, Auftraggeber und technische Datenblätter importieren. Die KI liest Schallleistungspegel (Lw) aus den PDFs — Sie prüfen jeden Wert.' },
  { n: 2, title: 'Geometrie aus OpenStreetMap', screenshot: '/images/products/noise-3d.webp', w: 1600, h: 1313, desc: 'Bereich auf der Karte wählen — Gebäudegeometrie und Stockwerke kommen automatisch aus OpenStreetMap und werden zum 3D-Modell. Sie korrigieren bei Bedarf. Kein CAD-Zeichnen.' },
  { n: 3, title: 'Quellen & Immissionsorte', screenshot: '/images/products/noise-receivers.webp', w: 1600, h: 1313, desc: 'Schallquellen und Immissionsorte per Klick platzieren — mehrere Punkte und Höhen. 100 % Ihre Eingabe; die KI schlägt nur vor.' },
  { n: 4, title: 'Berechnung & ÖNORM-Vergleich', screenshot: '/images/products/noise-berechnung.webp', w: 1600, h: 1313, desc: 'Die Schallausbreitung wird nach CNOSSOS-EU berechnet. Ergebnis: LAeq pro Immissionsort und Höhe, automatischer Grenzwertvergleich nach ÖNORM S 5021 mit Ampel-Status.' },
  { n: 5, title: 'KI formuliert das Gutachten', screenshot: '/images/products/noise-gutachten.webp', w: 1600, h: 2264, desc: 'Die KI schreibt den Gutachtentext — Berechnungswerte bleiben dabei unverändert. Sie prüfen, ergänzen und unterschreiben.' },
]

const KI_TABLE = [
  ['Gebäudegeometrie aus OpenStreetMap', 'Automatisch (OSM)', 'Sie prüfen / korrigieren'],
  ['Schallquellen & Immissionsorte', 'Sie klicken', '100 % Ihre Eingabe'],
  ['Lw aus PDF-Datenblättern lesen', 'KI (Texterkennung)', 'Sie prüfen jeden Wert'],
  ['Schallausbreitung berechnen', 'Berechnung nach CNOSSOS-EU', 'Normkonform'],
  ['Grenzwertvergleich', 'ÖNORM S 5021 (fest)', 'Normkonform'],
  ['Gutachtentext formulieren', 'KI (Claude)', 'Sie prüfen & unterschreiben'],
]

const FAQ = [
  ['Wer haftet für die Berechnungswerte?', 'Sie. Die Pegel kommen aus der validierten Berechnung nach CNOSSOS-EU — Sie prüfen die Eingaben (Geometrie, Quellen, Lw-Werte) und unterschreiben das fertige Gutachten.'],
  ['Kann die KI falsche Schallpegel erfinden?', 'Nein. Die KI liest Lw aus den Datenblättern (Sie prüfen die Werte), die Ausbreitung wird mit validierten Formeln nach CNOSSOS-EU berechnet, und die KI formuliert anschliessend nur den Text. Die Zahl „52 dB(A)" stammt aus der Berechnung, nicht aus der KI.'],
  ['Ist das nicht wie ein Gutachten von ChatGPT?', 'Nein. ChatGPT kennt keine Normen und rechnet nichts. WerkING Noise rechnet normkonform nach CNOSSOS-EU; die KI formuliert nur den Text, die Berechnungswerte bleiben fix.'],
  ['Ersetzt das meine Spezialsoftware?', 'Für Standard-Gutachten (Wohnbau, kleinere Gewerbe) bietet Noise dieselbe Berechnungsmethodik (CNOSSOS-EU) — plus automatische Dokumentation. Für Spezialfälle behalten Sie Ihre gewohnten Werkzeuge.'],
  ['Wo werden meine Daten gespeichert?', 'Gehostet in der EU, DSGVO-konform. Keine Weitergabe an Dritte.'],
]

function ImageFrame({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-white/15 shadow-[0_0_40px_rgba(222,193,94,0.10)] bg-navy-mid">
      <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto" />
    </div>
  )
}

export default function NoisePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title={product.name}
        titleHtml={product.nameHtml}
        subtitle="Schallgutachten nach ÖNORM S 5021 — validierte Berechnung nach CNOSSOS-EU, automatische Dokumentation. Die Werte kommen aus der Berechnung, Sie prüfen und unterschreiben."
        status={{ status: product.status, label: product.statusLabel }}
      />

      {/* Hero-Visual: Splitscreen Karte + 3D + Heatmap */}
      <section className="bg-navy pt-2 pb-14">
        <div className="max-w-5xl mx-auto px-6">
          <ImageFrame src="/images/products/werking-noise.webp" alt="Splitscreen: CNOSSOS-EU Lärmkonturkarte und interaktives 3D-Gebäudemodell" w={1600} h={1195} />
          <p className="text-center text-xs text-white/40 mt-3">CNOSSOS-EU Lärmkonturkarte und interaktives 3D-Gebäudemodell — Grenzwerte nach ÖNORM S 5021.</p>
        </div>
      </section>

      {/* Kennzahlen + Trust */}
      <section className="bg-navy pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {CHIPS.map((c) => (
              <div key={c.value} className="rounded-xl border border-white/10 bg-navy-mid px-5 py-4 text-center">
                <div className="text-xl font-bold text-gold">{c.value}</div>
                <div className="text-xs text-white/50 mt-1">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-6 border-t border-white/10">
            {TRUSTBAR.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-sm text-white/70"><span className="text-gold">✓</span>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Kennen Sie das? */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Kennen Sie das?</h2>
          </div>
          <ul className="space-y-4">
            {PAINPOINTS.map((p) => (
              <li key={p} className="flex gap-4 items-start bg-white rounded-xl border border-black/5 px-5 py-4">
                <span className="flex-shrink-0 mt-1 text-gold font-bold">→</span>
                <span className="text-text-body leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ihre Haftung, unsere Validierung */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Normkonform gerechnet</h2>
          <p className="text-white/60 mt-4 leading-relaxed">
            WerkING Noise berechnet die Schallausbreitung nach <strong className="text-white">CNOSSOS-EU</strong> — dem europäischen Berechnungsstandard — und vergleicht die Beurteilungspegel automatisch nach <strong className="text-white">ÖNORM S 5021</strong>. Dieselbe Berechnungsmethodik wie etablierte Spezialsoftware.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {ENGINE_BADGES.map((b) => (
              <span key={b} className="text-sm font-medium text-gold border border-gold/30 bg-gold/5 rounded-full px-4 py-2">{b}</span>
            ))}
          </div>
          <p className="text-white/45 text-sm mt-8 max-w-xl mx-auto">Die Berechnungswerte kommen aus der normkonformen Berechnung — nicht aus der KI.</p>
        </div>
      </section>

      {/* Workflow mit Kontrolle */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">In 5 Schritten zum Schallgutachten</h2>
            <p className="text-text-muted mt-3">In jedem Schritt prüfen und kontrollieren Sie — die KI schlägt vor, Sie entscheiden.</p>
          </div>
          <div className="space-y-16">
            {WORKFLOW.map((s, i) => (
              <div key={s.n} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-10 items-center`}>
                <div className="flex-1 w-full">
                  <ImageFrame src={s.screenshot} alt={`Schritt ${s.n}: ${s.title}`} w={s.w} h={s.h} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-gold/20 text-gold text-base font-bold flex items-center justify-center">{s.n}</span>
                    <h3 className="font-heading text-xl font-semibold text-navy">{s.title}</h3>
                  </div>
                  <p className="text-text-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was macht die KI — und was nicht */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Was macht die KI — und was nicht?</h2>
            <p className="text-white/55 mt-3 max-w-2xl mx-auto">Die Pegel kommen aus der Engine, nicht aus der KI. Formuliert die KI den Text um, bleiben Berechnungswerte und Norm-Referenzen unverändert.</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-navy-mid text-white/70">
                  <th className="px-4 py-3 font-heading font-semibold">Aufgabe</th>
                  <th className="px-4 py-3 font-heading font-semibold">Technik</th>
                  <th className="px-4 py-3 font-heading font-semibold">Ihre Kontrolle</th>
                </tr>
              </thead>
              <tbody>
                {KI_TABLE.map(([a, t, k], i) => (
                  <tr key={a} className={i % 2 ? 'bg-navy' : 'bg-navy-mid/40'}>
                    <td className="px-4 py-3 text-white/80">{a}</td>
                    <td className="px-4 py-3 text-white/55">{t}</td>
                    <td className="px-4 py-3 text-gold/90">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KI-Editor */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 w-full">
              <ImageFrame src="/images/products/noise-ki-editor.webp" alt="Gutachten im KI-Editor überarbeiten" w={1600} h={900} />
            </div>
            <div className="flex-1">
              <div className="gold-line" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3">Gutachten überarbeiten im Gespräch</h2>
              <p className="text-text-body leading-relaxed mb-6">
                „Formuliere den Fazit-Abschnitt formeller" — die KI überarbeitet einzelne Abschnitte auf Anweisung. Ein Klick exportiert das Ergebnis als DOCX in Ihrem Briefkopf.
              </p>
              <ul className="space-y-3 text-text-muted">
                <li><span className="font-semibold text-navy">Fakten bleiben stabil:</span> Berechnungswerte, Grenzwerte und Norm-Referenzen werden bei Überarbeitungen nicht verändert.</li>
                <li><span className="font-semibold text-navy">Abschnittsweise:</span> gezielt einzelne Abschnitte anpassen, der Rest bleibt unberührt.</li>
                <li><span className="font-semibold text-navy">DOCX-Export:</span> druckfertig mit Deckblatt, Inhaltsverzeichnis und Normhinweisen.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ersetzt teure Spezialsoftware */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Gleiche Methodik, moderne Infrastruktur</h2>
          <p className="text-text-body mt-4 leading-relaxed">
            Dieselbe Berechnungsmethodik (CNOSSOS-EU) und normkonforme Auswertung nach ÖNORM S 5021 wie etablierte Akustik-Spezialsoftware — ohne deren Lizenzmodell und ohne wochenlange Einarbeitung. Kartenbasierte Eingabe, 3D-Visualisierung, Lärmkonturkarte und KI-gestützte Dokumentation sind inklusive.
          </p>
          <p className="text-text-muted text-sm mt-4">Sie zahlen nicht für jahrzehntealte Software-Architektur, sondern für validierte Berechnungen und automatische Dokumentation.</p>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <ImageFrame src="/images/products/noise-gutachten-gallery.webp" alt="Alle Seiten eines fertigen Schallgutachtens — von Deckblatt bis Fazit" w={1343} h={1532} />
            </div>
            <div className="flex-1">
              <div className="gold-line" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">Deckblatt bis Fazit — das vollständige Gutachten</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Acht Abschnitte: Grundlagen, Projektbeschreibung, Umgebungsanalyse, Planungswerte, Immissionsprognose, Beurteilung, Massnahmen und Fazit — mit Karten-Screenshots, Ergebnistabellen und Norm-Referenzen.
              </p>
              <ul className="space-y-3 text-white/55">
                <li><span className="font-semibold text-white">Ihr Briefkopf:</span> eigene Designvorlage — das Gutachten stammt sichtbar aus Ihrem Büro.</li>
                <li><span className="font-semibold text-white">Automatisches Inhaltsverzeichnis</span> und durchgehende Norm-Referenzen.</li>
                <li><span className="font-semibold text-white">DOCX-Export:</span> druckfertig und in Word weiterbearbeitbar.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kontrolle & Sicherheit */}
      <section className="py-20 bg-navy-mid">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Sie prüfen. Sie unterschreiben.</h2>
            <p className="text-white/55 mt-3 max-w-2xl mx-auto">WerkING Noise liefert die validierte Berechnung und den Entwurf — die fachliche Verantwortung bleibt bei Ihnen.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-navy p-6">
              <h3 className="font-heading text-base font-semibold text-white mb-2">Validierte Berechnung</h3>
              <p className="text-sm text-white/60">Berechnung nach CNOSSOS-EU, Grenzwertvergleich nach ÖNORM S 5021 — die Werte stammen aus der Berechnung, nicht aus der KI.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy p-6">
              <h3 className="font-heading text-base font-semibold text-white mb-2">DSGVO &amp; EU-Hosting</h3>
              <p className="text-sm text-white/60">Gehostet in der EU. Keine Weitergabe an Dritte und kein Training von KI-Modellen mit Ihren Projektdaten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Häufige Fragen</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group bg-white rounded-xl border border-black/5 px-6 py-4">
                <summary className="font-heading text-base font-semibold text-navy cursor-pointer list-none flex justify-between items-center gap-4">
                  {q}
                  <span className="text-gold transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="text-text-muted leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA
        headline={`${product.name} — Gespräch vereinbaren`}
        headlineHtml={`${product.nameHtml} — Gespräch vereinbaren`}
        buttonText="Gespräch vereinbaren"
        buttonHref="/kontakt/"
      />
      <Footer />
    </>
  )
}
