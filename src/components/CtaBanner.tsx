import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import clinicImg from "@/assets/clinic-treatment-room.webp";

const CtaBanner = () => {
  const scrollToAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <section className="py-16 sm:py-24 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={clinicImg}
          alt="Alpha Practice treatment room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-primary-foreground border border-primary-foreground/20 mb-5">
              <Sparkles className="h-3.5 w-3.5" /> Limited Time Offer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight mb-4">
              Your Dream Smile{" "}
              <span className="text-accent">Starts Here</span>
            </h2>
            <p className="text-primary-foreground/80 text-sm sm:text-base max-w-md mb-6 sm:mb-8 leading-relaxed">
              Get a free consultation for Hollywood Smile, Dental Implants, or
              Laser Skin Treatment. Our experts will craft a personalized plan
              just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="secondary"
                type="button"
                onClick={scrollToAppointment}
                className="gap-2 w-full sm:w-auto"
              >
                <>
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 w-full sm:w-auto gap-2"
              >
                <a href="tel:+923322225742">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { num: "100%", label: "Satisfaction Rate" },
              { num: "Free", label: "First Consultation" },
              { num: "0%", label: "Interest Plans" },
              { num: "24/7", label: "Emergency Support" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-primary-foreground/15"
              >
                <p className="text-2xl font-heading font-bold text-primary-foreground">
                  {item.num}
                </p>
                <p className="text-xs text-primary-foreground/70 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CtaBanner;
