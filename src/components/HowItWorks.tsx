import { Users, Building, Lightbulb, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Build Your Profile",
    description: "Create a comprehensive profile showcasing your skills, interests, and entrepreneurial goals.",
  },
  {
    icon: Lightbulb,
    title: "Find Co-Founders",
    description: "Our AI-powered matching connects you with like-minded students who complement your skill set.",
  },
  {
    icon: Building,
    title: "Join Workspaces",
    description: "Collaborate in dedicated spaces with tools, resources, and community support for your projects.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Launch",
    description: "Access mentorship, funding opportunities, and resources to turn your ideas into reality.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">Aspra</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From idea to impact in four simple steps. Join thousands of students building the future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="glass-card rounded-3xl p-8 h-full transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 mx-auto shadow-glow">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
                
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};