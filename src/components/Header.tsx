import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import halalLogo from "@/assets/halal-logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
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
            className="flex items-center gap-2 md:gap-3"
          >
            <img
              src={logo}
              alt="Mandi House Logo"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="font-serif text-sm md:text-2xl font-semibold text-gold uppercase tracking-wider gold-shimmer drop-shadow-[0_0_10px_hsl(42_62%_58%_/_0.5)]">
              MANDI HOUSE ROCKDALE
            </span>
            <img
              src={halalLogo}
              alt="Halal Certified"
              className="w-8 h-8 md:w-14 md:h-14"
            />
          </button>

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-2">
            <a
              href="https://www.ubereats.com/au/store/mandi-house-rockdale/i4yJhgNMT3iRGx0CQLQ3ag"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-gold hover:bg-gold-light text-background font-semibold px-5 py-2 rounded-full text-sm transition-all duration-300 gold-glow"
            >
              Order Now
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 text-gold">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-gold/20 w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <img src={logo} alt="Mandi House Logo" className="w-10 h-10" />
                    <span className="font-serif text-lg font-semibold text-gold">MANDI HOUSE</span>
                  </div>
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-foreground hover:text-gold transition-colors duration-300 font-medium text-lg tracking-wide text-left py-2 border-b border-gold/10"
                    >
                      {link.label}
                    </button>
                  ))}
                  <a
                    href="https://www.ubereats.com/au/store/mandi-house-rockdale/i4yJhgNMT3iRGx0CQLQ3ag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold hover:bg-gold-light text-background font-semibold px-5 py-3 rounded-full text-center transition-all duration-300 mt-4"
                  >
                    Order Now
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
