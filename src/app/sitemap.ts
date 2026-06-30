import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { PRODUCT_ORDER } from '@/lib/products'

// URLs mit Trailing-Slash — die Seite läuft mit next.config trailingSlash:true,
// die indexierbaren URLs enden also auf "/". Ohne Slash würde jede URL 308-redirecten.
// noindex-Seiten (Impressum, Datenschutz) und der /preise-Redirect-Stub gehören NICHT
// in die Sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE.url}/partner-plattform/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/datensicherheit/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}/ueber-mich/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}/kontakt/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const productPages: MetadataRoute.Sitemap = PRODUCT_ORDER.map((slug) => ({
    url: `${SITE.url}/${slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...productPages]
}
