import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-card border-t border-muted py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <img src={logo} alt="Mandi House Logo" className="w-28 mb-5" />
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Bringing authentic Arabian flavors to your table since 2020.
            </p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wide mb-5 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#menu" className="text-muted-foreground hover:text-gold transition-colors font-light">Menu</a></li>
              <li><a href="#extras" className="text-muted-foreground hover:text-gold transition-colors font-light">Extras</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-gold transition-colors font-light">Reviews</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-gold transition-colors font-light">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wide mb-5 text-foreground">Opening Hours</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="text-muted-foreground">Monday - Sunday</li>
              <li className="text-muted-foreground">11:00 AM - 11:00 PM</li>
              <li className="text-gold font-medium">Open Every Day</li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-wide mb-5 text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-muted/50 p-3 rounded-full hover:bg-gold/20 hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gold" />
              </a>
              <a 
                href="#" 
                className="bg-muted/50 p-3 rounded-full hover:bg-gold/20 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a 
                href="#" 
                className="bg-muted/50 p-3 rounded-full hover:bg-gold/20 hover:scale-110 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-muted pt-8 text-center">
          <p className="text-muted-foreground text-xs font-light">
            &copy; {new Date().getFullYear()} Mandi House. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;