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
    <Card className="group relative bg-card border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-gold text-dark-green hover:bg-gold/90">
            NEW
          </Badge>
        )}
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs font-semibold text-gold">{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gold text-xl font-bold">{price}</span>
          <Button size="sm" className="bg-gold hover:bg-gold/90 text-dark-green font-semibold">
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;
