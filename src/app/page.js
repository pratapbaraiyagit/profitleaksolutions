import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProfitLeakExplanation from '@/components/sections/ProfitLeakExplanation';
import OperatingPerspective from '@/components/sections/OperatingPerspective';
import WhyUs from '@/components/sections/WhyUs';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import ConversionCTA from '@/components/sections/ConversionCTA';
import FinalContact from '@/components/sections/FinalContact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProfitLeakExplanation />
        <OperatingPerspective />
        <WhyUs />
        <Services />
        <Process />
        <ConversionCTA />
        <FinalContact />
      </main>
      <Footer />
    </>
  );
}
