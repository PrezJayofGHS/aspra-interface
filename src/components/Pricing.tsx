import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with networking and basic features",
    features: [
      "Basic profile creation",
      "Limited co-founder matching (5/month)",
      "Access to community forums",
      "Basic resource library",
      "Mobile app access",
    ],
    notIncluded: [
      "Advanced matching algorithms",
      "Priority mentorship access",
      "Premium workspace features",
      "Direct investor connections",
    ],
    popular: false,
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Everything you need to accelerate your entrepreneurial journey",
    features: [
      "Everything in Free",
      "Unlimited co-founder matching",
      "Advanced AI-powered matching",
      "Priority mentorship access",
      "Premium workspace tools",
      "Direct investor connections",
      "1-on-1 monthly coaching call",
      "Early access to new features",
      "Priority support",
    ],
    popular: true,
    cta: "Start Pro Trial",
    badge: "Most Popular",
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-gradient-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock your full potential. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-3xl p-8 relative ${
                plan.popular ? 'border-2 border-primary shadow-glow' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground font-medium text-sm flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded && plan.notIncluded.map((feature, featureIndex) => (
                  <div key={`not-${featureIndex}`} className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <div className="w-4 h-4 border border-muted-foreground rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={plan.popular ? "hero" : "glass"} 
                size="lg" 
                className="w-full text-lg py-3"
              >
                {plan.popular && <Sparkles className="w-5 h-5 mr-2" />}
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Questions about pricing? Need a custom plan for your school?
          </p>
          <Button variant="ghost" size="lg">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};