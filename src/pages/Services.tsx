import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const Services = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Our Services</h1>
            <p className="text-primary-foreground/80 text-lg">
              Explore advanced dental and aesthetic treatments available at Alpha Practice.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Services;
