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
    <section className="py-20 bg-primary" id="extras">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 border border-gold/30 rounded-full">
            <p className="text-gold text-sm font-medium">CUSTOMIZE YOUR MEAL</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Extras & Add-ons
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {extrasCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-gold font-semibold text-lg mb-4 uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center">
                    <span className="text-card-foreground">{item.name}</span>
                    <span className="text-gold font-semibold">{item.price}</span>
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
