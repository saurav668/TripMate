import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import heroImg from "../assets/hero-travel.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Adventure travel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Find Your Perfect
            <br />
            <span className="italic">Travel Companion</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            Connect with like-minded travelers, plan trips together, and create unforgettable memories across the globe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-3xl mx-auto card-elevated"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <input type="text" placeholder="Where to?" className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <input type="text" placeholder="When?" className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <input type="text" placeholder="Group size" className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground" />
            </div>
            <Button className="h-full rounded-xl gap-2 text-sm">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 text-primary-foreground/70 text-sm"
        >
          <span>✈️ 12K+ Trips</span>
          <span>👥 50K+ Travelers</span>
          <span>🌍 180+ Countries</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
