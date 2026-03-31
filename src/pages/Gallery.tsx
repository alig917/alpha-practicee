import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import clinicChair1 from "@/assets/clinic-dental-chair-1.webp";
import clinicChair2 from "@/assets/clinic-dental-chair-2.webp";
import clinicChair3 from "@/assets/clinic-dental-chair-3.webp";
import clinicTreatment from "@/assets/clinic-treatment-room.webp";
import clinicTeam from "@/assets/clinic-team.webp";
import clinicPatientCare from "@/assets/clinic-patient-care.webp";
import clinicReception from "@/assets/clinic-reception.webp";
import clinicRoomView from "@/assets/clinic-dental-room-view.webp";
import clinicCertificates from "@/assets/clinic-certificates.webp";
import clinicWaiting from "@/assets/clinic-waiting-area.webp";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";

const images = [
  { src: clinicWaiting, alt: "Spacious waiting area with comfortable seating", label: "Waiting Lounge" },
  { src: clinicReception, alt: "Modern reception desk with certificates", label: "Reception Area" },
  { src: clinicChair1, alt: "State-of-the-art dental treatment unit", label: "Treatment Unit" },
  { src: clinicChair2, alt: "Advanced dental chair with digital equipment", label: "Dental Suite" },
  { src: clinicTreatment, alt: "Modern treatment room with latest equipment", label: "Treatment Room" },
  { src: clinicPatientCare, alt: "Doctor providing personalized patient care", label: "Patient Care" },
  { src: clinicTeam, alt: "Our dedicated dental team", label: "Our Team" },
  { src: clinicRoomView, alt: "Dental room with panoramic view", label: "Dental Room" },
  { src: clinicCertificates, alt: "Professional certifications and achievements", label: "Certifications" },
  { src: clinicChair3, alt: "High-tech dental equipment", label: "Equipment" },
  { src: gallery1, alt: "Child dental education session with model teeth", label: "Kids Dental Care" },
  { src: gallery2, alt: "Dentist examining a child patient during treatment", label: "Gentle Checkup" },
  { src: gallery3, alt: "Young patient learning oral hygiene in the clinic", label: "Oral Hygiene Learning" },
  { src: gallery4, alt: "Child receiving dental care in a comfortable setting", label: "Comfortable Care" },
  { src: gallery5, alt: "Dentist treating a young patient in the clinic", label: "Friendly Treatment" },
  { src: gallery6, alt: "Family visit with Dr. Abubakar Abdullah at Alpha Practice", label: "Happy Visits" },
  { src: gallery7, alt: "Doctor treating a child patient in the dental chair", label: "Patient Consultation" },
  { src: gallery8, alt: "Child practicing brushing technique with a doctor", label: "Preventive Guidance" },
  { src: gallery9, alt: "Dentist performing a child dental examination", label: "Child Examination" },
  { src: gallery10, alt: "Child patient receiving dental care with distraction screen", label: "Relaxed Treatment" },
  { src: gallery11, alt: "Young patient with doctor after a successful appointment", label: "Smiles After Care" },
];

const Gallery = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <section className="py-16 sm:py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm border border-primary-foreground/20 mb-4">
              <Camera className="h-3.5 w-3.5" /> Virtual Tour
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4">Our Gallery</h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg max-w-xl mx-auto">
              Take a look inside Alpha Practice — where modern technology meets compassionate dental & skin care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-card group relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
                  <span className="text-primary-foreground text-sm font-heading font-semibold">{img.label}</span>
                </div>
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

export default Gallery;
