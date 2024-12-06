import { Navigation } from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-gray-300">
          Have questions or suggestions? We'd love to hear from you. Reach out to our team
          for support, partnerships, or general inquiries.
        </p>
      </div>
    </div>
  );
};

export default Contact;