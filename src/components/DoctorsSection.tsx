import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drAbubakar from "@/assets/dr-abubakar.png";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import docFatimaAzam from "@/assets/doctor-fatima-azam.png";
import docIbrahimNaeem from "@/assets/doctor-ibrahim-naeem.png";
import docHiraHafeez from "@/assets/doctor-hira-hafeez.png";
import docRida from "@/assets/doctor-rida.png";
import docShaharyar from "@/assets/doctor-shaharyar.png";

const doctors = [
  {
    id: "abubakar",
    img: drAbubakar,
    name: "Dr. Abubakar Abdullah",
    specialty: "CEO Alpha Practice, Oral Surgeon, Expert Facial Injector, Oral Implantologist",
    exp: "15 Years",
    quals: "BDS, MCPS, FAOCMF",
    fullImage: true,
  },
  {
    id: "shaharyar",
    img: docShaharyar,
    name: "Dr. Shaharyar Khan Niazi",
    specialty: "Oral and Maxillofacial Surgeon",
    exp: "15 Years",
    quals: "BDS (Riphah), FCPS (OMFS), MSC (UK)",
    fullImage: true,
  },
  {
    id: "fareed",
    img: doc3,
    name: "Dr. Fareed Sher Muhammad",
    specialty: "Endodontist",
    exp: "13 Years",
    quals: "BDS (UHS), MDS (SZABMU)",
    fullImage: true,
  },
  {
    id: "rida",
    img: docRida,
    name: "Dr. Rida Khan",
    specialty: "Dental Practitioner, COO Alpha Practice",
    exp: "4 Years",
    quals: "BDS (UHS), Dip. Facial Aesthetics, AACME (USA), Accredited by UK-CPD",
    fullImage: true,
  },
  {
    id: "sana",
    img: doc2,
    name: "Dr. Sana Tariq",
    specialty: "Assistant Professor - Orthodontics",
    exp: "11 Years",
    quals: "BDS - Army Medical College, FCPS - Orthodontics - CPSP, CHPE - Riphah University",
    fullImage: true,
  },
  {
    id: "hira-hafeez",
    img: docHiraHafeez,
    name: "Dr. Hira Hafeez",
    specialty: "General Dentist - Alpha Practice",
    exp: "5 Years",
    quals: "BDS, C-ENDO",
    fullImage: true,
  },
  {
    id: "ibrahim-naeem",
    img: docIbrahimNaeem,
    name: "Dr. M. Ibrahim Naeem",
    specialty: "Prosthodontist",
    exp: "7 Years",
    quals: "BDS (UHS), FCPS (CPSP)",
    fullImage: true,
  },
  {
    id: "fatima-azam",
    img: docFatimaAzam,
    name: "Dr. Fatima Azam",
    specialty: "Postgraduate Trainee in Prosthodontics",
    exp: "3 Years",
    quals: "BDS",
    fullImage: true,
  },
];

const DoctorsSection = () => (
  <section id="doctors" className="py-16 sm:py-24 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Doctors</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
          Meet Our Specialists
        </h2>
        <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">
          Expert dental and skin care professionals dedicated to your well-being.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {doctors.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
          >
            <div className={`${d.fullImage ? "h-72 sm:h-80 bg-white p-2 sm:p-3" : "h-56 sm:h-72"} overflow-hidden`}>
              <img
                src={d.img}
                alt={d.name}
                className={`w-full h-full transition-transform duration-500 ${
                  d.fullImage ? "object-contain object-center group-hover:scale-105" : "object-cover group-hover:scale-105"
                }`}
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-heading font-semibold text-card-foreground">{d.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{d.specialty}</p>
              <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3 text-xs text-muted-foreground">
                {d.exp ? <span>{d.exp} Experience</span> : null}
                {d.exp ? <span>|</span> : null}
                <span>{d.quals}</span>
              </div>
              <Button className="w-full mt-4 sm:mt-5" asChild>
                <Link to={`/?doctor=${d.id}&book=true`}>Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
