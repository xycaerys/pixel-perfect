import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Al Barsha, Dubai", "United Arab Emirates"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 4 123 4567", "+971 50 123 4567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mandihouse.ae", "orders@mandihouse.ae"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Sun: 11:00 AM - 11:00 PM", "Open Every Day"],
    },
  ];

  return (
    <section className="py-24 bg-primary" id="contact">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-5 px-5 py-1.5 border border-gold/40 rounded-full">
            <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Get In Touch</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            Visit us, call us, or send us a message. We're here to serve you!
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
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
                className="bg-card border border-muted rounded-2xl p-8 text-center hover:shadow-[0_8px_30px_hsl(165_40%_5%_/_0.4)] transition-all duration-300"
              >
                <div className="bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4 text-foreground">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm font-light">
                    {detail}
                  </p>
                ))}
              </motion.div>
            );
          })}
        </div>
        <AnimatedSection className="text-center mt-14" delay={0.3}>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-light text-background font-semibold px-10 py-6 text-base gold-glow transition-all duration-300"
          >
            Make a Reservation
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;