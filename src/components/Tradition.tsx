import { Award, Clock, Users } from "lucide-react";

const Tradition = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients sourced directly from trusted suppliers",
    },
    {
      icon: Clock,
      title: "Traditional Methods",
      description: "Our chefs follow authentic Arabian cooking techniques passed down through generations",
    },
    {
      icon: Users,
      title: "Family Experience",
      description: "Perfect for family gatherings and special occasions with generous portions",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-block mb-4 px-4 py-1 border border-gold/30 rounded-full">
              <p className="text-gold text-sm font-medium">OUR STORY</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              A Tradition of Authentic<br />
              <span className="text-gold">Arabian Flavors</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Mandi House, we bring the rich culinary heritage of Arabia to your table. 
              Our open kitchen concept allows you to witness the artistry behind each dish, 
              from the slow-cooked tender meats to the perfectly spiced aromatic rice. 
              Every meal is a celebration of authentic flavors, traditional cooking methods, 
              and the warm hospitality that Arabian culture is known for.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-gold/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-medium-green rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tradition;
