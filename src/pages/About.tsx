import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Heart, Target, Users, Shield } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassionate Care", desc: "We treat every patient like family, with empathy and understanding at the core of everything we do." },
  { icon: Target, title: "Clinical Excellence", desc: "We pursue the highest standards of medical practice through continuous learning and modern technology." },
  { icon: Users, title: "Patient-First Approach", desc: "Your health goals guide every decision we make — from diagnosis to treatment and recovery." },
  { icon: Shield, title: "Trust & Transparency", desc: "We believe in honest communication, clear treatment plans, and building lasting patient relationships." },
];

const About = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">About Alpha Practice</h1>
            <p className="text-primary-foreground/80 text-lg">Committed to delivering modern, accessible, and trusted healthcare in Rawalpindi since 2010.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Alpha Practice, our mission is to redefine healthcare by making high-quality medical and dental services accessible, affordable, and truly patient-centered. Strategically located in the heart of Rawalpindi, we are committed to delivering exceptional care by combining advanced medical technology with the expertise of highly qualified professionals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded on the principles of compassion, integrity, and clinical excellence, Alpha Practice strives to create an environment where every patient feels valued, heard, and respected. We understand that healthcare is not just about treatment; it is about building trust, ensuring comfort, and providing personalized solutions tailored to each individual's needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under the visionary leadership of Dr. Abubakar Abdullah, the CEO of Alpha Practice, the clinic has established itself as a center of excellence in dental and oral healthcare. Dr. Abdullah is a highly skilled Dentist, Oral Surgeon, and Dental Implantologist, bringing extensive experience and a commitment to innovation in modern dentistry. His dedication to precision, patient satisfaction, and continuous advancement sets the standard for the entire team.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of dedicated doctors, specialists, and support staff work collaboratively to ensure that every patient receives comprehensive care in a welcoming and professional environment. From routine consultations to advanced procedures, we aim to deliver outcomes that enhance both health and confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Alpha Practice, we do not just treat patients; we care for people. Our goal is to build lasting relationships based on trust, transparency, and exceptional service, ensuring that your journey to better health is smooth, comfortable, and successful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-card border border-border text-center"
              >
                <div className="h-14 w-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-semibold text-card-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default About;
