import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import AnimatedSection from "./AnimatedSection";
import chickenMandi from "@/assets/chicken-mandi.jpg";
import muttonMandi from "@/assets/mutton-mandi.jpg";
import fishMandi from "@/assets/fish-mandi.jpg";
import mixedGrill from "@/assets/mixed-grill.jpg";
import biryani from "@/assets/biryani.jpg";
import kabsa from "@/assets/kabsa.jpg";
import prawnMandi from "@/assets/prawn-mandi.jpg";
import lambChops from "@/assets/lamb-chops.jpg";

const Menu = () => {
  const menuItems = [
    {
      image: chickenMandi,
      title: "Chicken Mandi",
      description: "Tender chicken pieces on fragrant yellow rice with aromatic spices",
      price: "AED 45",
      rating: 4.8,
      isNew: true,
    },
    {
      image: muttonMandi,
      title: "Mutton Mandi",
      description: "Slow-cooked mutton on saffron rice with pomegranate and herbs",
      price: "AED 55",
      rating: 4.9,
    },
    {
      image: fishMandi,
      title: "Fish Mandi",
      description: "Grilled fish fillet on yellow basmati rice with lemon",
      price: "AED 50",
      rating: 4.6,
    },
    {
      image: mixedGrill,
      title: "Mixed Grill",
      description: "Assorted grilled meats with kebabs on aromatic rice",
      price: "AED 65",
      rating: 4.7,
      isNew: true,
    },
    {
      image: biryani,
      title: "Biryani Special",
      description: "Fragrant rice with spices, fried onions and fresh herbs",
      price: "AED 40",
      rating: 4.8,
    },
    {
      image: kabsa,
      title: "Kabsa Rice",
      description: "Aromatic rice with whole spices, almonds and raisins",
      price: "AED 42",
      rating: 4.5,
    },
    {
      image: prawnMandi,
      title: "Prawn Mandi",
      description: "Grilled prawns on saffron rice with fresh herbs",
      price: "AED 58",
      rating: 4.7,
    },
    {
      image: lambChops,
      title: "Lamb Chops",
      description: "Grilled lamb chops with charred edges on rice",
      price: "AED 70",
      rating: 4.9,
      isNew: true,
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