import Link from 'next/link'

type ProductCTAProps = {
  headline: string
  headlineHtml?: string
  buttonText: string
  buttonHref: string
}

export default function ProductCTA({ headline, headlineHtml, buttonText, buttonHref }: ProductCTAProps) {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {headlineHtml ? (
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8" dangerouslySetInnerHTML={{ __html: headlineHtml }} />
        ) : (
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">{headline}</h2>
        )}
        <Link
          href={buttonHref}
          className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors no-underline shadow-[0_4px_20px_rgba(222,193,94,0.4)] text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
