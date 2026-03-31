import { motion } from "framer-motion";
import { Smile, Sparkles, ScanFace, Sun, ShieldCheck, Syringe, Scissors, Baby, Crown, AlignCenter, Droplets, Gem, Eye, Flower2, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dentalServices = [
  { icon: ShieldCheck, title: "Tooth Filling", desc: "Durable, natural-looking fillings to restore damaged or decayed teeth." },
  { icon: Scissors, title: "Teeth Extraction", desc: "Safe and painless tooth extraction procedures with expert care." },
  { icon: AlignCenter, title: "Tooth Alignment", desc: "Correct misaligned teeth for a straighter, more confident smile." },
  { icon: Syringe, title: "Root Canal Treatment", desc: "Advanced endodontic treatment to save infected teeth and relieve pain." },
  { icon: Droplets, title: "Scaling & Polishing", desc: "Professional teeth cleaning for healthier gums and fresh breath." },
  { icon: Sun, title: "Tooth Whitening", desc: "Professional whitening treatments for a brighter, whiter smile." },
  { icon: Crown, title: "Metal Crown", desc: "Strong, long-lasting metal crowns for damaged or weakened teeth." },
  { icon: Gem, title: "Zirconia Crown", desc: "Premium zirconia crowns for a natural, tooth-colored restoration." },
  { icon: Smile, title: "Hollywood Smile Make-over", desc: "Complete smile transformation with premium veneers and cosmetic dentistry." },
  { icon: ScanFace, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements using state-of-the-art technology." },
  { icon: Eye, title: "Invisible Dental Aligners", desc: "Clear, removable aligners for discreet teeth straightening." },
  { icon: Baby, title: "Children Dental Treatment", desc: "Gentle and friendly dental care specially designed for kids." },
  { icon: Heart, title: "Artificial Teeth", desc: "Custom-made dentures and prosthetics for a complete, beautiful smile." },
];

const aestheticServices = [
  { icon: Droplets, title: "Hydra Facial", desc: "Deep cleansing hydra facial for glowing, rejuvenated skin." },
  { icon: Syringe, title: "PRP — Hair", desc: "Platelet-rich plasma therapy to stimulate natural hair growth." },
  { icon: Syringe, title: "PRP — Face", desc: "PRP facial rejuvenation for youthful, radiant skin." },
  { icon: Flower2, title: "Hair Rejuvenation", desc: "Advanced treatments to restore hair thickness and vitality." },
  { icon: Scissors, title: "Micro Needling", desc: "Collagen-boosting micro needling for smoother, firmer skin." },
  { icon: Sparkles, title: "Mesotherapy", desc: "Targeted vitamin injections to nourish and revitalize skin." },
  { icon: Sun, title: "Chemical Peel", desc: "Professional peels to treat pigmentation, acne scars, and dull skin." },
  { icon: Gem, title: "Brightening Injections", desc: "Skin brightening treatments for an even, luminous complexion." },
  { icon: Eye, title: "Face Slimming Injections", desc: "Non-surgical face contouring for a defined jawline." },
  { icon: ShieldCheck, title: "Anti Wrinkle Botox", desc: "Botox treatments to smooth fine lines and prevent wrinkles." },
  { icon: Heart, title: "Facial Fillers", desc: "Dermal fillers for volume restoration and facial enhancement." },
  { icon: AlignCenter, title: "Face Thread Lifts", desc: "Non-surgical face lifting for tighter, youthful contours." },
  { icon: Scissors, title: "Mole Removal", desc: "Safe, precise mole removal with minimal scarring." },
];

const ServiceCard = ({ s, i }: { s: typeof dentalServices[0]; i: number }) => (
  <motion.div
    key={s.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05 }}
    className="group bg-card rounded-xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
  >
    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
      <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </div>
    <h3 className="text-sm sm:text-base font-heading font-semibold text-card-foreground mb-1">{s.title}</h3>
    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
  </motion.div>
);

const ServicesSection = () => (
  <section id="services" className="py-16 sm:py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
          Dental & Aesthetic Services
        </h2>
        <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">
          Comprehensive dental care and advanced aesthetic treatments under one roof.
        </p>
      </motion.div>

      <Tabs defaultValue="dental" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 sm:mb-10">
          <TabsTrigger value="dental" className="text-sm sm:text-base">🦷 Dental Services</TabsTrigger>
          <TabsTrigger value="aesthetic" className="text-sm sm:text-base">✨ Aesthetic Services</TabsTrigger>
        </TabsList>
        <TabsContent value="dental">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {dentalServices.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
          </div>
        </TabsContent>
        <TabsContent value="aesthetic">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {aestheticServices.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default ServicesSection;
