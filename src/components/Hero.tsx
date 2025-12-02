import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(165_38%_12%_/_0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(42_62%_58%_/_0.05),transparent_50%)]" />
      <div className="container max-w-4xl text-center relative z-10">
        <img 
          src={logo} 
          alt="Mandi House Logo" 
          className="w-44 md:w-52 mx-auto mb-8 drop-shadow-[0_0_30px_hsl(42_62%_58%_/_0.3)]" 
        />
        <div className="inline-block mb-6 px-5 py-1.5 border border-gold/40 rounded-full">
          <p className="text-gold text-sm font-medium tracking-[0.15em]">AUTHENTIC ARABIAN CUISINE</p>
        </div>
        <h1 className="font-serif text-[clamp(3rem,8vw,5rem)] font-bold mb-6 leading-[1.1] text-foreground">
          Welcome to<br />
          <span className="text-gold">Mandi House</span>
        </h1>
        <p className="font-light text-lg md:text-xl mb-10 max-w-[600px] mx-auto leading-relaxed text-muted-foreground">
          We are an open kitchen, featuring the best Arabian cuisine of Mandi, Biryani, Kabsa, and Mutton Dishes. Visit us to taste the unique flavors and textures that our authentic cooking brings from traditional Arabian culture.
        </p>
        <Button 
          size="lg" 
          className="bg-gold hover:bg-gold-light text-background font-semibold px-10 py-6 text-base gold-glow transition-all duration-300"
        >
          Order Now
        </Button>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;