import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, LogIn, UserPlus } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E]/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              BaseSphere
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-10 bg-[#1A2038]/50 border-primary/20"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </div>

          <Button variant="ghost" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};