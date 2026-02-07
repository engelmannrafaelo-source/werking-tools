import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Handschlagsqualitaet from '@/components/home/Handschlagsqualitaet'
import ProblemSection from '@/components/home/ProblemSection'
import WorkflowVsChatbot from '@/components/home/WorkflowVsChatbot'
import Platform from '@/components/home/Platform'
import Products from '@/components/home/Products'
import HowItWorks from '@/components/home/HowItWorks'
import Stats from '@/components/home/Stats'
import Trust from '@/components/home/Trust'
import KnowHow from '@/components/home/KnowHow'
import Foerderung from '@/components/home/Foerderung'
import AboutFounder from '@/components/home/AboutFounder'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Handschlagsqualitaet />
      <ProblemSection />
      <WorkflowVsChatbot />
      <Platform />
      <Products />
      <HowItWorks />
      <Stats />
      <Trust />
      <KnowHow />
      <Foerderung />
      <AboutFounder />
      <CTA />
      <Footer />
    </>
  )
}
