import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import halalLogo from "@/assets/halal-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Menu", id: "menu" },
    { label: "Extras", id: "extras" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-gold/20 shadow-[0_4px_20px_hsl(42_62%_58%_/_0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Mandi House Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              Mandi House
            </span>
            <img
              src={halalLogo}
              alt="Halal Certified"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide royal-underline"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="https://www.ubereats.com/au/store/mandi-house-rockdale/i4yJhgNMT3iRGx0CQLQ3ag"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-background font-semibold px-5 py-2 rounded-full text-sm transition-all duration-300 gold-glow"
          >
            Order Now
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
