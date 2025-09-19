import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CreditCard, Banknote } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  originalPrice: string;
  currentPrice: string;
  checkoutUrl: string;
  stock: number;
  onBuyClick: () => void;
}

export const ProductCard = ({
  name,
  image,
  description,
  originalPrice,
  currentPrice,
  checkoutUrl,
  stock,
  onBuyClick,
}: ProductCardProps) => {
  return (
    <Card className="relative overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105">
      {stock <= 10 && (
        <Badge variant="destructive" className="absolute top-4 right-4 z-10 animate-pulse">
          Apenas {stock} restantes!
        </Badge>
      )}
      
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        </div>

        <div className="space-y-3">
          <div className="text-center">
            <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
            <div className="text-4xl font-bold text-secondary">
              {currentPrice}
            </div>
            <p className="text-sm text-muted-foreground mt-1">ou em até 12x sem juros</p>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CreditCard className="w-4 h-4" />
              <span>Cartão 12x</span>
            </div>
            <div className="flex items-center gap-1">
              <Banknote className="w-4 h-4" />
              <span>Boleto</span>
            </div>
          </div>

          {stock <= 10 && (
            <div className="flex items-center justify-center gap-2 text-destructive font-semibold">
              <Clock className="w-4 h-4" />
              <span>Estoque limitado - Últimas unidades!</span>
            </div>
          )}

          <Button 
            size="xl" 
            variant="cta" 
            className="w-full"
            onClick={onBuyClick}
          >
            🛒 COMPRAR AGORA
          </Button>

          <div className="text-xs text-center text-muted-foreground">
            ✅ Entrega rápida em todo Brasil<br />
            ✅ Garantia de 30 dias<br />
            ✅ Compra 100% segura
          </div>
        </div>
      </CardContent>
    </Card>
  );
};