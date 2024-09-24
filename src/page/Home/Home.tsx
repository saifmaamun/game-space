import CustomerFeedback from "../../components/ui/CustomerFeedback";
import FeaturedFacilities from "../../components/ui/FeaturedFacilities";
import HeroSection from "../../components/ui/HeroSection";
import HowItWorks from "../../components/ui/HowItWorks";

const Home = () => {
  // Scroll to Top Button
  return (
    <div>
      <HeroSection />
      <FeaturedFacilities />
      <HowItWorks />
      <CustomerFeedback />
    </div>
  );
};

export default Home;
