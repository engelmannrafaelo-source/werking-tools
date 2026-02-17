import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0F1E',
          borderRadius: '36px',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ fontSize: '110px', fontWeight: 700, color: '#DEC15E', lineHeight: 1 }}>
          W
        </span>
      </div>
    ),
    { ...size }
  )
}
