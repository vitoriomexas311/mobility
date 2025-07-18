import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-mobile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-white/20 backdrop-blur-glass text-sm text-white/90">
            <Sparkles className="w-4 h-4 text-purple-light" />
            <span>AI-Powered Mobile Development</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Build Mobile Apps with
            <span className="block bg-gradient-to-r from-purple-light to-blue-light bg-clip-text text-transparent">
              Natural Language
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful mobile applications instantly. Just describe what you want, 
            and our AI creates a complete app with backend integration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto group"
            >
              Start Building Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              <Smartphone className="w-5 h-5" />
              See Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-white/60">Apps Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-white/60">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2min</div>
              <div className="text-white/60">Average Build Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;