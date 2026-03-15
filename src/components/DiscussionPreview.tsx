import { motion } from "framer-motion";
import { MessageCircle, ThumbsUp, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const discussions = [
  {
    title: "Best time to visit Santorini?",
    author: "Sarah C.",
    avatar: "SC",
    replies: 24,
    likes: 38,
    time: "2h ago",
    tags: ["Greece", "Planning"],
    preview: "I'm planning a trip in March. Is it too early for the tourist season or perfect for avoiding crowds?",
  },
  {
    title: "Bali on a budget - tips needed!",
    author: "Alex R.",
    avatar: "AR",
    replies: 31,
    likes: 52,
    time: "5h ago",
    tags: ["Bali", "Budget"],
    preview: "Looking to spend a month in Bali without breaking the bank. Any recommendations for affordable stays?",
  },
  {
    title: "Solo female traveler seeking group for Alps trek",
    author: "Yuki T.",
    avatar: "YT",
    replies: 18,
    likes: 45,
    time: "1d ago",
    tags: ["Alps", "Hiking", "Safety"],
    preview: "Planning a 5-day trek through the Swiss Alps. Would love to join a small group of 3-4 people.",
  },
];

const DiscussionPreview = () => {
  return (
    <section className="py-24" id="discussions">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trip Discussions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Share ideas, ask questions, and connect with fellow travelers
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {discussions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 card-elevated border border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {d.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-semibold text-foreground text-base">{d.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{d.preview}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {d.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                    ))}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground ml-auto">
                      <span className="flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" />{d.replies}</span>
                      <span className="flex items-center gap-1"><ThumbsUp className="h-3.5 w-3.5" />{d.likes}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{d.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">View All Discussions</Button>
        </div>
      </div>
    </section>
  );
};

export default DiscussionPreview;
