import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  rating?: number;
  isNew?: boolean;
}

const MenuCard = ({ image, title, description, price, rating = 4.5, isNew }: MenuCardProps) => {
  return (
    <Card className="group relative bg-card border border-muted rounded-xl overflow-hidden hover:shadow-[0_8px_30px_hsl(42_62%_58%_/_0.15)] hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-card flex items-center justify-center p-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-gold text-background hover:bg-gold-light text-[0.65rem] font-semibold uppercase tracking-wide px-2 py-0.5 gold-glow">
            NEW
          </Badge>
        )}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 border border-gold/20">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs font-medium text-gold">{rating}</span>
        </div>
      </div>
      <div className="p-3 md:p-5 relative flex-1 flex flex-col">
        <div className="absolute top-0 left-3 right-3 md:left-5 md:right-5 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <h3 className="font-serif text-base md:text-xl font-semibold mb-1 md:mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 font-light leading-relaxed flex-1">{description}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="font-serif text-gold text-base md:text-lg font-medium">{price}</span>
          <Button size="sm" className="bg-gold hover:bg-gold-light text-background font-medium px-3 md:px-4 text-xs md:text-sm gold-glow">
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;