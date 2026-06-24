import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProductCTA from '@/components/product/ProductCTA'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.report

export const metadata: Metadata = {
  title: `${product.name} — Prüfberichte in Ihrer Struktur, Ihrem Briefkopf`,
  description:
    'Technische Prüfberichte für Sachverständige, Ziviltechniker und Ingenieurbüros: eigene Dokumenttypen, eigene Design-Vorlagen, eigene Wissensbasis. Einmal einrichten, dann folgt jeder Bericht Ihrem Standard. Sie prüfen und unterschreiben — die Kontrolle bleibt bei Ihnen.',
  openGraph: {
    title: `${product.name} — Prüfberichte in Ihrer Struktur, Ihrem Briefkopf`,
    description:
      'Eigene Dokumenttypen, eigener Briefkopf, eigene Wissensbasis — geführter Workflow, voller Volltext, Sie behalten die Kontrolle.',
  },
  alternates: { canonical: '/report' },
}

const CHIPS = [
  { value: '5 Schritte', label: 'geführter Workflow' },
  { value: '≤ 45 min', label: 'bis zum Entwurf' },
  { value: '∞ Prüftypen', label: 'frei konfigurierbar' },
  { value: 'Volltext', label: 'kein Lückentext' },
]

const CAPABILITIES = [
  'Eigener Briefkopf',
  'Eigene Dokumenttypen',
  'Eigene Wissensbasis',
  'Quellen-Nachweis',
  'Versionierung',
  'PDF + DOCX',
  'KI-Editor-Chat',
  'WerkING-Check',
]

const TRUSTBAR = ['DSGVO-konform', 'EU-Hosting', 'Pseudonymisierung', 'Keine Weitergabe an Dritte']

const PAINPOINTS = [
  'Jeder Bericht wird neu getippt — obwohl die Struktur jedes Mal dieselbe ist.',
  'Generische KI vom Markt schreibt beliebigen Text — nicht in Ihrer Struktur, nicht in Ihrer Sprache.',
  'Tool-Output sieht nach Software aus — nicht nach einem Dokument aus Ihrem Büro.',
]

const CORES = [
  ['Eigene Dokumenttypen', 'Sie definieren Ihre Prüfarten selbst — Abschnitte, Felder und Prüfkriterien. Kein vordefiniertes Schema, keine Einschränkung auf einen Fachbereich.'],
  ['Eigene Design-Vorlagen', 'Ihr Logo, Ihr Briefkopf, Ihr Layout. Der exportierte Bericht trägt ausschliesslich Ihre Marke — kein WerkING-Branding.'],
  ['Eigene Wissensbasis', 'Ihre eigenen Dokumente als Referenz: interne Richtlinien, Checklisten, Muster-Berichte. Die KI baut auf Ihrem Wissen auf, nicht auf Allgemeinplätzen.'],
]

const BAUSTEINE = [
  {
    kicker: 'Baustein 1',
    title: 'Dokumenttypen',
    lead: 'Ein Dokumenttyp beschreibt eine Prüfart: welche Abschnitte der Bericht hat, welche Fragen die KI stellt, welche Prüfkriterien gelten. Einmal angelegt, steht er für jeden neuen Bericht sofort bereit.',
    screenshot: '/images/products/report-dokumenttypen.webp',
    w: 1169,
    h: 828,
    points: [
      ['Frei definierbar', 'Beliebige Prüftypen anlegen — Abschnitte, Felder und Struktur vollständig frei konfigurierbar.'],
      ['Aus PDF-Muster erstellen', 'Bestehenden Bericht hochladen — die KI erkennt die Struktur und legt daraus automatisch einen neuen Dokumenttyp an.'],
      ['Eigene Wissensbasis', 'Interne Richtlinien, Checklisten und eigene Vorlagen hinterlegen — die KI greift bei der Generierung automatisch darauf zu.'],
      ['Beispiele lernen Ihren Stil', 'Echte Muster-Berichte verknüpfen: Detailtiefe und Formulierungen werden in neuen Berichten reproduziert.'],
    ],
  },
  {
    kicker: 'Baustein 2',
    title: 'Design-Vorlagen',
    lead: 'Design-Vorlagen bestimmen das Erscheinungsbild jedes Berichts — Logo, Briefkopf, Schrift, Tabellen-Layout. Der Auftraggeber sieht ein Dokument aus Ihrem Büro, nicht aus einem Software-Tool.',
    screenshot: '/images/products/report-designvorlagen.webp',
    w: 1169,
    h: 828,
    points: [
      ['Ihr Briefkopf, kein Branding', 'Logo, Firmenname, Kontaktdaten — kein WerkING-Branding im Export. Der Bericht wirkt intern erstellt.'],
      ['DOCX-Vorlage hochladen', 'Eigene Word-Vorlage hochladen — WerkING befüllt künftig alle Berichte mit genau diesem Layout.'],
      ['Pro Dokumenttyp zuweisbar', 'Druckbelüftungsprüfung bekommt ein anderes Layout als die Wohnungsübergabe — jede Prüfart ihr eigenes Erscheinungsbild.'],
      ['Sofort startklar', 'Der WerkING-Standard ist einsatzbereit — exportieren, anpassen, wieder hochladen.'],
    ],
  },
]

const WIZARD = [
  { n: 1, title: 'Eckdaten', screenshot: '/images/products/report-wizard-1.webp', desc: 'Projekt wählen — Auftraggeber, Adresse und Sachverständigen-Daten werden automatisch übernommen. Kein doppeltes Eintippen.' },
  { n: 2, title: 'Dokumenttyp wählen', screenshot: '/images/products/report-wizard-2.webp', desc: 'Der gewählte Typ bestimmt Struktur, Abschnitte und KI-Verhalten. Ihre Wissensbasis und Design-Vorlage greifen automatisch.' },
  { n: 3, title: 'Unterlagen', screenshot: '/images/products/report-wizard-3.webp', desc: 'Fotos, Messpläne und Datenblätter aus dem Projektordner. Eine KI-Checkliste prüft auf Vollständigkeit — was fehlt, wird sofort angezeigt.' },
  { n: 4, title: 'Arbeitsbereich', screenshot: '/images/products/report-wizard-4.webp', desc: 'Mehr als ein Notizfeld: Freitext, ein Excel-artiger Tabellen-Editor, Python-Diagramme aus Ihren Messwerten, Fotodokumentation und ein KI-Coach mit Lückenanalyse — alles im Split-Screen.' },
  { n: 5, title: 'Generierung', screenshot: '/images/products/report-wizard-5.webp', desc: 'Die KI plant den kompletten Bericht in Abschnitte und Einzelpunkte — jeder Punkt einzeln an-/abschaltbar und kommentierbar. Dann ein Klick.' },
]

const PROOF = [
  ['Ihr Briefkopf, kein Tool-Branding', 'Der Export trägt ausschliesslich Ihr Logo und Layout — der Bericht stammt sichtbar aus Ihrem Büro.'],
  ['Quellen-Nachweis', 'Nachvollziehbar, aus welcher Unterlage jede Aussage stammt — Sie können jeden Satz verantworten.'],
  ['Versionierung mit Wort-Diff', 'Jeder Speicherstand wird festgehalten, Versionen vergleichbar und wiederherstellbar.'],
  ['PDF + DOCX, kein Lock-in', 'Druckfertig oder in Word weiterbearbeitbar — Ihre Berichte gehören Ihnen.'],
]

const FAQ = [
  ['Wer haftet für den Inhalt des Berichts?', 'Sie. Die KI erstellt einen Entwurf, den Sie prüfen, anpassen und unterschreiben. Die fachliche und rechtliche Verantwortung bleibt bei Ihnen — WerkING Report ist das Werkzeug, nicht der Entscheider.'],
  ['Kann ich eigene Richtlinien und Checklisten einbinden?', 'Ja. Sie hinterlegen beliebige eigene Dokumente als Wissensbasis am Dokumenttyp — die KI greift bei der Generierung automatisch darauf zu und formuliert auf Basis Ihrer Vorgaben.'],
  ['Bleibt mein Briefkopf erhalten?', 'Ja. Sie laden eine eigene Design-Vorlage als DOCX hoch — jeder Export trägt Ihr Logo und Layout, ohne WerkING-Branding.'],
  ['Wie unterscheidet sich das von ChatGPT?', 'Ein Chatbot liefert bei gleicher Frage jedes Mal etwas anderes. WerkING Report ist ein definierter Prozess: gleiche Dokumenttyp-Konfiguration, gleiche Struktur, nachvollziehbare Quellen — reproduzierbar statt Zufall, und in Ihrem Stil statt generisch.'],
  ['Wie sicher sind meine Daten?', 'Dokumente werden verschlüsselt abgelegt und bleiben dem jeweiligen Projekt zugeordnet — kein projektübergreifender Zugriff, keine Weitergabe an Dritte und kein Training von KI-Modellen mit Ihren Unterlagen.'],
]

function ImageFrame({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-white/15 shadow-[0_0_40px_rgba(222,193,94,0.10)] bg-navy-mid">
      <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto" />
    </div>
  )
}

export default function ReportPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title={product.name}
        titleHtml={product.nameHtml}
        subtitle="Technische Prüfberichte für Sachverständige, Ziviltechniker und Ingenieurbüros — in Ihrer Struktur, nach Ihren Vorgaben, in Ihrem Briefkopf. Sie prüfen und unterschreiben."
        status={{ status: product.status, label: product.statusLabel }}
      />

      {/* Hero-Visual: seitengetreue A4-Vorschau */}
      <section className="bg-navy pt-2 pb-14">
        <div className="max-w-2xl mx-auto px-6">
          <ImageFrame src="/images/products/report-a4.webp" alt="Seitengetreue A4-Vorschau des fertigen Prüfberichts" w={1600} h={1717} />
          <p className="text-center text-xs text-white/40 mt-3">Seitengetreue A4-Vorschau — Logo, Kopfzeile, Seitenränder und Seitenzahlen. Was Sie sehen, exportieren Sie.</p>
        </div>
      </section>

      {/* Kennzahlen + Capabilities */}
      <section className="bg-navy pb-16 -mt-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {CHIPS.map((c) => (
              <div key={c.value} className="rounded-xl border border-white/10 bg-navy-mid px-5 py-4 text-center">
                <div className="text-2xl font-bold text-gold">{c.value}</div>
                <div className="text-xs text-white/50 mt-1">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {CAPABILITIES.map((cap) => (
              <span key={cap} className="text-xs font-medium text-white/70 border border-white/15 rounded-full px-3 py-1.5 bg-white/5">
                {cap}
              </span>
            ))}
          </div>

          {/* Trust-Leiste */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {TRUSTBAR.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-sm text-white/70">
                <span className="text-gold">✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Kennen Sie das? — Problem-Validation */}
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

      {/* Konfigurierbarkeit — die 3 Kerne + Deep-Dives */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Einmal einrichten. Für jeden Bericht.</h2>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">
              Sie konfigurieren WerkING Report einmal auf Ihre Arbeitsweise. Ab dann folgt jeder Bericht Ihrem Standard — WerkING passt sich Ihnen an, nicht umgekehrt.
            </p>
          </div>

          {/* 3 Kerne */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {CORES.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-black/5 bg-bg-light p-6">
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{t}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          {/* Deep-Dives */}
          <div className="space-y-20">
            {BAUSTEINE.map((b, i) => (
              <div key={b.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="flex-1 w-full">
                  <ImageFrame src={b.screenshot} alt={b.title} w={b.w} h={b.h} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">{b.kicker}</span>
                  <h3 className="font-heading text-2xl font-bold text-navy mt-1 mb-3">{b.title}</h3>
                  <p className="text-text-body leading-relaxed mb-6">{b.lead}</p>
                  <ul className="space-y-4">
                    {b.points.map(([t, d]) => (
                      <li key={t} className="flex gap-3">
                        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>
                          <span className="font-semibold text-navy">{t}. </span>
                          <span className="text-text-muted">{d}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Schritt Workflow */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">In 5 Schritten zum Bericht</h2>
            <p className="text-white/50 mt-3">Der geführte Workflow — mit Live-Vorschau und KI-Analyse in jedem Schritt.</p>
          </div>

          <div className="space-y-16">
            {WIZARD.map((s, i) => (
              <div key={s.n} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-10 items-center`}>
                <div className="w-full md:w-1/2 lg:w-[44%] mx-auto max-w-md md:max-w-none">
                  <ImageFrame src={s.screenshot} alt={`Schritt ${s.n}: ${s.title}`} w={1600} h={2130} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-gold/20 text-gold text-base font-bold flex items-center justify-center">{s.n}</span>
                    <h3 className="font-heading text-xl font-semibold text-white">{s.title}</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Human-in-the-Loop Callout */}
          <div className="mt-16 max-w-3xl mx-auto text-center rounded-2xl border border-gold/25 bg-gold/5 px-8 py-8">
            <p className="font-heading text-lg md:text-xl font-semibold text-white">
              Sie prüfen, passen an, unterschreiben.
            </p>
            <p className="text-white/60 mt-2">
              Die KI erstellt den Entwurf — die letzte Entscheidung liegt immer bei Ihnen. WerkING Report ist Werkzeug, kein Ersatz für Ihre Expertise.
            </p>
          </div>
        </div>
      </section>

      {/* KI-Editor */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 w-full">
              <ImageFrame src="/images/products/report-ki-editor.webp" alt="KI-Editor mit Assistent-Chat" w={1600} h={1622} />
            </div>
            <div className="flex-1">
              <div className="gold-line" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3">Überarbeiten im Gespräch</h2>
              <p className="text-text-body leading-relaxed mb-6">
                Der fertige Bericht landet im Editor — der KI-Assistent bleibt als Chat daneben offen. Gezielte Änderungen per Spracheingabe, der Sachverständige behält jederzeit die Kontrolle.
              </p>
              <ul className="space-y-3 text-text-muted">
                <li><span className="font-semibold text-navy">Abschnittspräzise:</span> „Mach Abschnitt 3 kürzer", „Formuliere das formeller" — die KI ändert nur, was gefragt ist.</li>
                <li><span className="font-semibold text-navy">Versionierung:</span> Jeder Stand wird gesichert, ältere Versionen per Wort-Diff vergleichbar und wiederherstellbar.</li>
                <li><span className="font-semibold text-navy">Quellen-Tab:</span> volle Nachvollziehbarkeit — welche Quelle hat welchen Abschnitt beeinflusst.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WerkING-Check — Qualitätscheck / niedrigschwelliger Einstieg */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">WerkING-Check</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mt-1">Wie gut ist Ihr Bericht?</h2>
            <p className="text-white/55 mt-3 max-w-2xl mx-auto">
              Der einfachste Einstieg: Laden Sie einen bestehenden Bericht als PDF hoch — die KI prüft ihn auf Vollständigkeit, Widersprüche und Schlüssigkeit und gibt eine klare Einschätzung. Kein Account, kein Setup. Ein Qualitätscheck, kein Zertifikat: eine zweite Meinung, bevor Sie unterschreiben. Das Ergebnis sehen nur Sie — DSGVO-konform, nicht öffentlich.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ImageFrame src="/images/products/report-check.webp" alt="WerkING-Check Qualitätsbericht mit Einschätzung und Anmerkungen" w={1600} h={1300} />
            <div className="space-y-5">
              <div className="rounded-xl border border-white/10 bg-navy-mid p-5">
                <h3 className="font-heading text-base font-semibold text-white mb-1">Klare Einschätzung</h3>
                <p className="text-sm text-white/55">„Verwendbar", „Verwendbar mit Auflagen" oder „Nicht verwendbar" — mit Begründung und Schweregrad pro Anmerkung.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-navy-mid p-5">
                <h3 className="font-heading text-base font-semibold text-white mb-1">Faktenprüfung</h3>
                <p className="text-sm text-white/55">Fachliche Behauptungen aus dem Bericht werden gegen Quellen geprüft — Vollständigkeit, Widersprüche, Plausibilität.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-navy-mid p-5">
                <h3 className="font-heading text-base font-semibold text-white mb-1">Privat &amp; DSGVO-konform</h3>
                <p className="text-sm text-white/55">Das Ergebnis sehen nur Sie — kein öffentlicher Link, keine Weitergabe an Dritte. Ohne Account nutzbar, Ihr Bericht bleibt privat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="w-full lg:w-[46%]">
              <ImageFrame src="/images/products/report-editor.webp" alt="Editor mit Bearbeiten/Vorschau-Umschalter, KI-Assistent und PDF/Word-Export" w={1600} h={1390} />
            </div>
            <div className="flex-1">
              <div className="gold-line" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3">A4-Vorschau. Dann PDF oder Word.</h2>
              <p className="text-text-body leading-relaxed mb-8">
                Ein Klick wechselt in die seitengetreue A4-Vorschau — mit Logo, Kopfzeile, Seitenrändern und Seitenzahlen. Was Sie sehen, ist was Sie exportieren. Keine Layout-Überraschung beim Druck.
              </p>
              <ul className="space-y-3 text-text-muted">
                <li><span className="font-semibold text-navy">A4-Vorschau (WYSIWYG):</span> ein Klick zwischen Bearbeiten und finaler Seitenansicht.</li>
                <li><span className="font-semibold text-navy">PDF-Export:</span> druckfertig, mit Ihrem Logo und Ihrer Designvorlage — direkt an den Auftraggeber.</li>
                <li><span className="font-semibold text-navy">Word-Export (DOCX):</span> weiterbearbeitbar — für eigene Korrekturen oder die Weitergabe ans Sekretariat.</li>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Kontrolle behalten. Verantwortung absichern.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-5">Was Sie kontrollieren</h3>
              <ul className="space-y-4">
                {PROOF.map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
                    <span><span className="font-semibold text-white">{t}. </span><span className="text-white/55">{d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold mb-5">Verantwortung & Datenschutz</h3>
              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-navy p-5">
                  <p className="text-sm text-white/70"><span className="font-semibold text-white">Sie unterschreiben, Sie haften, Sie kontrollieren.</span> Die KI liefert den Entwurf — die fachliche Verantwortung bleibt bei Ihnen. WerkING Report ist Werkzeug, kein Ersatz für Ihre Expertise.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-navy p-5">
                  <p className="text-sm text-white/70"><span className="font-semibold text-white">Pseudonymisierung.</span> Im Datenschutz-Modus werden personenbezogene Daten erkannt und vor der KI-Verarbeitung durch Pseudonyme ersetzt — projektweit konsistent, damit nichts über andere Dokumente im selben Prompt durchsickert.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-navy p-5">
                  <p className="text-sm text-white/70"><span className="font-semibold text-white">DSGVO & EU-Hosting.</span> Gehostet in der EU. Dokumente verschlüsselt abgelegt, jeder Datei dem Projekt zugeordnet — kein projektübergreifender Zugriff, keine Weitergabe an Dritte, kein Training von KI-Modellen mit Ihren Unterlagen.</p>
                </div>
              </div>
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
