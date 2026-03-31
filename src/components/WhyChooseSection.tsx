import { motion } from "framer-motion";
import { Award, Cpu, Heart, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experienced Doctors", desc: "Board-certified physicians with decades of combined experience." },
  { icon: Cpu, title: "Modern Equipment", desc: "State-of-the-art diagnostic and treatment technology." },
  { icon: Heart, title: "Patient-Focused Care", desc: "Personalized treatment plans centered around your needs." },
  { icon: Zap, title: "Fast Scheduling", desc: "Quick appointment booking with minimal wait times." },
  { icon: Shield, title: "Trusted Services", desc: "A reputation built on trust, quality, and consistent results." },
];

const WhyChooseSection = () => (
  <section className="py-16 sm:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 mb-4 sm:mb-6">
            Why Patients Trust Alpha Practice
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            We combine medical expertise with compassionate care to deliver healthcare experiences that truly make a difference.
          </p>
          <div className="flex flex-col gap-4 sm:gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <r.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base">{r.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-hero-gradient rounded-2xl p-6 sm:p-10 text-primary-foreground">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4">Ready to experience better healthcare?</h3>
            <p className="text-primary-foreground/80 mb-5 sm:mb-6 text-sm sm:text-base">Book your appointment today and see the Alpha Practice difference.</p>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {[
                { val: "98%", label: "Patient Satisfaction" },
                { val: "24/7", label: "Emergency Support" },
                { val: "15+", label: "Years of Excellence" },
                { val: "26", label: "Services Offered" },
              ].map((s) => (
                <div key={s.label} className="bg-primary-foreground/10 rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm">
                  <p className="text-xl sm:text-2xl font-heading font-bold">{s.val}</p>
                  <p className="text-[10px] sm:text-xs text-primary-foreground/70 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
