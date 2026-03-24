import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'aws Seedfinancing Pitch — WerkING Energy',
  description: 'KI-gestützte Energieberichterstellung für HVAC-Fachplaner. Von Betriebsdaten zum fertigen Ingenieurbericht — in 40 Minuten.',
  robots: { index: false, follow: false },
}

/* ─── Reusable tiny components ─── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-lg font-semibold text-navy mt-8 mb-3 pb-1.5 border-b-2 border-gold first:mt-0">
      {children}
    </h2>
  )
}

function PageNum({ n }: { n: number }) {
  return (
    <span className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-base shrink-0">
      {n}
    </span>
  )
}

function InfoBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-gold/10 border-l-4 border-gold rounded-r-xl py-3.5 px-5 my-4">
      <h4 className="text-navy text-[13px] font-semibold mb-1">{title}</h4>
      <p className="text-text-body text-xs leading-relaxed m-0">{children}</p>
    </div>
  )
}

function PageFooter({ page }: { page: number }) {
  return (
    <div className="mt-auto pt-5 flex justify-between items-center text-[10px] text-text-muted border-t border-bg-light">
      <span className="font-heading font-semibold tracking-tight">
        <span className="brand-outline-dark">Werk</span>
        <span className="brand-ing">ING</span>
        <span className="brand-outline-dark"> Energy</span>
      </span>
      <span>aws Seedfinancing Pitch</span>
      <span>Seite {page}</span>
    </div>
  )
}

/* ─── Main page ─── */

export default function SeedfinancingPage() {
  return (
    <>
      <Navbar />

      {/* ====== COVER ====== */}
      <section className="relative bg-gradient-to-br from-navy via-navy-mid to-navy min-h-screen flex flex-col items-center justify-center text-center text-white px-6 pt-24 pb-16 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(222,193,94,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(222,193,94,0.05)_0%,transparent_70%)] pointer-events-none" />

        <span className="relative z-10 inline-block bg-gold text-navy px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-[1.5px] mb-8">
          aws Seedfinancing — Innovative Solutions
        </span>

        <div className="gold-line-center relative z-10" />

        <h1 className="relative z-10 font-heading text-4xl md:text-5xl lg:text-[44px] font-bold mb-5 leading-tight">
          Werk<span className="text-gold">ING</span> Energy
        </h1>

        <p className="relative z-10 text-lg md:text-xl text-white/85 max-w-[650px] mb-12 leading-relaxed font-light">
          KI-gestützte Energieberichterstellung für HVAC-Fachplaner.<br />
          Von Betriebsdaten zum fertigen Ingenieurbericht — in 40&nbsp;Minuten.
        </p>

        <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-7 md:p-10 max-w-[700px] text-left mb-10">
          <p className="font-heading text-gold text-base font-medium italic mb-3">
            &bdquo;Ingenieure sollen Facharbeit machen, nicht Dokumente formatieren.&ldquo;
          </p>
          <p className="text-[13px] text-white/70 leading-relaxed m-0">
            WerkING Energy automatisiert den Arbeitsablauf eines HVAC-Fachplaners: Betriebsdaten hochladen, KI analysiert, Ingenieur prüft und gibt frei. 3–5 Tage manuelle Arbeit werden zu 40 Minuten Pipeline + Review.
          </p>
        </div>

        <p className="relative z-10 text-xs text-white/50">
          <strong className="text-white/70">Rafael Engelmann</strong> — Engelmann Data Energyneering ZT e.U.<br />
          Florianigasse 17/19, 1080 Wien &nbsp;|&nbsp; März 2026
        </p>
      </section>

      {/* ====== PAGE 1: DAS PROBLEM ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[960px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-[3px] border-bg-light">
            <span className="font-heading text-2xl font-bold text-navy">1. Das Problem</span>
            <PageNum n={1} />
          </div>

          {/* Dark formula box */}
          <div className="bg-navy text-white rounded-2xl p-6 md:p-7 font-heading text-[13px] leading-[1.8] mb-6">
            <span className="text-white/50 text-[11px]">DAS PROBLEM</span><br />
            Ingenieure verbringen einen <span className="text-gold text-lg font-semibold">erheblichen Teil</span> ihrer Arbeitszeit<br />
            mit Dokumentation statt mit Facharbeit.<br /><br />
            <span className="text-white/50 text-[11px]">EIN ENERGIEBERICHT DAUERT</span><br />
            <span className="text-gold text-[22px] font-semibold">3–5 Tage</span> manuelle Arbeit pro Gebäude<br />
            Daten aufbereiten, Berechnungen, Plots erstellen, Bericht schreiben.<br /><br />
            <span className="text-white/50 text-[11px]">DAS ERGEBNIS</span><br />
            Kleine &amp; mittlere Gebäude werden <span className="text-gold">nicht betreut</span> —<br />
            die Kosten für manuelle Analyse sind zu hoch.
          </div>

          <SectionTitle>Der konkrete Arbeitsablauf eines Fachplaners</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">#</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold">Schritt</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold">Heute (manuell)</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Mit WerkING Energy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Betriebsdaten entgegennehmen', 'Excel manuell sichten, Spalten interpretieren', 'KI-Konversation mit Confidence-Scores'],
                  ['2', 'Systeme identifizieren', 'Stunden in Spreadsheets', 'Automatische Extraktion'],
                  ['3', 'Berechnungen durchführen', 'Eigene Excel-Formeln, fehleranfällig', 'Selbstkorrigierende Formelentdeckung'],
                  ['4', 'Anomalien identifizieren', 'Erfahrungsbasiert, subjektiv', 'Hypothesengetriebene Analyse mit Plots'],
                  ['5', 'Maßnahmen bewerten', 'Recherche + manuelle ROI-Berechnung', 'Automatische Recherche + Berechnung'],
                ].map(([n, step, today, werking]) => (
                  <tr key={n} className="border-b border-bg-light even:bg-bg-light">
                    <td className="py-2.5 px-3.5">{n}</td>
                    <td className="py-2.5 px-3.5">{step}</td>
                    <td className="py-2.5 px-3.5">{today}</td>
                    <td className="py-2.5 px-3.5">{werking}</td>
                  </tr>
                ))}
                <tr className="bg-gold/10 font-semibold border-b border-bg-light">
                  <td className="py-2.5 px-3.5 rounded-bl-lg">6</td>
                  <td className="py-2.5 px-3.5">Bericht schreiben</td>
                  <td className="py-2.5 px-3.5">1–2 Tage Word/PDF</td>
                  <td className="py-2.5 px-3.5 rounded-br-lg">Automatische Generierung mit Plots</td>
                </tr>
              </tbody>
            </table>
          </div>

          <InfoBox title="3–5 Tage → 40 Minuten Pipeline + Ingenieur-Review">
            Der Ingenieur prüft und gibt frei (Human-in-the-Loop). Die Pipeline macht die Analyse — die fachliche Verantwortung bleibt beim Ingenieur.
          </InfoBox>

          <PageFooter page={1} />
        </div>
      </section>

      {/* ====== PAGE 2: CHATBOT VS. WORKFLOW ====== */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-[960px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-[3px] border-white">
            <span className="font-heading text-2xl font-bold text-navy">2. Was ist ein Workflow?</span>
            <PageNum n={2} />
          </div>

          <p className="text-sm text-text-muted mb-6 leading-relaxed">
            WerkING Energy ist <strong className="text-navy">kein Chatbot</strong> und <strong className="text-navy">kein KI-Assistent</strong>. Es ist eine deterministische Software-Pipeline mit definierten Ein- und Ausgaben pro Phase.
          </p>

          <SectionTitle>Chatbot vs. Workflow-Pipeline</SectionTitle>

          <div className="grid md:grid-cols-2 gap-5 my-4">
            {/* Problem */}
            <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200/30">
              <h4 className="font-heading text-[13px] font-semibold text-red-600 mb-3">Chatbot / KI-Agent</h4>
              <ul className="space-y-1.5 text-[11.5px] text-text-body list-none p-0 m-0">
                <li className="py-1">&#10007; Nutzer formuliert Fragen</li>
                <li className="py-1">&#10007; KI improvisiert Antworten</li>
                <li className="py-1">&#10007; Nicht reproduzierbar</li>
                <li className="py-1">&#10007; Keine Validierung</li>
                <li className="py-1">&#10007; 40%+ Projekte scheitern (Gartner 2026)</li>
              </ul>
            </div>
            {/* Solution */}
            <div className="p-5 rounded-2xl bg-green-50/50 border border-green-200/30">
              <h4 className="font-heading text-[13px] font-semibold text-green mb-3">WerkING Workflow-Pipeline</h4>
              <ul className="space-y-1.5 text-[11.5px] text-text-body list-none p-0 m-0">
                <li className="py-1">&#10003; Definierter Prozess, kein Prompting</li>
                <li className="py-1">&#10003; Jede Phase hat Input/Output-Vertrag</li>
                <li className="py-1">&#10003; Gleiche Daten = gleiche Analyse</li>
                <li className="py-1">&#10003; Validierung pro Phase</li>
                <li className="py-1">&#10003; Production-proven mit echten Daten</li>
              </ul>
            </div>
          </div>

          <SectionTitle>Die 8-Phasen-Pipeline</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
            {[
              { n: '1', title: 'Datenverständnis', desc: 'HVAC-Systeme aus Messdaten extrahieren', loop: false },
              { n: '2', title: 'Recherche', desc: 'Normen & Referenzwerte automatisch', loop: false },
              { n: '3', title: 'Datenqualität', desc: '4-Step-Prüfung (Lücken, Plausibilität)', loop: false },
              { n: '4 ⟳', title: 'Formeln', desc: 'Selbstkorrigierend: generiert, testet, validiert', loop: true },
              { n: '5 ⟳', title: 'Verhalten', desc: 'Hypothesen aufstellen, prüfen, akkumulieren', loop: true },
              { n: '6', title: 'Einspar-Recherche', desc: 'Maßnahmen passend zu Problemen', loop: false },
              { n: '7', title: 'Berechnung', desc: 'ROI, Amortisation, CO₂', loop: false },
              { n: '8', title: 'Bericht', desc: 'HTML + PDF mit Visualisierungen', loop: false },
            ].map((step) => (
              <div
                key={step.n}
                className={`rounded-xl p-3.5 text-center border-2 ${
                  step.loop
                    ? 'border-green bg-green/5'
                    : 'border-transparent bg-white'
                }`}
              >
                <div className={`font-heading text-xl font-bold mb-1 ${step.loop ? 'text-green' : 'text-gold'}`}>
                  {step.n}
                </div>
                <h4 className="text-[11px] font-semibold text-navy mb-1">{step.title}</h4>
                <p className="text-[10px] text-text-muted m-0 leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>

          <InfoBox title="Selbstkorrigierende Schleifen (Phase 4 & 5)">
            Die KI generiert physikalische Formeln, führt sie als Python-Code aus, erstellt Plots und validiert die Ergebnisse visuell (Vision-API). Scheitert eine Formel, wird der Fehler an die nächste Iteration weitergegeben. Typisch: 3–5 Iterationen bis Konvergenz. Das ist keine einfache KI-Anwendung — es ist ein <strong>sich selbst korrigierender Analyseprozess</strong>.
          </InfoBox>

          <PageFooter page={2} />
        </div>
      </section>

      {/* ====== PAGE 3: MARKT & WETTBEWERB ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[960px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-[3px] border-bg-light">
            <span className="font-heading text-2xl font-bold text-navy">3. Markt &amp; Wettbewerb</span>
            <PageNum n={3} />
          </div>

          <p className="text-sm text-text-muted mb-6 leading-relaxed">
            Drei unabhängige Marktrecherchen (März 2026) bestätigen: <strong className="text-navy">Kein kommerzielles Produkt automatisiert diesen End-to-End-Workflow.</strong>
          </p>

          <SectionTitle>Die 4 Marktsegmente — und wo WerkING Energy steht</SectionTitle>

          <div className="grid md:grid-cols-2 gap-3 my-4">
            {[
              { title: '1. Gebäudeautomation & Steuerung', desc: 'Echtzeit-HVAC-Regelung. Steuern, analysieren nicht. Kein Bericht.', examples: 'BrainBox AI, PassiveLogic ($74M), Phaidra ($50M+)', highlight: false },
              { title: '2. Monitoring & Dashboards', desc: 'Daten visualisieren, Alerts. Zeigen Daten, interpretieren nicht.', examples: 'Verdigris ($45M), CopperTree, GridPoint, eSight', highlight: false },
              { title: '3. ESG & Compliance', desc: 'CO₂-Bilanzierung. Portfolio-KPIs, keine HVAC-Analyse.', examples: 'Deepki (EUR 150M), IBM TRIRIGA, Honeywell Forge', highlight: false },
              { title: '4. Normen-Software', desc: 'Energieausweise. Manuelle Eingabe, berechnet nach Norm.', examples: 'ArchiPHYSIK, IES Virtual Environment, BEopt', highlight: false },
            ].map((seg) => (
              <div key={seg.title} className="bg-bg-light rounded-xl p-4 border-l-4 border-bg-light">
                <h4 className="text-xs font-semibold text-navy mb-1">{seg.title}</h4>
                <p className="text-[11px] text-text-body m-0"><strong>{seg.desc}</strong></p>
                <p className="text-[10px] text-text-muted mt-1 m-0">{seg.examples}</p>
              </div>
            ))}
            {/* WerkING position */}
            <div className="md:col-span-2 bg-gold/5 rounded-xl p-4 border-l-4 border-gold">
              <h4 className="text-xs font-semibold text-navy mb-1">WerkING Energy — einzigartige Position</h4>
              <p className="text-[11px] text-text-body m-0">
                <strong>Betriebsdaten rein → Ingenieurbericht raus.</strong> Physikalische Berechnungen automatisiert, selbstkorrigierende Analyse, Human-in-the-Loop. Keines der genannten Produkte adressiert diesen konkreten Workflow.
              </p>
            </div>
          </div>

          <SectionTitle>Die nächsten Nachbarn</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Anbieter</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold">Was sie machen</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Entscheidender Unterschied</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Trane TCPA', 'Kurzaudits für Kälteanlagen', 'Braucht eigene Hardware, nur Kälte'],
                  ['GridPoint', 'HVAC-Diagnosetests', 'Einzelgeräte, keine systemweite Analyse'],
                  ['CopperTree/Kaizen', 'Fault Detection & Diagnostics', 'Erkennt Fehler, erstellt keine Berichte'],
                ].map(([name, what, diff]) => (
                  <tr key={name} className="border-b border-bg-light even:bg-bg-light">
                    <td className="py-2.5 px-3.5 font-semibold">{name}</td>
                    <td className="py-2.5 px-3.5">{what}</td>
                    <td className="py-2.5 px-3.5">{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle>Warum existiert diese Lücke?</SectionTitle>

          <div className="grid md:grid-cols-2 gap-5 my-4">
            <div>
              <h3 className="text-sm font-semibold text-navy mb-2">Komplexität</h3>
              <p className="text-xs text-text-body leading-relaxed">
                Jedes Gebäude hat andere Sensoren, andere Systeme, andere Datenformate. Ein universeller Parser erfordert Domänenwissen + KI.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy mb-2">Seltene Kombination</h3>
              <p className="text-xs text-text-body leading-relaxed">
                Man braucht gleichzeitig HVAC-Fachkenntnis, Software-Engineering und KI-Erfahrung. Das ist am Markt selten.
              </p>
            </div>
          </div>

          <SectionTitle>Zielgruppen (DACH)</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Segment</th>
                  <th className="py-2.5 px-3.5 text-right font-semibold">Österreich</th>
                  <th className="py-2.5 px-3.5 text-right font-semibold rounded-tr-lg">DACH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-bg-light">
                  <td className="py-2.5 px-3.5">Energieberater</td>
                  <td className="py-2.5 px-3.5 text-right">~500</td>
                  <td className="py-2.5 px-3.5 text-right">~30.000</td>
                </tr>
                <tr className="border-b border-bg-light bg-bg-light">
                  <td className="py-2.5 px-3.5">Ziviltechniker</td>
                  <td className="py-2.5 px-3.5 text-right">~5.000</td>
                  <td className="py-2.5 px-3.5 text-right">~50.000</td>
                </tr>
                <tr className="bg-gold/10 font-semibold">
                  <td className="py-2.5 px-3.5 rounded-bl-lg">Ingenieurbüros gesamt</td>
                  <td className="py-2.5 px-3.5 text-right">~6.000</td>
                  <td className="py-2.5 px-3.5 text-right rounded-br-lg">~100.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <PageFooter page={3} />
        </div>
      </section>

      {/* ====== PAGE 4: STATUS & PRODUKTE ====== */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-[960px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-[3px] border-white">
            <span className="font-heading text-2xl font-bold text-navy">4. Was heute steht</span>
            <PageNum n={4} />
          </div>

          <p className="text-sm text-text-muted mb-6 leading-relaxed">
            <strong className="text-navy">WerkING Tools</strong> ist die Produktmarke. WerkING Energy ist das Kernprodukt für die aws-Förderung — eingebettet in eine Produktfamilie, die alle auf derselben Technologie-Plattform aufbauen.
          </p>

          <SectionTitle>Produktfamilie</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Produkt</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold">Was es tut</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gold/10 font-semibold border-b border-bg-light">
                  <td className="py-2.5 px-3.5">WerkING Energy</td>
                  <td className="py-2.5 px-3.5">Energieberichte aus HVAC-Betriebsdaten (8-Phasen-Pipeline)</td>
                  <td className="py-2.5 px-3.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-gold/20 text-[#b8a040]">Prototyp</span>
                  </td>
                </tr>
                <tr className="border-b border-white even:bg-white">
                  <td className="py-2.5 px-3.5 font-semibold">WerkING Report</td>
                  <td className="py-2.5 px-3.5">Gutachten &amp; technische Berichte automatisiert erstellen</td>
                  <td className="py-2.5 px-3.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-blue-100 text-blue-600">Beta</span>
                  </td>
                </tr>
                <tr className="border-b border-white even:bg-white">
                  <td className="py-2.5 px-3.5 font-semibold">WerkING Safety</td>
                  <td className="py-2.5 px-3.5">CE-Risikoanalysen mit Vision-AI</td>
                  <td className="py-2.5 px-3.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-orange-100 text-orange-600">In Entwicklung</span>
                  </td>
                </tr>
                <tr className="border-b border-white even:bg-white">
                  <td className="py-2.5 px-3.5 font-semibold">WerkING Noise</td>
                  <td className="py-2.5 px-3.5">Kartenbasierte Lärmberechnung</td>
                  <td className="py-2.5 px-3.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-orange-100 text-orange-600">In Entwicklung</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionTitle>WerkING Energy — Prototyp-Phase</SectionTitle>

          <InfoBox title="Pipeline funktioniert, erste echte Berichte werden generiert">
            Die 8-Phasen-Pipeline ist produktiv lauffähig. Referenzkunde <strong>ECO Energy Group</strong>: 4 bezahlte Rechnungen (EUR 14.450, 2025). Aktuell werden die ersten Berichte mit echten Gebäudedaten neuer Partner generiert. Der Prototyp läuft, ist aber noch nicht als Self-Service nutzbar — jeder Report wird aktuell vom Gründer begleitet.
          </InfoBox>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Was funktioniert</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Was noch fehlt</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['8-Phasen-Pipeline end-to-end', 'Self-Service-Onboarding'],
                  ['Wizard (Daten-Upload, KI-Konversation, Review)', 'Automatisches Billing'],
                  ['Referenzkunde mit echtem Revenue', 'Weitere Gebäudetypen (Wohnung, Büro, öffentlich)'],
                  ['AI-Bridge (EU-gehostet, PII-Anonymisierung)', 'Support-Struktur & Dokumentation'],
                  ['Interaktiver HTML/PDF-Bericht', '1–2 Entwickler für die Skalierung'],
                ].map(([works, missing]) => (
                  <tr key={works} className="border-b border-bg-light even:bg-bg-light/50">
                    <td className="py-2.5 px-3.5">{works}</td>
                    <td className="py-2.5 px-3.5">{missing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle>Plattform-Infrastruktur</SectionTitle>
          <p className="text-xs text-text-body leading-relaxed">
            Alle Produkte teilen dieselbe Infrastruktur: AI-Backend (eigener EU-Server), Deployment-Pipeline, Payment-Integration, Test-System. Ein neues Produkt auf der Plattform zu bauen bedeutet primär fachliche Konfiguration, nicht Software-Neuentwicklung.
          </p>

          <SectionTitle>Kosten-Vergleich</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg"></th>
                  <th className="py-2.5 px-3.5 text-left font-semibold">Manuell</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">WerkING Energy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-bg-light">
                  <td className="py-2.5 px-3.5 font-semibold">Professioneller Energiebericht</td>
                  <td className="py-2.5 px-3.5">EUR 3.000–6.000, mehrere Tage</td>
                  <td className="py-2.5 px-3.5 font-semibold">EUR 1.000, ~40 Min. + Review</td>
                </tr>
                <tr className="border-b border-bg-light bg-bg-light">
                  <td className="py-2.5 px-3.5 font-semibold">Energieausweis (ArchiPHYSIK)</td>
                  <td className="py-2.5 px-3.5" colSpan={2}>EUR 250–1.000 — nur Normen-Compliance, keine Betriebsdatenanalyse</td>
                </tr>
              </tbody>
            </table>
          </div>

          <PageFooter page={4} />
        </div>
      </section>

      {/* ====== PAGE 5: UNTERNEHMEN & GRÜNDER ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[960px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-[3px] border-bg-light">
            <span className="font-heading text-2xl font-bold text-navy">5. Unternehmen &amp; Gründer</span>
            <PageNum n={5} />
          </div>

          <SectionTitle>Unternehmen</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Aspekt</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Firma', 'Engelmann Data Energyneering ZT e.U.'],
                  ['Gründer', 'DI Dr. techn. Rafael Engelmann'],
                  ['Gegründet', '26.04.2022 (47 Monate)'],
                  ['Rechtsform', 'e.U. (GmbH-Gründung geplant)'],
                  ['Standort', 'Florianigasse 17/19, 1080 Wien'],
                  ['FN', '630049 v'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-bg-light even:bg-bg-light">
                    <td className="py-2.5 px-3.5">{label}</td>
                    <td className="py-2.5 px-3.5">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle>Gründer</SectionTitle>

          <p className="text-xs text-text-body leading-relaxed mb-4">
            Die seltene Kombination aus <strong>Ingenieur-Domänenwissen</strong> und <strong>Software-Kompetenz</strong> ist der wesentliche Wettbewerbsvorteil:
          </p>

          <div className="grid md:grid-cols-2 gap-5 my-4">
            <div>
              <h3 className="text-sm font-semibold text-navy mb-2">Engineering</h3>
              <ul className="text-xs text-text-body space-y-1.5 pl-4">
                <li><strong>Doktorat Maschinenbau</strong> (TU Wien, 4 Jahre Forschung)</li>
                <li>5 Peer-Reviewed Publikationen, 1 Patent</li>
                <li><strong>Ziviltechniker</strong> für Maschinenbau seit Mai 2024</li>
                <li>Referenzen: Otto-Wagner Areal, Raiffeisen Linz</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy mb-2">Software</h3>
              <ul className="text-xs text-text-body space-y-1.5 pl-4">
                <li>Fullstack: React, TypeScript, Python, Node.js</li>
                <li>KI-Integration: Claude API, AWS Bedrock</li>
                <li>Cloud: Vercel, Docker, Hetzner</li>
                <li>Gesamte Plattform solo entwickelt</li>
              </ul>
            </div>
          </div>

          <SectionTitle>Finanzen (bootstrapped)</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Jahr</th>
                  <th className="py-2.5 px-3.5 text-right font-semibold">Umsatz</th>
                  <th className="py-2.5 px-3.5 text-right font-semibold">Gewinn</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Phase</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-bg-light">
                  <td className="py-2.5 px-3.5">2022</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 10.000</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 7.293</td>
                  <td className="py-2.5 px-3.5">Gründung</td>
                </tr>
                <tr className="border-b border-bg-light bg-bg-light">
                  <td className="py-2.5 px-3.5">2023</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 93.986</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 74.109</td>
                  <td className="py-2.5 px-3.5">IT-Consulting</td>
                </tr>
                <tr className="border-b border-bg-light">
                  <td className="py-2.5 px-3.5">2024</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 28.600</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 8.658</td>
                  <td className="py-2.5 px-3.5">Transition → ZT + Plattform</td>
                </tr>
                <tr className="bg-gold/10 font-semibold">
                  <td className="py-2.5 px-3.5 rounded-bl-lg">2025</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 35.320</td>
                  <td className="py-2.5 px-3.5 text-right">EUR 25.742</td>
                  <td className="py-2.5 px-3.5 rounded-br-lg">84% Software-Revenue</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[10px] text-text-muted mt-1">
            Quelle: E/A-Rechnungen, StB Pilsbacher. 2025 Software: ECO Energy EUR 14.5k, Engelmann AI Hub EUR 10k, Teufel TECC EUR 5k.
          </p>

          <SectionTitle>Team &amp; Partner</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Person</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold">Rolle</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rafael Engelmann', 'Gründer, Product Owner, Entwicklung', 'Solo-Gründer'],
                  ['Markus Plasser (ReFit Energy)', 'Sales-Partner + Fachpartner Energy', 'Vertrag in Vorbereitung'],
                  ['Herbert Teufel (TECC)', 'Fachpartner Safety', 'EUR 21k committed'],
                  ['Engelmann Energiesysteme', 'Entwicklungspartner', 'Separater Vertrag'],
                ].map(([person, role, status]) => (
                  <tr key={person} className="border-b border-bg-light even:bg-bg-light">
                    <td className="py-2.5 px-3.5 font-semibold">{person}</td>
                    <td className="py-2.5 px-3.5">{role}</td>
                    <td className="py-2.5 px-3.5">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <PageFooter page={5} />
        </div>
      </section>

      {/* ====== PAGE 6: WARUM AWS SEEDFINANCING ====== */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-[960px] mx-auto px-6 md:px-16">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-[3px] border-white">
            <span className="font-heading text-2xl font-bold text-navy">6. Warum aws Seedfinancing?</span>
            <PageNum n={6} />
          </div>

          <SectionTitle>Passung</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse my-3">
              <thead>
                <tr className="bg-navy text-white text-[11px] uppercase tracking-wide">
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tl-lg">Kriterium</th>
                  <th className="py-2.5 px-3.5 text-left font-semibold rounded-tr-lg">Erfüllung</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Linie', 'Innovative Solutions (nicht rückzahlbar)'],
                  ['Modul', 'Seedfinancing (Proof of Concept vorhanden)'],
                  ['Impact-Kategorie', 'Umwelt, Ressourcen, Klimaschutz'],
                  ['Förderhöhe', 'Bis EUR 356.000'],
                  ['PoC vorhanden?', 'Ja — lauffähige Pipeline, zahlender Referenzkunde'],
                  ['Innovationsgrad', 'Selbstkorrigierende KI-Schleifen mit visueller Validierung — kein vergleichbares Produkt am Markt'],
                  ['Klimarelevanz', 'Mehr Energieberichte → mehr identifizierte Einsparpotenziale → mehr Sanierungen'],
                ].map(([criterion, fulfillment]) => (
                  <tr key={criterion} className="border-b border-white even:bg-white">
                    <td className="py-2.5 px-3.5">{criterion}</td>
                    <td className="py-2.5 px-3.5">{fulfillment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionTitle>Wofür die Förderung</SectionTitle>

          <div className="grid md:grid-cols-3 gap-4 my-4">
            {[
              {
                phase: 'Priorität 1',
                title: 'Marktreife',
                items: ['Self-Service-Onboarding', 'Automatisches Billing', 'Support-Struktur'],
                style: 'bg-gold/5 border-2 border-gold',
                labelColor: 'text-[#b8a040]',
              },
              {
                phase: 'Priorität 2',
                title: 'Skalierung',
                items: ['Weitere Gebäudetypen', 'Marketing & Vertrieb DACH', '1–2 Entwickler einstellen'],
                style: 'bg-blue-50/50 border-2 border-blue-200/30',
                labelColor: 'text-blue-500',
              },
              {
                phase: 'Priorität 3',
                title: 'Zertifizierung',
                items: ['Normkonformität', 'Regulatorische Anerkennung', 'GmbH-Gründung'],
                style: 'bg-white border-2 border-bg-light',
                labelColor: 'text-text-muted',
              },
            ].map((card) => (
              <div key={card.title} className={`p-5 rounded-2xl ${card.style}`}>
                <div className={`text-[10px] uppercase tracking-[1px] mb-1.5 font-semibold ${card.labelColor}`}>
                  {card.phase}
                </div>
                <h4 className="font-heading text-sm text-navy mb-2">{card.title}</h4>
                {card.items.map((item) => (
                  <p key={item} className="text-[11px] text-text-body m-0 my-0.5">{item}</p>
                ))}
              </div>
            ))}
          </div>

          <SectionTitle>Klimaschutz-Bezug</SectionTitle>

          <div className="bg-navy text-white rounded-2xl p-6 md:p-7 font-heading text-[13px] leading-[1.8] my-4">
            <span className="text-white/50 text-[11px]">WIRKUNGSKETTE</span><br /><br />
            Automatisierung senkt Kosten pro Bericht<br />
            → Mehr Gebäude werden wirtschaftlich analysierbar<br />
            → Mehr <span className="text-gold font-semibold">Einsparpotenziale</span> identifiziert<br />
            → Mehr Sanierungen umgesetzt<br />
            → Weniger CO₂<br /><br />
            <span className="text-white/50 text-[11px]">PRO BERICHT</span><br />
            Durchschnittlich <span className="text-gold text-lg font-semibold">2–5 Tonnen CO₂/Jahr</span> Einsparung
          </div>

          <SectionTitle>Zur Rechtsform</SectionTitle>
          <p className="text-xs text-text-body leading-relaxed">
            Aktuell e.U. — GmbH-Gründung ist geplant und wird für Seedfinancing vorbereitet. Das Unternehmen ist 47 Monate alt (Gründung 26.04.2022), die 5-Jahres-Grenze (54 Monate) läuft im Oktober 2026.
          </p>

          {/* Contact card */}
          <div className="mt-10 text-center p-8 bg-white rounded-2xl">
            <p className="font-heading text-base font-semibold text-navy mb-2">Rafael Engelmann</p>
            <p className="text-xs text-text-muted mb-1">
              <a href="mailto:office@data-energyneering.at" className="text-blue-500 hover:text-blue-600 transition-colors no-underline">
                office@data-energyneering.at
              </a>
              &nbsp;|&nbsp; +43 676 542 3883
            </p>
            <p className="text-[11px] text-text-muted m-0">
              Engelmann Data Energyneering ZT e.U. &nbsp;|&nbsp; Florianigasse 17/19, 1080 Wien &nbsp;|&nbsp; FN 630049 v
            </p>
          </div>

          <PageFooter page={6} />
        </div>
      </section>

      <Footer />
    </>
  )
}
