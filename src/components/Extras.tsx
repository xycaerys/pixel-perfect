const Extras = () => {
  const extrasCategories = [
    {
      title: "EXTRA PROTEIN",
      items: [
        { name: "Mutton", price: "AED 15" },
        { name: "Lamb", price: "AED 18" },
        { name: "Chicken", price: "AED 12" },
      ],
    },
    {
      title: "EXTRA MANDI RICE",
      items: [
        { name: "Medium Rice", price: "AED 10" },
        { name: "Large Rice", price: "AED 15" },
      ],
    },
    {
      title: "MUFFIN WOLF",
      items: [
        { name: "Chocolate", price: "AED 8" },
        { name: "Blueberry", price: "AED 8" },
      ],
    },
    {
      title: "EXTRA VECTOR",
      items: [
        { name: "Grilled Vegetables", price: "AED 10" },
        { name: "Extra Sauce", price: "AED 5" },
      ],
    },
    {
      title: "EXTRA PURI",
      items: [
        { name: "Plain Puri", price: "AED 5" },
        { name: "Garlic Puri", price: "AED 6" },
      ],
    },
    {
      title: "EXTRAS & DRINKS",
      items: [
        { name: "Salad", price: "AED 8" },
        { name: "Raita", price: "AED 6" },
        { name: "Soft Drink", price: "AED 5" },
        { name: "Fresh Juice", price: "AED 12" },
        { name: "Laban", price: "AED 7" },
      ],
    },
    {
      title: "PREMIUM SAUCES",
      items: [
        { name: "Tahini", price: "AED 5" },
        { name: "Garlic Sauce", price: "AED 5" },
        { name: "Spicy Chili", price: "AED 4" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-primary" id="extras">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-5 px-5 py-1.5 border border-gold/40 rounded-full">
            <p className="text-gold text-xs font-medium tracking-[0.1em] uppercase">Customize Your Meal</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 text-foreground">
            Extras & Add-ons
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {extrasCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-muted rounded-2xl p-6 hover:shadow-[0_8px_30px_hsl(165_40%_5%_/_0.4)] transition-all duration-300"
            >
              <h3 className="text-gold font-medium text-xs mb-5 uppercase tracking-[0.1em]">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="flex justify-between items-center py-2 border-b border-muted/30 last:border-0"
                  >
                    <span className="text-foreground font-light">{item.name}</span>
                    <span className="text-gold font-serif font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extras;