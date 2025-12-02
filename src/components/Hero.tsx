import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import ArabianDivider from "./ArabianDivider";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center royal-gradient arabian-pattern px-4 py-24 overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-20 left-8 w-32 h-32 border-l-2 border-t-2 border-gold/20 hidden lg:block" />
      <div className="absolute top-20 right-8 w-32 h-32 border-r-2 border-t-2 border-gold/20 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-gold/20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-gold/20 hidden lg:block" />
      
      {/* Floating ornaments */}
      <motion.div 
        className="absolute top-1/4 left-[10%] text-gold/20 text-4xl hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute bottom-1/3 right-[10%] text-gold/20 text-3xl hidden md:block"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        ❖
      </motion.div>
      <div className="container max-w-4xl text-center relative z-10">
        <motion.img 
          src={logo} 
          alt="Mandi House Logo" 
          className="w-44 md:w-52 mx-auto mb-8 drop-shadow-[0_0_30px_hsl(42_62%_58%_/_0.3)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="inline-block mb-6 px-5 py-1.5 border border-gold/40 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gold text-sm font-medium tracking-[0.15em]">AUTHENTIC ARABIAN CUISINE</p>
        </motion.div>
        <motion.h1 
          className="font-serif text-[clamp(3rem,8vw,5rem)] font-bold mb-2 leading-[1.1] text-foreground royal-text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Welcome to<br />
          <span className="text-gold gold-shimmer">Mandi House</span>
        </motion.h1>
        <motion.p
          className="text-gold/70 text-sm tracking-[0.2em] font-light italic mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Sydney, Rockdale
        </motion.p>
        <motion.p 
          className="font-light text-lg md:text-xl mb-10 max-w-[600px] mx-auto leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          We are an open kitchen, featuring the best of Hyderabadi and Arabian cuisine. Our signature Mandi dishes are slow-cooked to perfection using traditional methods, bringing you the authentic flavors and rich textures that have been cherished for generations across the Arabian Peninsula.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a 
            href="https://www.ubereats.com/au/store/mandi-house-rockdale/i4yJhgNMT3iRGx0CQLQ3ag"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-light text-background font-semibold px-10 py-6 text-base gold-glow transition-all duration-300"
            >
              Order Now
            </Button>
          </a>
        </motion.div>
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <ArabianDivider />
        </motion.div>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ArrowDown className="w-6 h-6 mx-auto text-gold/60 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;