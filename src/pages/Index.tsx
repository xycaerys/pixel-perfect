import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Extras from "@/components/Extras";
import ContactSection from "@/components/ContactSection";
import Tradition from "@/components/Tradition";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen arabic-calligraphy-bg">
        <Header />
        <Hero />
        <Menu />
        <Extras />
        <ContactSection />
        <Tradition />
        <Testimonials />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
