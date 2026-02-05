import Navber from '../components/layout/Navber';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';

const LandingPage = () => {
  return (
    <>
      <div className="mb-[100vh]">
        <Navber />
        <Hero />
        <Features />
      </div>
    </>
  );
};

export default LandingPage;
