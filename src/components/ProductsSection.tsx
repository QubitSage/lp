import { ProductCard } from "./ProductCard";
import { Badge } from "@/components/ui/badge";
import { Timer } from "lucide-react";
import garrafinhaImage from "@/assets/garrafinha-hero.jpg";
import liquidificadorImage from "@/assets/liquidificador-hero.jpg";
import raladorImage from "@/assets/ralador-hero.jpg";
export const ProductsSection = () => {
  const trackPurchase = (productName: string, checkoutUrl: string) => {
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: productName,
        content_category: 'Produtos para Casa',
        value: 97.90,
        currency: 'BRL'
      });
    }

    // Redirect to checkout
    window.open(checkoutUrl, '_blank');
  };
  const products = [{
    id: "garrafinha",
    name: "Garrafinha Premium",
    image: garrafinhaImage,
    description: "Garrafinha térmica de alta qualidade que mantém a temperatura por horas. Perfeita para levar água gelada ou quente para qualquer lugar.",
    originalPrice: "R$ 149,90",
    currentPrice: "R$ 97,90",
    checkoutUrl: "https://pay.cakto.com.br/nmcijk4_576192",
    stock: 7
  }, {
    id: "liquidificador",
    name: "Mini Liquidificador",
    image: liquidificadorImage,
    description: "Liquidificador portátil e potente, ideal para vitaminas, shakes e sucos. Compacto e fácil de usar, perfeito para o dia a dia.",
    originalPrice: "R$ 159,90",
    currentPrice: "R$ 97,90",
    checkoutUrl: "https://pay.cakto.com.br/8ej2k3z_576187",
    stock: 5
  }, {
    id: "ralador",
    name: "Ralador Multifuncional",
    image: raladorImage,
    description: "Ralador versátil com múltiplas lâminas. Ideal para queijo, legumes, frutas e muito mais. Design ergonômico e seguro.",
    originalPrice: "R$ 129,90",
    currentPrice: "R$ 97,90",
    checkoutUrl: "https://pay.cakto.com.br/486dmfh_575004",
    stock: 3
  }];
  return <section id="produtos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="urgent" className="text-lg py-2 px-4">
            <Timer className="w-5 h-5 mr-2" />
            ÚLTIMAS HORAS DA PROMOÇÃO!
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Nossos Produtos <span className="text-primary">Exclusivos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os produtos com <strong className="text-secondary">35% de desconto</strong> por tempo limitado. 
            Não perca essa oportunidade única!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map(product => <ProductCard key={product.id} {...product} onBuyClick={() => trackPurchase(product.name, product.checkoutUrl)} />)}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-lg text-muted-foreground">
            💳 <strong>Formas de Pagamento:</strong> Cartão em até 12x sem juros | Boleto à vista
          </p>
          
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-lg border border-destructive/20">
            <Timer className="w-5 h-5" />
            <span className="font-semibold">Estoque limitado - Últimas unidades disponíveis!</span>
          </div>
        </div>
      </div>
    </section>;
};