import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-6">About BaseSphere</h1>
        <p className="text-gray-300">
          BaseSphere is your comprehensive directory and educational platform for the Base ecosystem.
          We provide developers and learners with the tools, resources, and knowledge needed to build
          on Base.
        </p>
      </div>
    </div>
  );
};

export default About;