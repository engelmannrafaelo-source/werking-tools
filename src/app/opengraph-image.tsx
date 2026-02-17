import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'WerkING Tools — AI-Workflows mit Handschlagsqualität'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0A0F1E',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gold glow */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(222,193,94,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(222,193,94,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Gold line */}
        <div
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #DEC15E, #F1E28C)',
            marginBottom: '32px',
            borderRadius: '2px',
          }}
        />

        {/* Brand Name */}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '16px' }}>
          <span style={{ fontSize: '72px', fontWeight: 700, color: '#94a3b8', letterSpacing: '-2px' }}>
            Werk
          </span>
          <span style={{ fontSize: '72px', fontWeight: 700, color: '#DEC15E', letterSpacing: '-2px' }}>
            ING
          </span>
          <span style={{ fontSize: '72px', fontWeight: 700, color: '#94a3b8', letterSpacing: '-2px' }}>
            {' '}Tools
          </span>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: '28px', color: '#ffffff', fontWeight: 600, marginBottom: '12px', marginTop: '0' }}>
          AI-Workflows mit Handschlagsqualität.
        </p>

        {/* Subtitle */}
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginTop: '0' }}>
          Technische Gutachten · Energieberichte · Risikoanalysen · Lärmberechnung
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #DEC15E, transparent)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
