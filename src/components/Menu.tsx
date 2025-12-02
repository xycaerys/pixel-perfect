import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import AnimatedSection from "./AnimatedSection";
import chickenMandiSingle from "@/assets/chicken-mandi-single.png";
import muttonMandiSingle from "@/assets/mutton-mandi-single.png";
import fishMandiSingle from "@/assets/fish-mandi-single.png";
import chickenTikkaMandiSingle from "@/assets/chicken-tikka-mandi-single.png";
import mixedMandiSingle from "@/assets/mixed-mandi-single.png";
import chickenMandiPlate from "@/assets/chicken-mandi-plate.png";
import muttonMandiPlate from "@/assets/mutton-mandi-plate.png";
import fishMandiPlate from "@/assets/fish-mandi-plate.png";
import chickenTikkaMandiPlate from "@/assets/chicken-tikka-mandi-plate.png";
import mixedMandiPlate from "@/assets/mixed-mandi-plate.png";
import chickenMandiFamilyPlate from "@/assets/chicken-mandi-family-plate.png";
import muttonMandiFamilyPlate from "@/assets/mutton-mandi-family-plate.png";
import mixedMandiFamilyPlate from "@/assets/mixed-mandi-family-plate.png";
import mixedSet from "@/assets/mixed-set.png";
import halfChicken from "@/assets/half-chicken.png";
import fullChicken from "@/assets/full-chicken.png";

const Menu = () => {
  const singles = [
    {
      image: chickenMandiSingle,
      title: "Chicken Mandi Single",
      description: "Juicy chicken leg with Mandi rice served with dipping sauce, fresh salad",
      price: "$24",
      rating: 4.9,
    },
    {
      image: muttonMandiSingle,
      title: "Mutton Mandi Single",
      description: "Juicy lamb chops with Mandi rice, dipping sauce, fresh salad",
      price: "$25",
      rating: 5,
    },
    {
      image: fishMandiSingle,
      title: "Fish Mandi Single",
      description: "Juicy fish fillet with rice, 3 types of salads and sauces, nut salad",
      price: "$24",
      rating: 4.9,
    },
    {
      image: chickenTikkaMandiSingle,
      title: "Chicken Tikka Mandi Single",
      description: "Juicy boneless chicken with Mandi rice, dipping sauces, fresh salad",
      price: "$24",
      rating: 5,
    },
    {
      image: mixedMandiSingle,
      title: "Mixed Mandi Single",
      description: "Juicy chicken leg and lamb chops with rice, dipping sauces, nut salad",
      price: "$35",
      rating: 4.9,
      isNew: true,
    },
  ];

  const plates = [
    {
      image: chickenMandiPlate,
      title: "Chicken Mandi Plate",
      description: "Juicy chicken leg and rice with Extra Large, salad, sauce, Nut Salad",
      price: "$32",
      rating: 5,
    },
    {
      image: muttonMandiPlate,
      title: "Mutton Mandi Plate",
      description: "Juicy lamb chops with rice with Eggs, Large Salad, 2 Dipping sauces, Nuts salad",
      price: "$35",
      rating: 4.9,
    },
    {
      image: fishMandiPlate,
      title: "Fish Mandi Plate",
      description: "Juicy fish fillet with rice, 3 types of salads and sauces, nut salad",
      price: "$32",
      rating: 4.9,
    },
    {
      image: chickenTikkaMandiPlate,
      title: "Chicken Tikka Mandi Plate",
      description: "Juicy boneless chicken with rice, dipping sauces, large salad, nuts salad",
      price: "$32",
      rating: 5,
    },
    {
      image: mixedMandiPlate,
      title: "Mixed Mandi Plate",
      description: "Juicy chicken leg and lamb chops with rice with Large Salad, 2 Dipping Sauces, Nut Salad",
      price: "$55",
      rating: 5,
    },
  ];

  const familyPlates = [
    {
      image: chickenMandiFamilyPlate,
      title: "Chicken Mandi Family Plate",
      description: "Served 4 Chicken Quarter With Rice, 3 Types Sauces, Nut Salad And Large Salad",
      price: "$75",
      rating: 5,
      isNew: true,
    },
    {
      image: muttonMandiFamilyPlate,
      title: "Mutton Mandi Family Plate",
      description: "Served 4 Chicken Quarter With Rice, Large Salad, 4 Dipping Sauces, Nuts Salad",
      price: "$90",
      rating: 4.9,
    },
    {
      image: mixedMandiFamilyPlate,
      title: "Mixed Mandi Family Plate",
      description: "Juicy chicken leg and lamb chops with rice with Large Salad, 2 Dipping Sauces, Nut Salad",
      price: "$110",
      rating: 5,
    },
  ];

  const extras = [
    {
      image: mixedSet,
      title: "Mixed Set",
      description: "Served lamb Chop, chicken leg, half chicken, and fish, with rice, 3 dipping sauces",
      price: "$40",
      rating: 5,
    },
    {
      image: halfChicken,
      title: "Half Chicken",
      description: "Served with rice, sauces, 2 Salad, and soup",
      price: "$16",
      rating: 4.9,
    },
    {
      image: fullChicken,
      title: "Full Chicken",
      description: "Served with rice, sauces, salad, and soup",
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
            Discover the authentic flavors of Arabian cuisine with our signature dishes
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

        {/* Pre-Order Section */}
        <motion.div
          className="mt-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="border-2 border-dashed border-gold/40 rounded-2xl p-8 bg-card/30">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">PRE-ORDER ONLY</h3>
              <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-medium tracking-wide">
                24 Hours Notice Required
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-muted/50 rounded-xl p-6 flex items-center justify-between hover:border-gold/40 transition-all duration-300">
                <div>
                  <p className="text-foreground font-serif text-xl font-semibold mb-1">Mutton Leg Mandi</p>
                  <p className="text-muted-foreground text-sm font-light">Whole mutton leg slow cooked with aromatic spices. Pre-order required.</p>
                </div>
                <div className="text-right ml-4">
                  <span className="text-gold font-serif text-2xl font-bold">$120</span>
                </div>
              </div>
              <div className="bg-card/50 border border-muted/50 rounded-xl p-6 flex items-center justify-between hover:border-gold/40 transition-all duration-300">
                <div>
                  <p className="text-foreground font-serif text-xl font-semibold mb-1">Mutton Shoulder Mandi</p>
                  <p className="text-muted-foreground text-sm font-light">Premium shoulder cut with traditional preparation. Pre-order required.</p>
                </div>
                <div className="text-right ml-4">
                  <span className="text-gold font-serif text-2xl font-bold">$110</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
