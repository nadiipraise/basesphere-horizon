import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Image, Code2, Server, GraduationCap, PiggyBank } from "lucide-react";

const sections = [
  {
    title: "DeFi Protocols",
    description: "Explore decentralized finance protocols built on Base",
    icon: Coins,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "NFT Projects",
    description: "Discover NFT collections and marketplaces",
    icon: Image,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Developer Tools",
    description: "Essential tools and resources for Base developers",
    icon: Code2,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Infrastructure",
    description: "Core infrastructure and network solutions",
    icon: Server,
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    title: "Education",
    description: "Learning resources and documentation",
    icon: GraduationCap,
    gradient: "from-red-500 to-rose-400",
  },
  {
    title: "Earn on Base",
    description: "Discover ways to earn rewards and incentives",
    icon: PiggyBank,
    gradient: "from-indigo-500 to-violet-400",
  },
];

export const Sections = () => {
  return (
    <section className="py-20 mt-16 bg-[#0A0F1E]">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Explore the Base Ecosystem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Card 
              key={section.title}
              className="group bg-[#1A2038]/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${section.gradient} mb-4`}>
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};