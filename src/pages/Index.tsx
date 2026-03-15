import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import TripPartners from "../components/TripPartners";
import Destinations from "../components/Destinations";
import DiscussionPreview from "../components/DiscussionPreview";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <TripPartners />
      <Destinations />
      <DiscussionPreview />
      <Footer />
    </div>
  );
};

export default Index;
