import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science, Stanford",
    company: "TechFlow (YC S23)",
    content: "Aspra helped me find my co-founder and we've since raised $500K in pre-seed funding. The platform's matching algorithm is incredible - it connected me with someone who perfectly complements my technical skills.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "Business, MIT",
    company: "EcoScale",
    content: "The mentorship network on Aspra is unmatched. I got connected with three industry veterans who guided our sustainability startup from concept to our first $100K in revenue.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Priya Patel",
    role: "Design, RISD",
    company: "CreativeSpace",
    content: "I found my entire founding team through Aspra's workspace feature. We collaborated on projects, built trust, and eventually launched our design platform together. Now we're backed by top VCs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const useCases = [
  {
    title: "Student Entrepreneurs",
    description: "Launch your startup while still in school with access to co-founders, mentors, and funding.",
    stat: "500+ startups launched",
  },
  {
    title: "Co-Founder Matching",
    description: "Find the perfect business partner based on complementary skills and shared vision.",
    stat: "85% match success rate",
  },
  {
    title: "Funding Access",
    description: "Connect with investors who specifically back student-led ventures and early-stage startups.",
    stat: "$2M+ total funding raised",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* Use Cases */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Students Use{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Aspra</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real impact, real results. See how Gen Z entrepreneurs are building the future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {useCase.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories from{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Our Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from students who transformed their ideas into thriving businesses with Aspra.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 relative">
              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};