import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import ArabianDivider from "./ArabianDivider";

const Footer = () => {
  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["548 Princes Hwy, Rockdale NSW"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+61 416 775 785", "Tel: 0279017587"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["mandihouserockdale@gmail.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Tue-Thu: 4:00 PM - 11:00 PM", "Fri-Sun: 5:00 PM - 12:00 AM", "Monday: Closed"],
      highlight: "Monday: Closed",
    },
  ];

  return (
    <>
      {/* Contact Cards Section */}
      <section className="py-16 bg-background arabian-pattern">
        <div className="container px-4">
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
                  className="bg-card border border-muted rounded-2xl p-8 text-center hover:border-gold/30 transition-all duration-300"
                >
                  <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-4 text-foreground">{card.title}</h3>
                  {card.details.map((detail, detailIndex) => (
                    <p 
                      key={detailIndex} 
                      className={`text-sm font-light ${
                        card.highlight && detail === card.highlight 
                          ? "text-gold font-medium mt-1" 
                          : "text-muted-foreground"
                      }`}
                    >
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <motion.footer 
        className="bg-card border-t border-gold/20 py-14 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 arabian-pattern opacity-30" />
        <div className="container px-4 relative z-10">
          <ArabianDivider className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand Column */}
            <div>
              <img src={logo} alt="Mandi House Logo" className="w-28 mb-5" />
              <p className="text-foreground font-medium mb-2">
                Authentic Arabian cuisine in an elegant setting.
              </p>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-5">
                Experience the true taste of Arabia.
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="bg-muted/50 p-3 rounded-full hover:bg-gold/20 hover:scale-110 transition-all duration-200 border border-gold/30"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gold" />
                </a>
                <a 
                  href="#" 
                  className="bg-muted/50 p-3 rounded-full hover:bg-gold/20 hover:scale-110 transition-all duration-200 border border-gold/30"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gold" />
                </a>
                <a 
                  href="#" 
                  className="bg-muted/50 p-3 rounded-full hover:bg-gold/20 hover:scale-110 transition-all duration-200 border border-gold/30"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gold" />
                </a>
                <a 
                  href="mailto:mandihouserockdale@gmail.com" 
                  className="bg-muted/50 p-3 rounded-full hover:bg-gold/20 hover:scale-110 transition-all duration-200 border border-gold/30"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gold" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-5 text-gold">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors font-light">Home</a></li>
                <li><a href="#menu" className="text-muted-foreground hover:text-gold transition-colors font-light">Menu</a></li>
                <li><a href="#extras" className="text-muted-foreground hover:text-gold transition-colors font-light">About</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-gold transition-colors font-light">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-5 text-gold">Contact Info</h4>
              <ul className="space-y-3 text-sm font-light">
                <li className="text-muted-foreground">548 Princes Hwy, Rockdale NSW</li>
                <li className="text-muted-foreground">+61 416 775 785</li>
                <li className="text-muted-foreground">Telephone: 0279017587</li>
                <li className="text-muted-foreground">mandihouserockdale@gmail.com</li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-5 text-gold">Opening Hours</h4>
              <ul className="space-y-4 text-sm font-light">
                <li>
                  <p className="text-foreground font-medium">Tuesday - Thursday</p>
                  <p className="text-muted-foreground">4:00 PM - 11:00 PM</p>
                </li>
                <li>
                  <p className="text-foreground font-medium">Friday - Sunday</p>
                  <p className="text-muted-foreground">5:00 PM - 12:00 AM</p>
                </li>
                <li>
                  <p className="text-foreground font-medium">Monday</p>
                  <p className="text-gold">Closed</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-gold/40 text-xs">✦</span>
              <span className="text-gold/40 text-xs">✦</span>
              <span className="text-gold/40 text-xs">✦</span>
            </div>
            <p className="text-muted-foreground text-xs font-light">
              &copy; {new Date().getFullYear()} Mandi House. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
