import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/clinic-waiting-area.webp";

const HeroSection = () => {
  const scrollToAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <section className="relative min-h-[100svh] sm:min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Modern Alpha Practice clinic interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/20 sm:to-transparent" />
    </div>

    <div className="container relative z-10 mx-auto px-4 sm:px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary-foreground/20 mb-4 sm:mb-6">
          <CalendarCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Now accepting new patients
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight text-primary-foreground mb-4 sm:mb-6">
          Premium Dental &{" "}
          <span className="text-accent">Aesthetic Clinic</span>
        </h1>
        <p className="text-base sm:text-lg text-primary-foreground/80 mb-6 sm:mb-8 max-w-lg">
          Expert dental treatments and advanced skin care services with modern
          technology at Alpha Practice, Rawalpindi.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button size="lg" type="button" onClick={scrollToAppointment} className="gap-2 w-full sm:w-auto">
            <>
              Book Appointment <ArrowRight className="h-4 w-4" />
            </>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 w-full sm:w-auto">
            <Link to="/contact">Contact Clinic</Link>
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 flex gap-6 sm:gap-8">
          {[
            { num: "15+", label: "Years Experience" },
            { num: "7K+", label: "Happy Patients" },
            { num: "10K+", label: "Treatments" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">{s.num}</p>
              <p className="text-xs sm:text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default HeroSection;
