import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Screenshots sind bereits als optimierte webp in passender Größe abgelegt.
    // unoptimized umgeht den Next-Image-Optimizer — sonst leitet trailingSlash:true
    // den /_next/image-Endpoint per 308 um (Redirect vor jedem Bild → Bilder erscheinen
    // im Webview teilweise nicht, auch in Produktion). Direktauslieferung ist hier robuster.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
