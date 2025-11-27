import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Food Blogger",
      rating: 5,
      comment: "The best mandi I've had outside of Yemen! The meat is incredibly tender and the rice is perfectly seasoned. Highly recommended!",
    },
    {
      name: "Sarah Williams",
      role: "Customer",
      rating: 5,
      comment: "Amazing experience! The open kitchen concept is great, and watching the chefs prepare the food adds to the authenticity. Will definitely come back.",
    },
    {
      name: "Mohammed Ali",
      role: "Regular Customer",
      rating: 5,
      comment: "This place reminds me of home. The flavors are authentic and the portions are generous. Perfect for family dinners!",
    },
    {
      name: "Emily Chen",
      role: "Tourist",
      rating: 5,
      comment: "Discovered this gem while visiting Dubai. The staff is friendly and the food is exceptional. A must-visit for anyone who loves Arabian cuisine!",
    },
  ];

  return (
    <section className="py-20 bg-primary" id="testimonials">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 border border-gold/30 rounded-full">
            <p className="text-gold text-sm font-medium">TESTIMONIALS</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
