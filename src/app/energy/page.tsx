import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import ProductCTA from '@/components/product/ProductCTA'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.energy

export const metadata: Metadata = {
  title: `${product.name} — Validierte Energieanalysen aus Betriebsdaten`,
  description:
    'Von Rohdaten zu validierten Energieanalysen — ohne wochenlange manuelle Auswertung. Eine nachvollziehbare 8-Phasen-Analyse mit Quellen-Referenzen und Plausibilitätsprüfung. Sie prüfen und verantworten die Ergebnisse.',
  openGraph: {
    title: `${product.name} — Validierte Energieanalysen aus Betriebsdaten`,
    description:
      'Nachvollziehbare 8-Phasen-Analyse statt Black-Box: jede Berechnung referenziert, Diagramme aus Ihren Originaldaten, Sie prüfen und verantworten.',
  },
  alternates: { canonical: '/energy' },
}

const CHIPS = [
  { value: '8 Phasen', label: 'nachvollziehbare Analyse' },
  { value: '5 Schritte', label: 'geführter Wizard' },
  { value: 'Alle Unterlagen', label: 'Daten, Pläne, PDFs, Fotos' },
  { value: 'PDF + Word', label: 'fertiger A4-Bericht' },
]

const TRUSTBAR = ['DSGVO-konform', 'EU-Hosting', 'Ihre Daten bleiben Ihre']

const PAINPOINTS = [
  'Zwei Jahre Betriebsdaten in Excel — und Wochen, um daraus belastbare Aussagen abzuleiten.',
  'Standardisierte Tools und Pauschalwerte treffen die Besonderheiten Ihrer Anlage nie.',
  'Eine automatische Auswertung ist nur so viel wert, wie Sie ihren Zahlen vertrauen können.',
]

const UPLOAD_KONTEXT = [
  'Mess- und Betriebsdaten (CSV, Excel, Parquet)',
  'Energieausweise, Vorberichte, Audits',
  'Pläne, Schemata, Anlagen-Datenblätter',
  'Fotos, Typenschilder, Notizen',
]

const LANDSCAPE = [
  { name: 'Energieausweis', tag: 'Pflicht · standardisiert', desc: 'Gesetzliches Standarddokument nach OIB-Richtlinie 6. Formularbasiert, Effizienzklasse A–G — bewertet das Gebäude nach festem Schema.' },
  { name: 'Energieaudit (EN 16247)', tag: 'Pflicht · normiert', desc: 'Strukturierte Pflichtprüfung für grosse Unternehmen nach ÖNORM EN 16247. Erfasst die Energieströme nach Norm — kein Formular, aber festes Verfahren.' },
  { name: 'WerkING Energy', tag: 'frei · anlagenspezifisch', desc: 'Datengetriebene Betriebs- und Optimierungsanalyse Ihrer konkreten Anlage. Keine Norm-Vorlage — die KI denkt sich in genau diese eine Anlage ein.', highlight: true },
]

const PHASES = [
  ['Datenverständnis', 'Struktur, Einheiten und Zeitreihen erkennen — was steckt in den Messdaten?'],
  ['Web-Recherche', 'Richtwerte und Benchmarks für den erkannten Anlagen- und Gebäudetyp.'],
  ['Datenvalidierung', 'Lücken, Ausreisser und Plausibilität gegen physikalische Grenzen prüfen.'],
  ['Formelentdeckung', 'Physikalische Zusammenhänge aus den Messdaten ableiten — Energiebilanzen, Wirkungsgrade.'],
  ['Verhaltensanalyse', 'Lastprofile, Betriebsmuster und Anomalien im Zeitverlauf erkennen.'],
  ['Einsparpotenzial-Recherche', 'Konkrete Effizienzmassnahmen für die gefundenen Befunde recherchieren.'],
  ['Effizienzberechnung', 'Einsparpotenziale quantifizieren — mit Wirtschaftlichkeit und Amortisation.'],
  ['Berichtgenerierung', 'A4-Bericht mit Diagrammen aus Ihren Originaldaten und Handlungsempfehlungen.'],
]

const BLACKBOX = [
  ['Jede Zahl nachvollziehbar', 'Jede Berechnung referenziert die verwendete Methode und Quelle. Alle Diagramme entstehen aus Ihren Originaldaten — keine aggregierten Durchschnittswerte.'],
  ['Iterative Validierung', 'Energy prüft die Ergebnisse gegen physikalische Grenzen und rechnet nach, bis sie konsistent sind. Unplausibles fällt auf, bevor es in den Bericht kommt — wie ein Vier-Augen-Prinzip, nur schneller.'],
  ['Computer Vision statt Abtippen', 'Anlagenschemata und Energieausweise werden aus PDFs ausgelesen — Sie sehen die Rohdaten und die Interpretation nebeneinander und können korrigieren.'],
]

const WIZARD = [
  { n: 1, title: 'Upload', screenshot: '/images/products/energy-upload.webp', w: 1210, h: 846, desc: 'Laden Sie alles hoch, was Sie zum Projekt haben — Mess- und Betriebsdaten (CSV, Excel, Parquet) ebenso wie Energieausweise, Pläne, Schemata, Datenblätter, Fotos und Notizen. Die KI wertet alle Unterlagen gemeinsam aus.' },
  { n: 2, title: 'Vorschau', screenshot: '/images/products/energy-vorschau.webp', w: 1210, h: 846, desc: 'Die KI liest die Dateien sofort: erkannte Systeme, Messzeitraum, Auflösung, Datenqualität und erste Auffälligkeiten. Sie prüfen die Grundlage.' },
  { n: 3, title: 'Schema', screenshot: '/images/products/energy-schema.webp', w: 1210, h: 810, desc: 'Die KI leitet die Anlagentopologie aus Daten und Dokumenten ab — Heizkreise, Vor-/Rücklauf, Zähler. Ein editierbares Schema, keine Black Box. Sie korrigieren bei Bedarf.' },
]

const FAQ = [
  ['Ist das ein Energieausweis oder ein Norm-Audit?', 'Nein. WerkING Energy erstellt keinen standardisierten Energieausweis und kein Formular-Audit nach Schema-F, sondern eine individuelle, datengetriebene Analyse Ihrer konkreten Anlage. Ein gesetzlich vorgeschriebenes Energieaudit ersetzt es nicht — es liefert die ingenieurtechnische Tiefenanalyse darüber hinaus.'],
  ['Wie validiert Energy die Berechnungen?', 'In mehreren Stufen: Die Rohdaten werden auf Lücken und Ausreisser geprüft, jede Berechnung gegen physikalische Grenzen und recherchierte Richtwerte abgeglichen, und die Ergebnisse iterativ nachgerechnet, bis sie konsistent sind. Jede Berechnung ist mit Methode und Quelle im Bericht dokumentiert.'],
  ['Kann ich die Zahlen nachvollziehen?', 'Ja. Jede Aussage referenziert die zugrundeliegende Berechnung und Quelle. Alle Diagramme werden aus Ihren Originalmessdaten erzeugt — nicht aus aggregierten Durchschnitten.'],
  ['Was, wenn die Analyse falsch liegt?', 'Sie erhalten den Bericht zur finalen Prüfung vor jeder Weitergabe. Energy beschleunigt die Auswertung — die fachliche Verantwortung bleibt bei Ihnen.'],
  ['Wie unterscheidet sich das von ChatGPT?', 'Ein Chatbot formuliert Text. Energy durchläuft einen definierten, validierten Analyseprozess: Berechnungen aus Ihren Echtdaten, gegen Normen und Grenzen geprüft, nachvollziehbar dokumentiert — reproduzierbar statt frei erfunden.'],
  ['Was passiert mit meinen Daten?', 'Gehostet in der EU, DSGVO-konform. Ihre Messdaten werden nicht an Dritte weitergegeben und nicht zum Training von KI-Modellen verwendet.'],
]

function ImageFrame({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-white/15 shadow-[0_0_40px_rgba(222,193,94,0.10)] bg-navy-mid">
      <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto" />
    </div>
  )
}

export default function EnergyPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title={product.name}
        titleHtml={product.nameHtml}
        subtitle="Alles, was Sie über Ihre Anlage haben, wird zu einer belastbaren, anlagenspezifischen Energieanalyse — keine Formular-Auswertung, sondern individuell wie von einem Ingenieur. Sie prüfen und verantworten."
        status={{ status: product.status, label: product.statusLabel }}
      />

      {/* Kennzahlen + Trust */}
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

      {/* Jede Anlage ist anders — Abgrenzung + Projektkontext */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Energiebericht ist nicht gleich Energiebericht.</h2>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">
              Im Gebäude- und Anlagenbereich gibt es sehr unterschiedliche energiebezogene Dokumente — von gesetzlichen Pflicht-Formularen bis zur freien, datengetriebenen Ingenieuranalyse. WerkING Energy gehört klar zur zweiten Kategorie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {LANDSCAPE.map((c) => (
              <div key={c.name} className={`rounded-2xl p-6 ${c.highlight ? 'border-2 border-gold/30 bg-navy' : 'border border-black/5 bg-bg-light'}`}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${c.highlight ? 'text-gold' : 'text-text-muted'}`}>{c.tag}</span>
                <h3 className={`font-heading text-lg font-semibold mt-1 mb-2 ${c.highlight ? 'text-white' : 'text-navy'}`}>{c.name}</h3>
                <p className={`text-sm leading-relaxed ${c.highlight ? 'text-white/65' : 'text-text-muted'}`}>{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted max-w-2xl mx-auto mb-14">
            Pflicht-Dokumente wie Energieausweis oder normiertes Audit ersetzt WerkING Energy nicht — es liefert die anlagenspezifische Tiefenanalyse, die darüber hinausgeht.
          </p>

          <div className="rounded-2xl bg-bg-light border border-black/5 p-8">
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Alle Unterlagen rein, belastbare Analyse raus.</h3>
            <p className="text-text-muted text-sm mb-5">Laden Sie hoch, was Sie einem Ingenieur auch zeigen würden — je mehr Kontext, desto präziser die Analyse. Das Format spielt keine Rolle.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {UPLOAD_KONTEXT.map((u) => (
                <div key={u} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm text-text-body">{u}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8-Phasen-Pipeline — Trust-Anker */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Wie Energy analysiert</h2>
            <p className="text-white/55 mt-3 max-w-2xl mx-auto">
              Keine Black Box, sondern ein strukturierter Ingenieurprozess in acht Phasen — genau die Schritte, die Sie manuell auch gehen würden, nur schneller. Jede Phase baut auf den geprüften Ergebnissen der vorigen auf.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {PHASES.map(([t, d], i) => (
              <div key={t} className="flex gap-4 rounded-xl border border-white/10 bg-navy-mid p-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gold/15 text-gold font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">{t}</h3>
                  <p className="text-sm text-white/55 mt-1 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-white/45 mt-8 max-w-2xl mx-auto">
            Jede Phase sichert ihren Zustand als Checkpoint — nach einer Unterbrechung setzt die Analyse exakt dort fort. Nach Phase 8 entstehen daraus Report-Varianten: Executive Summary, technische Kurzfassung und Detailbericht.
          </p>
        </div>
      </section>

      {/* Keine Black Box / ChatGPT-Unterschied */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Warum Sie den Zahlen vertrauen können</h2>
            <p className="text-text-muted mt-3 max-w-2xl mx-auto">Was Energy von einem generischen Chatbot unterscheidet.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {BLACKBOX.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-black/5 bg-bg-light p-6">
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{t}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 w-full">
              <ImageFrame src="/images/products/energy-schema.webp" alt="Erkannte Anlagentopologie — editierbares Schema" w={1210} h={810} />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold text-navy mb-3">Die KI versteht Ihre Anlage</h3>
              <p className="text-text-body leading-relaxed">
                Energy leitet die Anlagentopologie aus Daten und Dokumenten ab — Heizkreise, Vor- und Rücklauf, Zähler und Leistungssensoren — und ordnet sie physikalischen Grössen zu. Das Ergebnis ist ein editierbares Schema, das Sie prüfen und korrigieren. So bauen alle weiteren Berechnungen auf einem von Ihnen bestätigten Modell auf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Schritt Wizard */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="gold-line-center" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">In 5 Schritten zur Analyse</h2>
            <p className="text-white/50 mt-3">Sie führen durch die Eingaben — die Analyse übernimmt die Pipeline.</p>
          </div>
          <div className="space-y-16">
            {WIZARD.map((s, i) => (
              <div key={s.n} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-10 items-center`}>
                <div className="flex-1 w-full">
                  <ImageFrame src={s.screenshot} alt={`Schritt ${s.n}: ${s.title}`} w={s.w} h={s.h} />
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
          <div className="mt-12 max-w-3xl mx-auto text-center rounded-2xl border border-gold/25 bg-gold/5 px-8 py-7">
            <p className="font-heading text-lg font-semibold text-white">Schritt 4 &amp; 5: Behauptungen bestätigen, dann läuft die Pipeline.</p>
            <p className="text-white/60 mt-2">Die KI formuliert überprüfbare Behauptungen über Systeme und Verbrauch — Sie bestätigen, korrigieren oder verwerfen. Erst danach startet die 8-Phasen-Analyse.</p>
          </div>
        </div>
      </section>

      {/* KI-Editor */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 w-full">
              <ImageFrame src="/images/products/energy-ki-editor.webp" alt="Arbeitsbereich mit abgeschlossener Analyse und KI-Editor" w={1190} h={578} />
            </div>
            <div className="flex-1">
              <div className="gold-line" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3">Bearbeiten und nachfragen im Editor</h2>
              <p className="text-text-body leading-relaxed mb-6">
                Der fertige Bericht öffnet in einem Rich-Text-Editor mit direktem KI-Zugang. Textstellen markieren, Abschnitte neu formulieren lassen, Fragen zum Bericht stellen — alles versioniert.
              </p>
              <ul className="space-y-3 text-text-muted">
                <li><span className="font-semibold text-navy">KI-Chat:</span> über den Bericht diskutieren, Abschnitte erklären oder neu schreiben lassen.</li>
                <li><span className="font-semibold text-navy">Versionierung:</span> jede KI-Bearbeitung wird festgehalten, Versionen vergleichbar.</li>
                <li><span className="font-semibold text-navy">Quellenansicht:</span> alle Messdaten-Belege direkt im Editor — für nachvollziehbare Aussagen.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
            <div className="w-full lg:w-[44%]">
              <ImageFrame src="/images/products/energy-a4.webp" alt="Beispiel-Analysebericht (LBNL Chiller Plant) als A4-Dokument" w={1240} h={1692} />
            </div>
            <div className="flex-1">
              <div className="gold-line" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">Ein vollständiger technischer Energiebericht</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Druckfertig als A4-PDF — mit Diagrammen aus Ihren Messdaten, Analysebefunden, quantifizierten Einsparpotenzialen und konkreten Handlungsempfehlungen. Als Word-Dokument weiterbearbeitbar.
              </p>
              <ul className="space-y-3 text-white/55">
                <li><span className="font-semibold text-white">Diagramme aus Ihren Daten:</span> Lastgänge, Zeitreihen, Auswertungen — kein Template.</li>
                <li><span className="font-semibold text-white">Report-Varianten:</span> Executive Summary, technische Kurzfassung und Detailbericht.</li>
                <li><span className="font-semibold text-white">Export:</span> PDF (druckfertig) und Word (weiterbearbeitbar).</li>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Sie prüfen. Sie verantworten.</h2>
            <p className="text-white/55 mt-3 max-w-2xl mx-auto">Energy ist ein Werkzeug, kein Ersatz für Ihr Fachwissen — die letzte Beurteilung liegt bei Ihnen.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-navy p-6">
              <h3 className="font-heading text-base font-semibold text-white mb-2">Nachvollziehbarkeit</h3>
              <p className="text-sm text-white/60">Jede Berechnung mit Methode und Quelle dokumentiert, jedes Diagramm aus Ihren Originaldaten, jede Phase als Checkpoint nachvollziehbar.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy p-6">
              <h3 className="font-heading text-base font-semibold text-white mb-2">DSGVO &amp; EU-Hosting</h3>
              <p className="text-sm text-white/60">Gehostet in der EU. Ihre Messdaten werden nicht an Dritte weitergegeben und nicht zum Training von KI-Modellen verwendet.</p>
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
