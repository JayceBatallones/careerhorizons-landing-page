import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CompanyCarousel from '@/components/CompanyCarousel';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CompanyCarousel />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
