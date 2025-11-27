import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold mb-4">Mandi House</h3>
            <p className="text-muted-foreground text-sm">
              Bringing authentic Arabian flavors to your table since 2020.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
              <li><a href="#extras" className="hover:text-gold transition-colors">Extras</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Sunday</li>
              <li>11:00 AM - 11:00 PM</li>
              <li className="text-gold">Open Every Day</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-card p-2 rounded-full hover:bg-gold/10 transition-colors">
                <Facebook className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="bg-card p-2 rounded-full hover:bg-gold/10 transition-colors">
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="bg-card p-2 rounded-full hover:bg-gold/10 transition-colors">
                <Twitter className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mandi House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
