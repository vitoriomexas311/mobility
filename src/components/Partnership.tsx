import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Shield, Zap, Globe, CheckCircle, ArrowRight } from "lucide-react";

const Partnership = () => {
  const partners = [
    {
      name: "Supabase",
      description: "Open source Firebase alternative with PostgreSQL database, authentication, and real-time subscriptions.",
      features: [
        "PostgreSQL Database",
        "Row Level Security",
        "Real-time subscriptions",
        "Built-in Authentication",
        "Edge Functions",
        "File Storage"
      ],
      color: "from-green-500 to-emerald-600",
      icon: Database
    },
    {
      name: "Firebase", 
      description: "Google's comprehensive app development platform with NoSQL database, authentication, and hosting.",
      features: [
        "Firestore Database", 
        "Firebase Auth",
        "Cloud Functions",
        "Push Notifications",
        "Analytics",
        "App Distribution"
      ],
      color: "from-orange-500 to-red-600",
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in security with authentication, authorization, and data encryption."
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Zero configuration required. We handle all the backend setup automatically."
    },
    {
      icon: Globe,
      title: "Global Scale", 
      description: "Deploy worldwide with CDN, edge functions, and global infrastructure."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powered by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose from our premium partnerships with the most trusted backend providers in the industry.
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 animate-slide-up">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/60 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-premium group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${partner.color} flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                  <partner.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-purple-primary transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {partner.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-6 group-hover:border-purple-primary group-hover:text-purple-primary transition-colors"
              >
                Learn More About {partner.name}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-primary/10 border border-purple-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Build with Premium Backend?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get started with our seamless integration and have your backend configured in seconds, not hours.
          </p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4 h-auto">
            Start Building Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;