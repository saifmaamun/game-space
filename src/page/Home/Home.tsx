import CustomerFeedback from "../../components/ui/CustomerFeedback";
import FeaturedFacilities from "../../components/ui/Featuredfacilities";
import HeroSection from "../../components/ui/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <section className="hero bg-indigo-950 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold">
            Elevate Your Game with Premier Sports Facilities!
          </h1>
          <p className="text-lg my-4">
            Join our community and discover the perfect venue for your next
            sports event.
          </p>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-orange-500 transition">
            Explore Our Facilities
          </button>
        </div>
      </section> */}
      <FeaturedFacilities />
      <CustomerFeedback />
    </div>
  );
};

export default Home;
