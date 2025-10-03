import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Link as LinkIcon, Github, Linkedin, Twitter } from "lucide-react";

const Profile = () => {
  const profile = {
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    tagline: "Full-Stack Developer & Startup Enthusiast",
    location: "San Francisco, CA",
    bio: "Passionate about building products that solve real problems. Currently working on an AI-powered productivity tool. Looking for a technical co-founder to scale and launch.",
    skills: ["React", "TypeScript", "Node.js", "Python", "AI/ML", "Product Design"],
    interests: ["SaaS", "EdTech", "AI", "Web3"],
    lookingFor: ["Technical Co-founder", "Mentor", "Investors"],
    projects: [
      {
        name: "TaskFlow AI",
        description: "AI-powered task management platform that predicts deadlines and auto-prioritizes work",
        status: "In Development"
      },
      {
        name: "StudyHub",
        description: "Collaborative study platform for college students with real-time note sharing",
        status: "Launched"
      }
    ],
    socials: {
      github: "alexrivera",
      linkedin: "alexrivera",
      twitter: "alexrivera",
      website: "alexrivera.dev"
    },
    joinedDate: "January 2024",
    connections: 127
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Profile Header Card */}
        <Card className="glass-card border-primary/20 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="w-32 h-32 border-4 border-primary/30">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="text-2xl bg-gradient-primary">AR</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {profile.name}
                    </h1>
                    <p className="text-lg text-primary font-medium mb-3">
                      {profile.tagline}
                    </p>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{profile.location}</span>
                      </div>
                      <span>•</span>
                      <span>{profile.connections} connections</span>
                      <span>•</span>
                      <span>Joined {profile.joinedDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="hero">
                      <Mail className="w-4 h-4" />
                      Connect
                    </Button>
                    <Button variant="outline">
                      Message
                    </Button>
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {profile.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`https://github.com/${profile.socials.github}`} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`https://linkedin.com/in/${profile.socials.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`https://twitter.com/${profile.socials.twitter}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`https://${profile.socials.website}`} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Projects */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-foreground">{project.name}</h3>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-foreground/70">{project.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      className="bg-gradient-primary text-primary-foreground px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Looking For */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">Looking For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {profile.lookingFor.map((item, index) => (
                    <div 
                      key={index}
                      className="px-4 py-3 rounded-lg bg-accent/10 border border-accent/30 text-center"
                    >
                      <span className="text-accent font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-secondary text-secondary-foreground border-border"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;