import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students collaborating" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-6 h-6 text-primary mr-2" />
          <span className="text-primary font-medium">Next-Generation Networking</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Build Your Future with{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Aspra
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          The networking platform built for Gen Z. Connect with co-founders, join collaborative workspaces, access startup resources, and build the future together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Join Aspra Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-4">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>10,000+ Students</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>500+ Startups Launched</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>$2M+ Funded</span>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};