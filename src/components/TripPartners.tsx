import { motion } from "framer-motion";
import { MapPin, Star, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const partners = [
  {
    name: "Sarah Chen",
    avatar: "SC",
    location: "San Francisco, USA",
    destination: "Santorini, Greece",
    date: "Mar 2026",
    interests: ["Photography", "Hiking", "Food"],
    rating: 4.9,
    trips: 12,
    bio: "Adventure seeker who loves capturing golden hour moments.",
  },
  {
    name: "Alex Rivera",
    avatar: "AR",
    location: "Barcelona, Spain",
    destination: "Bali, Indonesia",
    date: "Apr 2026",
    interests: ["Surfing", "Yoga", "Culture"],
    rating: 4.8,
    trips: 8,
    bio: "Digital nomad looking for a surf buddy in Southeast Asia.",
  },
  {
    name: "Yuki Tanaka",
    avatar: "YT",
    location: "Tokyo, Japan",
    destination: "Swiss Alps",
    date: "May 2026",
    interests: ["Skiing", "Nature", "Cooking"],
    rating: 5.0,
    trips: 15,
    bio: "Mountain enthusiast dreaming of Alpine adventures.",
  },
  {
    name: "Priya Sharma",
    avatar: "PS",
    location: "Mumbai, India",
    destination: "Tokyo, Japan",
    date: "Jun 2026",
    interests: ["Anime", "Street Food", "Tech"],
    rating: 4.7,
    trips: 6,
    bio: "Culture explorer eager to experience Japanese traditions.",
  },
];

const colors = [
  { bg: "var(--primary)", text: "var(--primary-foreground)" },
  { bg: "var(--secondary)", text: "var(--secondary-foreground)" },
  { bg: "var(--warm)", text: "var(--warm-foreground)" },
  { bg: "var(--teal)", text: "var(--teal-foreground)" },
];
const TripPartners = () => {
  return (
    <section className="py-24" id="find-partners">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Meet Your Trip Partners
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Travelers looking for companions right now
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 card-elevated border border-border relative group"
            >
              <button className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-5 w-5" />
              </button>

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-4"
                style={{
                  backgroundColor: colors[i % colors.length].bg,
                  color: colors[i % colors.length].text,
                }}
              >
                {p.avatar}
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground">
                {p.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{p.bio}</p>

              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                <MapPin className="h-3 w-3" />
                <span>
                  Going to{" "}
                  <strong className="text-foreground">{p.destination}</strong>
                </span>
              </div>
              <div className="text-xs text-muted-foreground mb-4">{p.date}</div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.interests.map((int) => (
                  <Badge
                    key={int}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {int}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-1 text-xs">
                  <Star className="h-3.5 w-3.5 text-accent fill-accent" />
                  <span className="font-semibold text-foreground">
                    {p.rating}
                  </span>
                  <span className="text-muted-foreground">
                    · {p.trips} trips
                  </span>
                </div>
                <Button size="sm" variant="outline" className="text-xs h-8">
                  Connect
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Partners
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TripPartners;
