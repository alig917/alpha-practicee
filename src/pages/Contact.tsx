import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "2nd Floor Plaza 19, Overseas 5 Commercial, Bahria Phase 8, Rawalpindi" },
  { icon: Phone, label: "WhatsApp", value: "0332-2225742" },
  { icon: Phone, label: "PTCL", value: "051-2752441" },
  { icon: Clock, label: "Hours", value: "Mon-Thu & Sat: 2PM-10PM, Fri: 3PM-7PM, Sun: Off" },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Contact Us</h1>
              <p className="text-primary-foreground/80 text-lg">Get in touch — we're here to help.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get In Touch</h2>
                <div className="flex flex-col gap-5 mb-10">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="h-11 w-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.label}</p>
                        <p className="text-sm text-muted-foreground">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl overflow-hidden shadow-card h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.942367455312!2d73.06807447321015!3d33.50287654654285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8d7a54e363cd%3A0xeb84d91f1f0bdc73!2sAlpha%20Practice!5e0!3m2!1sen!2s!4v1774408507274!5m2!1sen!2s"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    title="Alpha Practice Location"
                  />
                </div>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-card border border-border p-8 space-y-5"
              >
                <h3 className="text-xl font-heading font-semibold text-card-foreground">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" required />
                  <Input placeholder="Phone Number" type="tel" required />
                </div>
                <Input placeholder="Email Address" type="email" required />
                <Input placeholder="Subject" required />
                <Textarea placeholder="Your Message" rows={5} required />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
