import { motion } from "framer-motion";
import { Users } from "lucide-react";
import destSantorini from "../assets/dest-santorini.jpg";
import destBali from "../assets/dest-bali.jpg";
import destAlps from "../assets/dest-alps.jpg";
import destTokyo from "../assets/dest-tokyo.jpg";

const destinations = [
  { name: "Santorini", country: "Greece", travelers: 234, img: destSantorini },
  { name: "Bali", country: "Indonesia", travelers: 189, img: destBali },
  { name: "Swiss Alps", country: "Switzerland", travelers: 156, img: destAlps },
  { name: "Tokyo", country: "Japan", travelers: 312, img: destTokyo },
];

const Destinations = () => {
  return (
    <section className="py-24 bg-muted/50" id="destinations">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trending Destinations
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Popular places where travelers are looking for companions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer card-elevated aspect-[3/4]"
            >
              <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-primary-foreground">{d.name}</h3>
                <p className="text-primary-foreground/70 text-sm">{d.country}</p>
                <div className="flex items-center gap-1.5 mt-2 text-primary-foreground/60 text-xs">
                  <Users className="h-3.5 w-3.5" />
                  <span>{d.travelers} travelers looking</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
