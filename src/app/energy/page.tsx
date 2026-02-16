import type { Metadata } from 'next'
import ProductPage from '@/components/product/ProductPage'
import { PRODUCTS } from '@/lib/products'

const product = PRODUCTS.energy

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline}`,
  description: product.tagline,
}

export default function EnergyPage() {
  return <ProductPage product={product} />
}
