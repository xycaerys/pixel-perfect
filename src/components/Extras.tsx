import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Extras = () => {
  const extrasCategories = [
    {
      title: "EXTRA CHICKEN",
      items: [
        { name: "Full Chicken", price: "$25" },
        { name: "Half Chicken", price: "$16" },
        { name: "Quarter Chicken", price: "$10" },
      ],
    },
    {
      title: "EXTRA MUTTON",
      items: [
        { name: "Mutton Set", price: "$22" },
        { name: "1 Lamb Shank", price: "$15" },
      ],
    },
    {
      title: "EXTRA FISH",
      items: [
        { name: "Fish 1 Piece", price: "$10" },
      ],
    },
    {
      title: "EXTRA MANDI RICE",
      items: [
        { name: "Extra Mandi Rice - Serves 1 Person", price: "$12" },
      ],
    },
    {
      title: "MUTTON SOUP",
      items: [
        { name: "Small", price: "$4" },
        { name: "Large", price: "$6" },
      ],
    },
    {
      title: "EXTRAS & DRINKS",
      items: [
        { name: "Mandi Sauce", price: "$2" },
        { name: "Mint Sauce", price: "$2" },
        { name: "Salad", price: "$3" },
        { name: "Drink 375ml", price: "$2" },
        { name: "Drink 1.25L", price: "$6" },
        { name: "Ayran", price: "$5" },
        { name: "Plain Lassi", price: "$5" },
        { name: "Mango Lassi", price: "$5" },
        { name: "Any Desserts", price: "$6" },
      ],
    },
  ];

  const preOrderItems = [
    { name: "Mutton Leg Mandi", price: "$120", note: "24 hours advance notice required" },
    { name: "Mutton Shoulder Mandi", price: "$110", note: "24 hours advance notice required" },
  ];

  return (
    <section className="py-24 royal-gradient-alt arabian-pattern" id="extras">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-5 px-5 py-1.5 border border-gold/40 rounded-full">
            <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Customize Your Meal</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground royal-text-shadow">
            Extras & Add-ons
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
          {extrasCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h3 className="text-gold font-semibold text-sm mb-4 tracking-[0.15em] uppercase border-b border-gold/30 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-card/50 border border-muted/50 rounded-lg px-4 py-3 flex items-center gap-4 hover:border-gold/40 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <span className="text-foreground font-light text-sm">{item.name}</span>
                    <span className="text-gold font-semibold">{item.price}</span>
                    <button className="text-gold hover:text-gold-light transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pre-Order Section */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="border-2 border-dashed border-gold/40 rounded-2xl p-8 bg-card/30">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">PRE-ORDER ONLY</h3>
              <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-medium tracking-wide">
                24 Hours Notice
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {preOrderItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card/50 border border-muted/50 rounded-xl p-5 flex items-center justify-between hover:border-gold/40 transition-all duration-300"
                >
                  <div>
                    <p className="text-foreground font-medium mb-1">{item.name}</p>
                    <p className="text-muted-foreground text-xs font-light">{item.note}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold font-serif text-xl font-semibold">{item.price}</span>
                    <button className="text-gold hover:text-gold-light transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extras;
