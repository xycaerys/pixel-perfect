import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import AnimatedSection from "./AnimatedSection";
import chickenMandiSingle from "@/assets/chicken-mandi-single.png";
import mixedMandiSingle from "@/assets/mixed-mandi-single.png";
import chickenMandiPlate from "@/assets/chicken-mandi-plate.png";
import muttonMandiPlate from "@/assets/mutton-mandi-plate.png";
import mixedMandiFamilyPlate from "@/assets/mixed-mandi-family-plate.png";
import mixedSet from "@/assets/mixed-set.png";
import halfChicken from "@/assets/half-chicken.png";
import fullChicken from "@/assets/full-chicken.png";

const Menu = () => {
  const menuItems = [
    {
      image: chickenMandiSingle,
      title: "Chicken Mandi Single",
      description: "Tender chicken marinated with aromatic spices, served on fragrant saffron rice. Serves 1 person.",
      price: "$24",
      rating: 4.9,
    },
    {
      image: mixedMandiSingle,
      title: "Mixed Mandi Single",
      description: "A perfect combination of chicken and mutton with aromatic rice. Serves 1 person.",
      price: "$35",
      rating: 4.8,
      isNew: true,
    },
    {
      image: chickenMandiPlate,
      title: "Chicken Mandi Plate",
      description: "Generous chicken portion with fragrant rice. Serves 1-2 persons.",
      price: "$32",
      rating: 4.9,
    },
    {
      image: muttonMandiPlate,
      title: "Mutton Mandi Plate",
      description: "Premium mutton cuts with traditional rice preparation. Serves 1-2 persons.",
      price: "$35",
      rating: 4.8,
    },
    {
      image: mixedMandiFamilyPlate,
      title: "Mixed Mandi Family Plate",
      description: "Chicken and mutton combination platter. Serves 2-3 persons.",
      price: "$55",
      rating: 4.9,
      isNew: true,
    },
    {
      image: mixedSet,
      title: "Mixed Set",
      description: "A delightful combination of our signature items.",
      price: "$40",
      rating: 4.9,
    },
    {
      image: halfChicken,
      title: "Half Chicken",
      description: "Perfectly seasoned half chicken, slow cooked to perfection.",
      price: "$16",
      rating: 4.8,
    },
    {
      image: fullChicken,
      title: "Full Chicken",
      description: "Whole chicken marinated in traditional spices.",
      price: "$25",
      rating: 4.9,
    },
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <MenuCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
