import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-hero text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold font-heading">Modely</h1>
            <Badge variant="secondary" className="animate-pulse">
              <Flame className="w-4 h-4 mr-1" />
              OFERTA LIMITADA
            </Badge>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-lg font-semibold">🚚 Frete GRÁTIS para todo Brasil</p>
            <p className="text-sm opacity-90">Acima de R$ 150,00</p>
          </div>
        </div>
      </div>
    </header>
  );
};