import CustomerFeedback from "../../components/ui/CustomerFeedback";
import FeaturedFacilities from "../../components/ui/Featuredfacilities";
import HeroSection from "../../components/ui/HeroSection";

const Home = () => {
  // Scroll to Top Button
  return (
    <div>
      <HeroSection />
      <FeaturedFacilities />
      <CustomerFeedback />
    </div>
  );
};

export default Home;
