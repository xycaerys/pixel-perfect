import { Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Tradition = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients sourced directly from trusted suppliers",
    },
    {
      icon: Clock,
      title: "Traditional Methods",
      description: "Our chefs follow authentic Arabian cooking techniques passed down through generations",
    },
    {
      icon: Users,
      title: "Family Experience",
      description: "Perfect for family gatherings and special occasions with generous portions",
    },
  ];

  return (
    <section className="py-24 royal-gradient-alt arabian-pattern">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-block mb-5 px-5 py-1.5 border border-gold/40 rounded-full">
              <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Our Story</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 leading-[1.1] text-foreground royal-text-shadow">
              A Tradition of Authentic<br />
              <span className="text-gold">Arabian Flavors</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
              At Mandi House, we bring the rich culinary heritage of Arabia to your table. 
              Our open kitchen concept allows you to witness the artistry behind each dish, 
              from the slow-cooked tender meats to the perfectly spiced aromatic rice. 
              Every meal is a celebration of authentic flavors, traditional cooking methods, 
              and the warm hospitality that Arabian culture is known for.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex gap-5 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <div className="bg-gold/10 p-3.5 rounded-xl">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl mb-1.5 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground font-light">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-square bg-card rounded-2xl overflow-hidden border border-muted ornamental-corners">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
              <div className="absolute inset-0 arabian-pattern opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-6xl md:text-8xl font-bold text-gold/30 royal-text-shadow">MH</p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-gold/40 text-xs">✦</span>
                    <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">Est. 2020</p>
                    <span className="text-gold/40 text-xs">✦</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Tradition;