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
    <Card className="group relative bg-card border border-muted rounded-xl overflow-hidden hover:shadow-[0_8px_30px_hsl(165_40%_5%_/_0.5)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-gold text-background hover:bg-gold-light text-[0.7rem] font-semibold uppercase tracking-wide px-2.5 py-1">
            NEW
          </Badge>
        )}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 fill-gold text-gold" />
          <span className="text-xs font-medium text-gold">{rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-light leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-gold text-lg font-medium">{price}</span>
          <Button size="sm" className="bg-gold hover:bg-gold-light text-background font-medium px-4">
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;