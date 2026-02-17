import type { Metadata } from 'next'
import ProductPage from '@/components/product/ProductPage'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.report

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: 'Technische Gutachten KI-gestützt erstellen. Eigene Dokumenttypen, Stilerkennung, reproduzierbare Berichte. Von Ingenieuren für Ingenieure.',
  openGraph: {
    title: `${product.name} — ${product.tagline}`,
    description: 'Technische Gutachten KI-gestützt erstellen. Eigene Dokumenttypen, Stilerkennung, reproduzierbare Berichte.',
  },
  alternates: { canonical: '/report' },
}

export default function ReportPage() {
  return <ProductPage product={product} />
}
