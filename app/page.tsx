import Hero from '@/components/landing/Hero'
import Problem from '@/components/landing/Problem'
import Features from '@/components/landing/Features'
import WhoIsFor from '@/components/landing/WhoIsFor'
import HowItWorks from '@/components/landing/HowItWorks'
import About from '@/components/landing/About'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import LeadForm from '@/components/landing/LeadForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <WhoIsFor />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <LeadForm />
    </>
  )
}
