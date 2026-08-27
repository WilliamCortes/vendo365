import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
