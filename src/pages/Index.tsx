import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Hero />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Index;