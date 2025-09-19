import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ReviewsSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
