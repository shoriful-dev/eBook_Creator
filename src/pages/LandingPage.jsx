import Navber from '../components/layout/Navber';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import Pricing from '../components/landing/Pricing';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <main className="overflow-hidden">
        <Navber />
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
