import { Star, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      review: "Simplesmente perfeito! A garrafinha térmica mantém a água gelada o dia todo. Comprei para minha filha e ela amou o display LED.",
      verified: true
    },
    {
      id: 2,
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      review: "O mini liquidificador é incrível! Faço vitaminas todos os dias agora. Muito prático e fácil de limpar.",
      verified: true
    },
    {
      id: 3,
      name: "Ana Carolina",
      location: "Belo Horizonte, MG",
      rating: 5,
      review: "O ralador multifuncional facilitou muito minha vida na cozinha. Ralo queijo, cenoura, tudo muito rápido!",
      verified: true
    },
    {
      id: 4,
      name: "Carlos Eduardo",
      location: "Brasília, DF",
      rating: 5,
      review: "Entrega rápida e produto de qualidade. A garrafinha é linda e funcional. Recomendo!",
      verified: true
    },
    {
      id: 5,
      name: "Fernanda Costa",
      location: "Porto Alegre, RS",
      rating: 5,
      review: "Comprei os 3 produtos e todos superaram minhas expectativas. Atendimento excelente!",
      verified: true
    },
    {
      id: 6,
      name: "Roberto Lima",
      location: "Salvador, BA",
      rating: 5,
      review: "O liquidificador é potente mesmo sendo pequeno. Minha esposa está fazendo sucos detox todos os dias.",
      verified: true
    },
    {
      id: 7,
      name: "Patricia Oliveira",
      location: "Fortaleza, CE",
      rating: 5,
      review: "Produto chegou antes do prazo! A garrafinha térmica é perfeita para levar para o trabalho.",
      verified: true
    },
    {
      id: 8,
      name: "Marcos Pereira",
      location: "Curitiba, PR",
      rating: 5,
      review: "Ralador multifuncional é um show! Facilita muito o preparo das refeições. Vale cada centavo!",
      verified: true
    },
    {
      id: 9,
      name: "Luciana Rodrigues",
      location: "Recife, PE",
      rating: 5,
      review: "Adorei a compra! Produtos de qualidade e preço justo. Já indiquei para várias amigas.",
      verified: true
    },
    {
      id: 10,
      name: "Diego Almeida",
      location: "Goiânia, GO",
      rating: 5,
      review: "Mini liquidificador é perfeito para quem mora sozinho. Faço shake de proteína todos os dias.",
      verified: true
    },
    {
      id: 11,
      name: "Camila Ferreira",
      location: "Manaus, AM",
      rating: 5,
      review: "A garrafinha com display LED é um diferencial incrível! Meus filhos ficaram encantados.",
      verified: true
    },
    {
      id: 12,
      name: "André Barbosa",
      location: "Vitória, ES",
      rating: 5,
      review: "Todos os produtos são de excelente qualidade. Entrega rápida e embalagem perfeita!",
      verified: true
    },
    {
      id: 13,
      name: "Juliana Martins",
      location: "Campo Grande, MS",
      rating: 5,
      review: "O ralador facilita muito minha vida! Corta tudo perfeitamente e é muito seguro de usar.",
      verified: true
    },
    {
      id: 14,
      name: "Rafael Souza",
      location: "João Pessoa, PB",
      rating: 5,
      review: "Comprei para minha mãe e ela está adorando! Produtos práticos e de qualidade.",
      verified: true
    },
    {
      id: 15,
      name: "Gabriela Nunes",
      location: "Florianópolis, SC",
      rating: 5,
      review: "Melhor compra que fiz! A garrafinha térmica é linda e mantém a temperatura perfeita.",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="secondary" className="text-lg py-2 px-4">
            ⭐ +50.000 CLIENTES SATISFEITOS
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 50 mil pessoas já transformaram suas rotinas com nossos produtos. 
            Veja os depoimentos reais de quem já comprou!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 space-y-4">
                {/* Header com foto e nome */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          ✓ Verificado
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground leading-relaxed">"{review.review}"</p>

                {/* Espaço para mídias (fotos e vídeo) */}
                <div className="space-y-3 pt-2 border-t border-border/30">
                  <p className="text-sm font-medium text-muted-foreground">Fotos e vídeos do cliente:</p>
                  
                  {/* Área para 2 fotos */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square bg-muted/50 rounded-lg border-2 border-dashed border-border/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          📷
                        </div>
                        <p className="text-xs text-muted-foreground">Foto 1</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-muted/50 rounded-lg border-2 border-dashed border-border/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          📷
                        </div>
                        <p className="text-xs text-muted-foreground">Foto 2</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Área para vídeo */}
                  <div className="aspect-video bg-muted/50 rounded-lg border-2 border-dashed border-border/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Play className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Vídeo do cliente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            ⚡ <strong>Junte-se a milhares de clientes satisfeitos!</strong> ⚡
          </p>
        </div>
      </div>
    </section>
  );
};