import { User, Search, MessageSquare, BookOpen, DollarSign, UserCheck } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const features = [
  {
    icon: User,
    title: "Builder Profiles",
    description: "Showcase your skills, projects, and vision with rich, interactive profiles that attract the right connections.",
  },
  {
    icon: Search,
    title: "Co-Founder Matching",
    description: "Advanced AI algorithms match you with potential co-founders based on complementary skills and shared interests.",
  },
  {
    icon: MessageSquare,
    title: "Community Forums",
    description: "Engage in discussions, share insights, and get feedback from a vibrant community of student entrepreneurs.",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access curated content, templates, guides, and tools to accelerate your entrepreneurial journey.",
  },
  {
    icon: DollarSign,
    title: "Funding Access",
    description: "Connect with investors, apply for grants, and discover funding opportunities tailored for student startups.",
  },
  {
    icon: UserCheck,
    title: "Mentorship Network",
    description: "Get guidance from experienced entrepreneurs, industry experts, and successful alumni in your field.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aspra provides all the tools, connections, and resources young entrepreneurs need to transform ideas into thriving businesses.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-3xl p-4 shadow-card">
              <img 
                src={appMockup} 
                alt="Aspra mobile app" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-1">
            <div className="glass-card rounded-3xl p-4 shadow-card">
              <img 
                src={dashboardMockup} 
                alt="Aspra dashboard" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
          
          <div className="space-y-8 lg:order-2">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};