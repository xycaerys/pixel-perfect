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
  const menuItems = [
    // Singles
    {
      image: chickenMandiSingle,
      title: "Chicken Mandi Single",
      description: "Tender chicken marinated with aromatic spices, served on fragrant saffron rice. Serves 1 person.",
      price: "$24",
      rating: 4.9,
    },
    {
      image: muttonMandiSingle,
      title: "Mutton Mandi Single",
      description: "Succulent mutton slow cooked with traditional Yemeni spices and saffron rice. Serves 1 person.",
      price: "$25",
      rating: 4.8,
    },
    {
      image: fishMandiSingle,
      title: "Fish Mandi Single",
      description: "Fresh fish fillet grilled with authentic spices, served on aromatic rice. Serves 1 person.",
      price: "$24",
      rating: 4.7,
    },
    {
      image: chickenTikkaMandiSingle,
      title: "Chicken Tikka Mandi Single",
      description: "Tender chicken tikka pieces with aromatic basmati rice. Serves 1 person.",
      price: "$24",
      rating: 4.8,
    },
    {
      image: mixedMandiSingle,
      title: "Mixed Mandi Single",
      description: "A perfect combination of chicken and mutton with aromatic rice. Serves 1 person.",
      price: "$35",
      rating: 4.8,
      isNew: true,
    },
    // Plates (1-2 persons)
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
      image: fishMandiPlate,
      title: "Fish Mandi Plate",
      description: "Fresh fish with aromatic rice and special sauce. Serves 1-2 persons.",
      price: "$32",
      rating: 4.7,
    },
    {
      image: chickenTikkaMandiPlate,
      title: "Chicken Tikka Mandi Plate",
      description: "Chicken tikka with generous rice portion. Serves 1-2 persons.",
      price: "$32",
      rating: 4.8,
    },
    {
      image: mixedMandiPlate,
      title: "Mixed Mandi Plate",
      description: "Chicken and mutton combination platter. Serves 2-3 persons.",
      price: "$55",
      rating: 4.9,
    },
    // Family Plates
    {
      image: chickenMandiFamilyPlate,
      title: "Chicken Mandi Family Plate",
      description: "Perfect for family gatherings with generous chicken portions. Serves 4-5 persons.",
      price: "$75",
      rating: 4.8,
      isNew: true,
    },
    {
      image: muttonMandiFamilyPlate,
      title: "Mutton Mandi Family Plate",
      description: "Premium mutton family platter with aromatic rice. Serves 4-5 persons.",
      price: "$90",
      rating: 4.8,
    },
    {
      image: mixedMandiFamilyPlate,
      title: "Mixed Mandi Family Plate",
      description: "Grand platter with chicken and mutton. Serves 3-4 persons.",
      price: "$110",
      rating: 4.9,
    },
    // Extras
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
                delay: index * 0.05,
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
