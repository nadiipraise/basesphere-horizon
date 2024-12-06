import { Code2, BookOpen, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Developer Tools",
    description: "Discover essential tools and resources for building on Base",
    icon: Wrench,
  },
  {
    title: "Learning Resources",
    description: "Comprehensive guides and documentation to help you get started",
    icon: BookOpen,
  },
  {
    title: "Code Examples",
    description: "Ready-to-use code snippets and sample projects",
    icon: Code2,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-[#0A0F1E]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-[#1A2038]/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};