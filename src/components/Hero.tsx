import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(69,91,75,0.2),transparent_50%)]" />
      <div className="container max-w-4xl text-center relative z-10">
        <img src={logo} alt="Mandi House Logo" className="w-40 md:w-52 mx-auto mb-6" />
        <div className="inline-block mb-4 px-4 py-1 border border-gold/30 rounded-full">
          <p className="text-gold text-sm font-medium">AUTHENTIC ARABIAN CUISINE</p>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
          Welcome to<br />
          <span className="text-gold">Mandi House</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          We are an open kitchen, featuring the best Arabian cuisine of Mandi, Biryani, Kabsa, and Mutton Dishes. Visit us to taste the unique flavors and textures that our authentic cooking brings from traditional Arabian culture.
        </p>
        <Button size="lg" className="bg-gold hover:bg-gold/90 text-dark-green font-semibold px-8">
          Order Now
        </Button>
        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
