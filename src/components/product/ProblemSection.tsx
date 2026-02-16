export default function ProblemSection({ text }: { text: string }) {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="gold-line-center" />
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">Das Problem</h2>
        <p className="text-lg text-text-body leading-relaxed">{text}</p>
      </div>
    </section>
  )
}
