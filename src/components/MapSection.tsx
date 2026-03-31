import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => (
  <section className="py-16 sm:py-24 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Location</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
          Find Us on the Map
        </h2>
        <p className="text-muted-foreground mt-3 text-sm sm:text-base">
          Visit Alpha Practice at our conveniently located clinic in Rawalpindi.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Premium card wrapper */}
        <div className="bg-card rounded-2xl sm:rounded-3xl shadow-card-hover border border-border overflow-hidden">
          {/* Info bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-card-foreground text-sm sm:text-base">Alpha Practice</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">2nd Floor Plaza 19, Overseas 5 Commercial, Bahria Phase 8, Rawalpindi</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2 shrink-0" asChild>
              <a
                href="https://maps.google.com/?q=Alpha+Practice+Rawalpindi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Map embed */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.942367455312!2d73.06807447321015!3d33.50287654654285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8d7a54e363cd%3A0xeb84d91f1f0bdc73!2sAlpha%20Practice!5e0!3m2!1sen!2s!4v1774408507274!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpha Practice Location - Rawalpindi"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MapSection;
