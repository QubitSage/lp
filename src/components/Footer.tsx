import { Shield, Truck, CreditCard, Phone } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">Compra Segura</h3>
            <p className="text-sm opacity-80">Pagamento 100% protegido com SSL</p>
          </div>
          
          <div className="text-center">
            <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">Entrega Rápida</h3>
            <p className="text-sm opacity-80">Frete grátis</p>
          </div>
          
          <div className="text-center">
            <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">Parcelamento</h3>
            <p className="text-sm opacity-80">Até 12x sem juros no cartão</p>
          </div>
          
          <div className="text-center">
            <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold text-lg mb-2">Suporte</h3>
            <p className="text-sm opacity-80">Atendimento especializado</p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center space-y-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Modely</h2>
            <p className="opacity-80">Produtos inovadores para transformar sua casa</p>
          </div>
          
          <div className="text-sm opacity-60 space-y-2">
            <p>© 2025 Modely. Todos os direitos reservados.</p>
            <p>Política de Privacidade | Termos de Uso</p>
          </div>
        </div>
      </div>
    </footer>;
};