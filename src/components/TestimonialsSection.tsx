import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anila Mariam",
    text: "One the best doctor in town. Dr Abdullah is my go for dentist. He is so humble, composed and experienced. I was very anxious for my wisdom tooth extraction but he made the whole ...",
    rating: 5,
  },
  {
    name: "Ali Shahid",
    text: "So I got my PRP session done and it was exceptional. I had previously got a session done in the UK and honestly it was quite painful. But the way Alpha practice had conducted the whole procedure was really smooth and I didn't feel any ...",
    rating: 5,
  },
  {
    name: "F. Zaii",
    text: "Best experience. I underwent scaling polishing and dental fillings. Environment and Dr Abubakar specially is very frindly. There are many doctors out there but cleanliness and friendly staff, best treatment, efficient doctors, you dnt get all these in one place but u can get it in Alpha Practice. Highly recommended",
    rating: 5,
  },
  {
    name: "Alishba Arshad",
    text: "I had a great experience at ALPHA PRACTICE. The staff was friendly and professional, and the clinic was clean and modern. The treatment was gentle and painless, and I'm very happy with the results. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-16 sm:py-24 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">What Our Patients Say</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-5 sm:p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="flex gap-0.5 mb-3 sm:mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-accent text-accent" : "text-border"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
            <span className="text-sm font-medium text-card-foreground">{r.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
