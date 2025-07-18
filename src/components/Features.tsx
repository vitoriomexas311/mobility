import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Brain, 
  Smartphone, 
  Database, 
  Shield, 
  Rocket,
  Code,
  GitBranch,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description: "Advanced AI understands your natural language and creates full-featured mobile apps instantly."
    },
    {
      icon: Smartphone,
      title: "Native Mobile Apps",
      description: "Generate truly native iOS and Android apps with platform-specific optimizations."
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Seamless integration with Supabase and Firebase for authentication, databases, and APIs."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "From idea to app store in minutes, not months. Deploy instantly with our optimized pipeline."
    },
    {
      icon: Code,
      title: "Clean Code Export",
      description: "Get production-ready, well-documented code that you can modify and extend."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in security best practices, authentication, and data protection."
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Automatic Git integration with branching, commits, and deployment workflows."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team in real-time with shared projects and permissions."
    },
    {
      icon: Rocket,
      title: "Auto Deployment",
      description: "One-click deployment to app stores with automated testing and release management."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Build
            <span className="block text-purple-primary">Amazing Mobile Apps</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From concept to app store with enterprise-grade features and AI assistance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-premium group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;