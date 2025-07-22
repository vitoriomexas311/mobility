import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const exampleMessages = [
    {
      type: "user",
      content: "Create a fitness tracking app with workout logs and progress charts"
    },
    {
      type: "ai",
      content: "I'll create a fitness app with workout tracking, progress visualization, and user profiles. Building components now..."
    },
    {
      type: "user", 
      content: "Build a recipe sharing app with ingredients search"
    },
    {
      type: "ai",
      content: "Creating a recipe app with search functionality, ingredient lists, and social sharing features..."
    },
    {
      type: "user",
      content: "Make a todo app with categories and due dates"
    },
    {
      type: "ai", 
      content: "Building a task management app with categorization, due date tracking, and priority levels..."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % exampleMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-teal-primary/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 backdrop-blur-glass text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>AI-Powered App Development</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Describe Your App Idea
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Just tell us what you want to build in plain English. Our AI will create a complete, functional app with beautiful design and backend integration.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg shadow-premium overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-primary/5 border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="font-medium">AI App Builder</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-[300px]">
                {exampleMessages.slice(0, currentMessageIndex + 1).map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {currentMessageIndex < exampleMessages.length - 1 && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <input
                    type="text"
                    placeholder="Describe your app idea here..."
                    className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                    disabled
                  />
                  <Button size="sm" className="h-8 w-8 p-0">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* What You Can Build */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">What can you build?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-medium text-primary mb-2">Business Apps</h3>
                <p className="text-sm text-muted-foreground">CRM systems, inventory management, employee portals</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-medium text-primary mb-2">Social Apps</h3>
                <p className="text-sm text-muted-foreground">Communities, messaging, content sharing platforms</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-medium text-primary mb-2">Utility Apps</h3>
                <p className="text-sm text-muted-foreground">Todo lists, calculators, tracking tools, dashboards</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto group"
              asChild
            >
              <Link to="/builder">
                Start Building Your App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              No coding required • Complete with backend • Deploy instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;