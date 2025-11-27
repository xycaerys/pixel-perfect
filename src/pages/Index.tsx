import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Extras from "@/components/Extras";
import Tradition from "@/components/Tradition";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Menu />
      <Extras />
      <Tradition />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
