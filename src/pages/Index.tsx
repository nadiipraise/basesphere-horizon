import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Newsletter } from "@/components/Newsletter";
import { Sections } from "@/components/Sections";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navigation />
      <Hero />
      <Sections />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Index;