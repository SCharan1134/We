import Features from "../components/Features";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Navbar from "../components/Navbar";
import BrandCollaborations from "../components/brand-collaborations";

const Homepage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Impact />
      <Features />
      <BrandCollaborations />
    </div>
  );
};

export default Homepage;
