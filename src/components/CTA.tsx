import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export const CTA = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };
  
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Build the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Future?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of ambitious students who are already building tomorrow's biggest companies. Your next co-founder, mentor, or investor is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Join Aspra Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
            
            {/* Newsletter signup */}
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Stay Updated
              </h3>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-primary/20 rounded-xl"
                  required
                />
                <Button type="submit" variant="hero" className="px-6 rounded-xl">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-2">
                Get weekly updates on new features, success stories, and opportunities.
              </p>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-1000" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-8 right-8 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
};