import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0F1E',
          borderRadius: '6px',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ fontSize: '20px', fontWeight: 700, color: '#DEC15E', lineHeight: 1 }}>
          W
        </span>
      </div>
    ),
    { ...size }
  )
}
