import Link from 'next/link'

const FINDINGS = [
  { label: 'Datenpunkte/Sensor', value: '525.540' },
  { label: 'Technischer Bericht', value: '103 Seiten' },
  { label: 'Executive Summary', value: '22 Seiten' },
  { label: 'Analysedauer', value: '~40 Min' },
]

const KEY_RESULTS = [
  { value: '7,6x', desc: 'Uberdimensionierung identifiziert (1.758 kW installiert vs. 232 kW Spitzenlast)' },
  { value: '62%', desc: 'Pumpenlast am Gesamtverbrauch — Benchmark: 15-30%' },
  { value: '311-500 MWh', desc: 'Jahrliches Einsparpotenzial (46-73% des Gesamtverbrauchs)' },
  { value: '4 Befunde', desc: 'Teillastbetrieb, Low-Delta-T, parasitare Pumpen, Kuhlturm-Verschmutzung' },
]

export default function LbnlShowcase() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">
            Beispiel-Analyse: LBNL Chiller Plant
          </h2>
          <p className="text-text-muted mt-3 text-base max-w-3xl mx-auto">
            WerkING Energy analysiert das offentliche{' '}
            <span className="text-text-body font-medium">LBNL FDD Dataset</span>{' '}
            — ein validiertes digitales Zwillingsmodell (EnergyPlus-Modelica Co-Simulation) des
            Lawrence Berkeley National Laboratory. Grosses Burogebaude in Chicago, 46.320 m²,
            Kalteanlage mit 3 Zentrifugalkaltemaschinen.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {FINDINGS.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 text-center">
              <div className="text-2xl font-bold text-navy font-heading">{f.value}</div>
              <div className="text-xs text-text-muted mt-1">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Key Results */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-10">
          <h3 className="font-heading text-lg font-bold text-navy mb-6">Zentrale Ergebnisse</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {KEY_RESULTS.map((r, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-16 h-10 rounded-lg bg-gold/10 text-gold font-heading font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {r.value}
                </div>
                <p className="text-sm text-text-body leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Buttons + Status Badge */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/downloads/WerkING_Energy_LBNL_Executive.pdf"
              target="_blank"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Executive Summary (PDF)
            </Link>
            <Link
              href="/downloads/WerkING_Energy_LBNL_Full.pdf"
              target="_blank"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors no-underline border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Vollstandiger Bericht (103 S.)
            </Link>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-text-body">
              Stand: Februar 2026 — WerkING Energy ist in aktiver Entwicklung
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
