import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import WhyWorkflows from '@/components/home/WhyWorkflows'
import ProductGrid from '@/components/home/ProductGrid'
import Stats from '@/components/home/Stats'
import FounderTeaser from '@/components/home/FounderTeaser'
import CTA from '@/components/home/CTA'
import JsonLd from '@/components/shared/JsonLd'

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyWorkflows />
      <ProductGrid />
      <Stats />
      <FounderTeaser />
      <CTA />
      <Footer />
    </>
  )
}
