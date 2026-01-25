import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const contactCards = [
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Tue-Thu: 4:00 PM - 12:00 AM", "Fri-Sun: 5:00 PM - 1:00 AM", "Mon (Australia Day): 12 PM - 4 PM", "Hours may differ"],
      highlight: "Mon (Australia Day): 12 PM - 4 PM",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+61 416 775 785", "Tel: 0279017587"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["548 Princes Hwy, Rockdale NSW"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["mandihouserockdale@gmail.com"],
    },
  ];

  return (
    <section className="py-16 bg-background arabian-pattern" id="contact">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-5 px-5 py-1.5 border border-gold/40 rounded-full">
            <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Get In Touch</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground royal-text-shadow">
            Contact Us
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-muted rounded-2xl p-6 md:p-8 text-center hover:border-gold/30 transition-all duration-300"
              >
                <div className="bg-gold w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-background" />
                </div>
                <h3 className="font-serif font-semibold text-lg md:text-xl mb-3 md:mb-4 text-foreground">{card.title}</h3>
                {card.details.map((detail, detailIndex) => {
                  const isPhone = detail.match(/^\+?\d[\d\s-]+$/) || detail.startsWith("Tel:");
                  const phoneNumber = detail.replace(/[^\d+]/g, '');
                  
                  return isPhone ? (
                    <a 
                      key={detailIndex}
                      href={`tel:${phoneNumber}`}
                      className={`block text-base md:text-lg font-light break-words text-muted-foreground hover:text-gold transition-colors`}
                    >
                      {detail}
                    </a>
                  ) : (
                    <p 
                      key={detailIndex} 
                      className={`text-base md:text-lg font-light break-words ${
                        card.highlight && detail === card.highlight 
                          ? "text-gold font-medium mt-1" 
                          : "text-muted-foreground"
                      }`}
                    >
                      {detail}
                    </p>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
