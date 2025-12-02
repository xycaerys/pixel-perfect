import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import AnimatedSection from "./AnimatedSection";
import chickenMandiSingle from "@/assets/chicken-mandi-single.png";
import fishMandiSingle from "@/assets/fish-mandi-single.png";
import chickenTikkaMandiSingle from "@/assets/chicken-tikka-mandi-single.png";
import mixedMandiSingle from "@/assets/mixed-mandi-single.png";
import chickenMandiPlate from "@/assets/chicken-mandi-plate.png";
import fishMandiPlate from "@/assets/fish-mandi-plate.png";
import chickenTikkaMandiPlate from "@/assets/chicken-tikka-mandi-plate.png";
import mixedMandiPlate from "@/assets/mixed-mandi-plate.png";
import chickenMandiFamilyPlate from "@/assets/chicken-mandi-family-plate.png";
import mixedMandiFamilyPlate from "@/assets/mixed-mandi-family-plate.png";
import mixedSet from "@/assets/mixed-set.png";
import halfChicken from "@/assets/half-chicken.png";
import fullChicken from "@/assets/full-chicken.png";

const Menu = () => {
  const singles = [
    {
      image: chickenMandiSingle,
      title: "Chicken Mandi Single",
      description: "(Serves 1 Person) Comes With Rice, Quarter Chicken, Sauces And Salad",
      price: "$24",
      rating: 4.9,
    },
    {
      image: fishMandiSingle,
      title: "Fish Mandi Single",
      description: "(Serves 1 Person) Comes With Rice, 1 Piece Of Boneless Fish Fillet, Sauces And Salad",
      price: "$24",
      rating: 4.9,
    },
    {
      image: chickenTikkaMandiSingle,
      title: "Chicken Tikka Mandi Single",
      description: "(Serves 1 Person) Comes With Rice, 3 Pieces Boneless Chicken Tikka, Sauces And Salad",
      price: "$24",
      rating: 5,
    },
    {
      image: mixedMandiSingle,
      title: "Mixed Mandi Single",
      description: "(Serves 1 Person) Comes With Rice, Quarter Chicken, Half Boneless Fish Piece, Sauces And Salad",
      price: "$30",
      rating: 4.9,
      isNew: true,
    },
  ];

  const plates = [
    {
      image: chickenMandiPlate,
      title: "Chicken Mandi Plate",
      description: "(Serves 1-2 Person) Comes With Rice, Half Chicken, Sauces And Salad",
      price: "$32",
      rating: 5,
    },
    {
      image: fishMandiPlate,
      title: "Fish Mandi Plate",
      description: "(Serves 2 Person) Comes With Rice, 2 Pieces Of Boneless Fish Fillet, Sauces And Salad",
      price: "$32",
      rating: 4.9,
    },
    {
      image: chickenTikkaMandiPlate,
      title: "Chicken Tikka Mandi Plate",
      description: "(Serves 2 Person) Comes With Rice, 6 Pieces Boneless Chicken Tikka, Sauces And Salad",
      price: "$32",
      rating: 5,
    },
    {
      image: mixedMandiPlate,
      title: "Mixed Mandi Plate",
      description: "(Serves 2 Person) Comes With Rice, Half Chicken, 1 Piece Boneless Fish Fillet, Sauces And Salad",
      price: "$45",
      rating: 5,
    },
  ];

  const familyPlates = [
    {
      image: chickenMandiFamilyPlate,
      title: "Chicken Mandi Family Plate",
      description: "(Serves 4-5 Persons) Comes With Rice, Full Chicken, Sauces, Salad And 1 Soft Drink Bottle 1.25L",
      price: "$75",
      rating: 5,
      isNew: true,
    },
    {
      image: mixedMandiFamilyPlate,
      title: "Mixed Mandi Family Plate",
      description: "(Serves 4-5 Persons) Comes With Rice, 1 Full Chicken, 2 Pieces Of Boneless Fish Fillets, Sauces And Salad",
      price: "$95",
      rating: 5,
    },
  ];

  const extras = [
    {
      image: mixedSet,
      title: "Mixed Set",
      description: "Comes With Half Chicken, 1 Boneless Fish Fillet, Sauces And Salad",
      price: "$35",
      rating: 5,
    },
    {
      image: halfChicken,
      title: "Half Chicken",
      description: "Grilled half chicken with traditional Hyderabadi spices",
      price: "$16",
      rating: 4.9,
    },
    {
      image: fullChicken,
      title: "Full Chicken",
      description: "Grilled full chicken with traditional Hyderabadi spices",
      price: "$25",
      rating: 5,
    },
  ];

  const MenuSection = ({ title, subtitle, items }: { title: string; subtitle: string; items: typeof singles }) => (
    <div className="mb-16">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm font-light">{subtitle}</p>
        <div className="h-px w-24 bg-gradient-to-r from-gold/60 to-transparent mt-3" />
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <MenuCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 royal-gradient arabian-pattern" id="menu">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-5 px-5 py-1.5 border border-gold/40 rounded-full">
            <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Our Specialties</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground royal-text-shadow">
            Explore Our Mandi Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            Discover the authentic flavors of Hyderabadi & Arabian cuisine with our signature Mandi dishes
          </p>
        </AnimatedSection>

        <MenuSection 
          title="Singles" 
          subtitle="Perfect portion for one person" 
          items={singles} 
        />
        
        <MenuSection 
          title="Plates" 
          subtitle="Generous portions for 1-2 persons" 
          items={plates} 
        />
        
        <MenuSection 
          title="Family Plates" 
          subtitle="Perfect for sharing with family & friends" 
          items={familyPlates} 
        />
        
        <MenuSection 
          title="Extras" 
          subtitle="Add-ons and standalone items" 
          items={extras} 
        />
      </div>
    </section>
  );
};

export default Menu;
