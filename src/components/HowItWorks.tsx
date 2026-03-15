
import { motion } from "framer-motion";
import { UserPlus, Search, MessageCircle, Plane } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create Profile", desc: "Set up your travel preferences and interests" },
  { icon: Search, title: "Find Partners", desc: "Browse travelers heading to your destination" },
  { icon: MessageCircle, title: "Discuss & Plan", desc: "Chat, share ideas, and plan your trip together" },
  { icon: Plane, title: "Travel Together", desc: "Hit the road with your new travel companion" },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/50" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Four simple steps to find your ideal travel buddy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-xs font-semibold text-primary mb-2">Step {i + 1}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
