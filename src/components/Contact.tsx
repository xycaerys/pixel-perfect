import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Al Barsha, Dubai", "United Arab Emirates"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 4 123 4567", "+971 50 123 4567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mandihouse.ae", "orders@mandihouse.ae"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Sun: 11:00 AM - 11:00 PM", "Open Every Day"],
    },
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 border border-gold/30 rounded-full">
            <p className="text-gold text-sm font-medium">GET IN TOUCH</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us, call us, or send us a message. We're here to serve you!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-card-foreground">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-dark-green font-semibold px-8">
            Make a Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
