import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Award, Star } from "lucide-react";

import clinicWaiting from "@/assets/clinic-waiting-area.webp";
import clinicChair from "@/assets/clinic-dental-chair-1.webp";
import clinicTreatment from "@/assets/clinic-treatment-room.webp";
import patientMoment from "@/assets/gallery-4.jpeg";

const ClinicShowcase = () => (
  <section className="py-16 sm:py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Clinic</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
          A Modern Space Built for Your Comfort
        </h2>
        <p className="text-muted-foreground mt-3 text-sm sm:text-base">
          Experience world-class dental & skin care in a premium, relaxing environment equipped with the latest technology.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 auto-rows-[140px] sm:auto-rows-[200px]">
        {/* Large - Waiting Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group"
        >
          <img src={clinicWaiting} alt="Premium waiting lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-xs text-accent font-medium">Premium Experience</span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-primary-foreground">Relaxing Waiting Lounge</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/70 mt-1 hidden sm:block">Comfortable seating with a calming atmosphere to ease your visit.</p>
          </div>
        </motion.div>

        {/* Treatment Room */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group"
        >
          <img src={clinicTreatment} alt="Modern treatment room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <p className="text-xs sm:text-sm font-heading font-semibold text-primary-foreground">Treatment Room</p>
          </div>
        </motion.div>

        {/* Happy Patient Moment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group"
        >
          <img src={patientMoment} alt="Happy patient moment at Alpha Practice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5 text-accent" />
            <p className="text-xs sm:text-sm font-heading font-semibold text-primary-foreground">Happy Smiles</p>
          </div>
        </motion.div>

        {/* Dental Chair */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group"
        >
          <img src={clinicChair} alt="State-of-the-art dental unit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-heading font-bold text-primary-foreground">Latest Technology</p>
              <p className="text-xs text-primary-foreground/60 hidden sm:block">Digital diagnostics & advanced treatment units</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8 sm:mt-12"
      >
        <Button asChild variant="outline" className="gap-2">
          <Link to="/gallery">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ClinicShowcase;
