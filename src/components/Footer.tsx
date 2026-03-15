import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold text-background">TripMate</span>
            </div>
            <p className="text-sm text-background/50">
              Connecting travelers worldwide. Find your perfect trip partner today.
            </p>
          </div>
          {[
            { title: "Explore", links: ["Destinations", "Find Partners", "Discussions", "Safety"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
            { title: "Support", links: ["Help Center", "Contact", "Privacy", "Terms"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-background mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
          © 2026 TripMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
