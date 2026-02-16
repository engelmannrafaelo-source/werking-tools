import { type ProductStatus, getStatusColor } from '@/lib/products'

export default function StatusBadge({ status, label }: { status: ProductStatus; label: string }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${getStatusColor(status)}`}>
      {label}
    </span>
  )
}
