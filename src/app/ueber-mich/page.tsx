import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeader from '@/components/layout/PageHeader'
import { FOUNDER } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${FOUNDER.name} — WerkING Tools`,
  description: FOUNDER.title,
}

const credentialIcons: Record<string, React.ReactNode> = {
  graduation: (
    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
}

const expertiseIcons = [
  // Book
  <svg key="book" className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>,
  // Building
  <svg key="building" className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>,
  // Code
  <svg key="code" className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
]

export default function UeberMichPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title={FOUNDER.name}
        subtitle={FOUNDER.title}
      />

      {/* Main About */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Photo */}
            <div className="w-64 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <Image
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="gold-line" />
              <span className="text-gold font-semibold uppercase tracking-widest text-sm">Über mich</span>
              <h2 className="font-heading text-3xl font-bold text-navy mt-3 mb-6">{FOUNDER.title}</h2>

              <p className="text-text-body leading-relaxed text-lg mb-4">{FOUNDER.bio}</p>
              <p className="text-text-body leading-relaxed text-lg mb-8">{FOUNDER.bioSecond}</p>

              {/* Credentials */}
              <div className="flex flex-col gap-3">
                {FOUNDER.credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-bg-light border-l-[3px] border-gold">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      {credentialIcons[cred.icon]}
                    </div>
                    <span className="text-navy text-sm">{cred.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="gold-line-center" />
          <h2 className="font-heading text-2xl font-bold text-white text-center mb-12">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FOUNDER.expertise.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-gold/20 transition-all">
                <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-6">
                  {expertiseIcons[i]}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((listItem, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80 text-sm">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
