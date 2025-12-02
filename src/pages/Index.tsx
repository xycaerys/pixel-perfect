import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Extras from "@/components/Extras";
import Tradition from "@/components/Tradition";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Extras />
      <Tradition />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
