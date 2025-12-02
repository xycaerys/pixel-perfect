import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohamad I.",
      role: "Customer",
      rating: 5,
      comment: "Very generous meal, beautiful taste. I recommend!",
    },
    {
      name: "Alex P.",
      role: "Customer",
      rating: 5,
      comment: "LAMB MANDI WAS DELICIOUS AND JUICY",
    },
    {
      name: "Ashraf Khan A.",
      role: "Customer",
      rating: 5,
      comment: "Amazing food, fast delivery, fantastic packaging. Just love their food.",
    },
    {
      name: "Mustafa Ahmed ali",
      role: "Customer",
      rating: 5,
      comment: "Really great food, I'd recommend everyone to visit this restaurant and taste the real Hyderabadi and Arabian cuisine",
    },
  ];

  return (
    <section className="py-24 royal-gradient arabian-pattern" id="testimonials">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-5 px-5 py-1.5 bg-gold/20 border border-gold/40 rounded-full">
            <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Customer Reviews</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground royal-text-shadow italic">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="bg-card border border-muted rounded-2xl p-6 md:p-8 hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-gold/40 font-serif text-4xl leading-none">"</span>
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic text-sm md:text-base flex-1">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-muted pt-4 mt-auto">
                  <p className="font-semibold text-gold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
