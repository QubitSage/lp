import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Shield, CreditCard, Banknote, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import garrafinhaImage from "@/assets/garrafinha-hero.jpg";
import liquidificadorImage from "@/assets/liquidificador-hero.jpg";
import raladorImage from "@/assets/ralador-hero.jpg";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = {
    garrafinha: {
      name: "Garrafa Térmica com Display LED",
      image: garrafinhaImage,
      price: "R$ 97,90",
      originalPrice: "R$ 149,90",
      checkoutUrl: "https://pay.cakto.com.br/nmcijk4_576192",
      stock: 7,
      features: [
        "Mantém bebidas quentes ou frias por até 12h",
        "Visor digital LED mostra a temperatura em tempo real",
        "Capacidade de 500ml, leve e portátil",
        "Aço inox 304, livre de BPA",
        "Tampa à prova de vazamentos com vedação em silicone"
      ],
      description: "A Garrafa Térmica com Display LED é perfeita para acompanhar sua rotina. Com visor digital em tempo real, você sempre sabe a temperatura da sua bebida. Mantém quente ou frio por até 12 horas, sem vazamentos, ideal para viagens, escritório e dia a dia."
    },
    
    liquidificador: {
      name: "Mini Liquidificador Fresh Juice",
      image: liquidificadorImage,
      price: "R$ 97,90",
      originalPrice: "R$ 159,90",
      checkoutUrl: "https://pay.cakto.com.br/8ej2k3z_576187",
      stock: 5,
      features: [
        "Motor potente e portátil",
        "6 lâminas em aço inoxidável",
        "Copo de 400ml integrado",
        "Recarregável via USB",
        "Autonomia de até 15 usos por carga"
      ],
      description: "O Mini Liquidificador Fresh Juice é compacto mas poderoso: tritura frutas, gelo e até prepara shakes, sucos e papinhas em segundos. Portátil e recarregável, é perfeito para levar onde quiser, garantindo praticidade e saúde sempre à mão."
    },
    
    ralador: {
      name: "Ralador & Triturador 14 em 1",
      image: raladorImage,
      price: "R$ 97,90",
      originalPrice: "R$ 129,90",
      checkoutUrl: "https://pay.cakto.com.br/486dmfh_575004",
      stock: 3,
      features: [
        "14 funções em 1 produto multifuncional",
        "8 lâminas intercambiáveis em aço inox 420",
        "Rala, tritura, fatia e pica diversos alimentos",
        "Base estável e design ergonômico",
        "Acompanha caixa para lâminas e escovas de limpeza"
      ],
      description: "O Ralador & Triturador 14 em 1 é a solução completa para a sua cozinha. Com lâminas afiadas em aço inox e design seguro, permite ralar, fatiar, picar e triturar alimentos em segundos, economizando tempo e facilitando o preparo das refeições."
    }    
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à página inicial
          </Button>
        </div>
      </div>
    );
  }

  const handlePurchase = () => {
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        content_name: product.name,
        content_category: 'Produtos para Casa',
        value: 97.90,
        currency: 'BRL'
      });
    }
    
    window.open(product.checkoutUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos produtos
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full rounded-lg shadow-card"
              />
              {product.stock <= 10 && (
                <Badge variant="urgent" className="absolute top-4 right-4 text-base py-2 px-4">
                  Apenas {product.stock} restantes!
                </Badge>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold">Garantia 30 dias</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <Truck className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold">Frete Grátis*</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
                <span className="text-muted-foreground">(127 avaliações)</span>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    <div className="text-5xl font-bold text-secondary">{product.price}</div>
                    <p className="text-muted-foreground">ou 12x de R$ 8,16 sem juros</p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="xl" 
                      variant="cta" 
                      className="w-full text-xl"
                      onClick={handlePurchase}
                    >
                      🛒 COMPRAR AGORA
                    </Button>

                    <div className="flex justify-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        <span>Cartão até 12x</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Banknote className="w-5 h-5" />
                        <span>Boleto à vista</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Características:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Descrição:</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;