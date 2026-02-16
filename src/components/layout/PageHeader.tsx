import StatusBadge from '@/components/shared/StatusBadge'
import { type ProductStatus } from '@/lib/products'

type PageHeaderProps = {
  title: string
  titleHtml?: string
  subtitle: string
  status?: { status: ProductStatus; label: string }
}

export default function PageHeader({ title, titleHtml, subtitle, status }: PageHeaderProps) {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-navy opacity-90" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="gold-line-center" />
        {status && (
          <div className="mb-4">
            <StatusBadge status={status.status} label={status.label} />
          </div>
        )}
        {titleHtml ? (
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: titleHtml }} />
        ) : (
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        )}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}
