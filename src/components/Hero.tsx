import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, Shield } from "lucide-react";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="text-lg py-2 px-4 animate-pulse">
            🔥 PROMOÇÃO RELÂMPAGO - APENAS HOJE!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground leading-tight">
            Produtos <span className="text-primary">Revolucionários</span><br />
            para sua <span className="text-secondary">Cozinha</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra 3 produtos inovadores que vão transformar sua rotina na cozinha. 
            <strong className="text-foreground"> Apenas R$ 97,90 cada produto</strong> - 
            parcelado em até 12x sem juros!
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2 text-primary">
              <Star className="w-6 h-6 fill-current" />
              <span className="font-semibold">Qualidade Premium</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-6 h-6" />
              <span className="font-semibold">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Garantia 30 dias</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              size="xl" 
              variant="cta" 
              onClick={scrollToProducts}
              className="text-xl px-12"
            >
              🛍️ VER PRODUTOS AGORA
            </Button>
            <p className="text-sm text-muted-foreground">
              ⏰ Oferta válida por tempo limitado ou até esgotar o estoque
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};