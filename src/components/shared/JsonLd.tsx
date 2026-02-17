import { SITE, FOUNDER } from '@/lib/constants'
import { PRODUCTS, PRODUCT_ORDER } from '@/lib/products'

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Florianigasse 17/19',
      addressLocality: 'Wien',
      postalCode: '1080',
      addressCountry: 'AT',
    },
    openingHours: 'Mo-Th 09:00-17:00, Fr 09:00-12:00',
    founder: {
      '@type': 'Person',
      name: FOUNDER.name,
      jobTitle: 'Ziviltechniker für Maschinenbau',
      url: `${SITE.url}/ueber-mich/`,
    },
    sameAs: [SITE.linkedin],
    areaServed: {
      '@type': 'Country',
      name: 'Austria',
    },
    knowsAbout: [
      'Engineering Automation',
      'AI Workflows',
      'Technische Gutachten',
      'Energieberichte',
      'Lärmberechnung',
      'Gefährdungsbeurteilung',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function ProductSchemas() {
  const schemas = PRODUCT_ORDER.map((key) => {
    const p = PRODUCTS[key]
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: p.name,
      description: p.tagline,
      url: `${SITE.url}${p.href}`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: 'Beta Testing — kostenlos',
        availability: p.status === 'live'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
      },
      author: {
        '@type': 'Person',
        name: FOUNDER.name,
      },
    }
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  )
}

function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'de-AT',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function JsonLd() {
  return (
    <>
      <OrganizationSchema />
      <ProductSchemas />
      <WebSiteSchema />
    </>
  )
}
