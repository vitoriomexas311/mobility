import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Cpu, Smartphone, Rocket, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Describe Your App",
      description: "Simply tell us what kind of mobile app you want to build using natural language. Be as detailed or as simple as you like.",
      example: "\"Create a fitness tracking app with workout logging and social features\""
    },
    {
      icon: Cpu,
      number: "02", 
      title: "AI Generates Code",
      description: "Our advanced AI analyzes your requirements and generates clean, production-ready code for both iOS and Android platforms.",
      example: "Native components, navigation, state management, and API integration"
    },
    {
      icon: Smartphone,
      number: "03",
      title: "Preview & Customize",
      description: "See your app come to life instantly in our simulator. Make real-time changes and adjustments until it's perfect.",
      example: "Live preview with instant updates and device testing"
    },
    {
      icon: Rocket,
      number: "04",
      title: "Deploy & Launch",
      description: "One-click deployment to app stores with automated testing, compliance checks, and release management.",
      example: "App Store, Google Play, and enterprise distribution"
    }
  ];

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Idea to App Store in
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Four Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our streamlined process takes you from concept to a published mobile app faster than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/60 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-premium group relative overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-purple-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-purple-primary">
                    <p className="text-sm text-muted-foreground italic">
                      {step.example}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-purple-primary/40" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4 h-auto">
            Start Building Your App Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;