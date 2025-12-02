import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Food Blogger",
      rating: 5,
      comment: "The best mandi I've had outside of Yemen! The meat is incredibly tender and the rice is perfectly seasoned. Highly recommended!",
    },
    {
      name: "Sarah Williams",
      role: "Customer",
      rating: 5,
      comment: "Amazing experience! The open kitchen concept is great, and watching the chefs prepare the food adds to the authenticity. Will definitely come back.",
    },
    {
      name: "Mohammed Ali",
      role: "Regular Customer",
      rating: 5,
      comment: "This place reminds me of home. The flavors are authentic and the portions are generous. Perfect for family dinners!",
    },
    {
      name: "Emily Chen",
      role: "Tourist",
      rating: 5,
      comment: "Discovered this gem while visiting Dubai. The staff is friendly and the food is exceptional. A must-visit for anyone who loves Arabian cuisine!",
    },
  ];

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-5 px-5 py-1.5 border border-gold/40 rounded-full">
            <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Testimonials</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
              <Card className="bg-card border border-muted rounded-2xl p-8 hover:shadow-[0_8px_30px_hsl(165_40%_5%_/_0.4)] transition-all duration-300 h-full">
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-serif text-foreground mb-6 leading-relaxed italic text-lg">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-muted pt-5 mt-auto">
                  <p className="font-medium text-gold">{testimonial.name}</p>
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