import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, Smartphone, Loader2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Builder = () => {
  const location = useLocation();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedApp, setGeneratedApp] = useState("");

  // Get the saved idea from navigation state if it exists
  useEffect(() => {
    if (location.state?.idea) {
      setPrompt(location.state.idea);
    }
  }, [location.state]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    // Simulate app generation
    setTimeout(() => {
      setGeneratedApp(`
        <div style="font-family: system-ui; padding: 20px; max-width: 400px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center; margin-bottom: 20px;">Your App</h1>
          <p style="color: #666; margin-bottom: 15px;">Generated from: "${prompt}"</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="margin: 0 0 10px 0;">Feature 1</h3>
            <p style="margin: 0; font-size: 14px;">Interactive component based on your prompt</p>
          </div>
          <button style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; width: 100%;">
            Action Button
          </button>
        </div>
      `);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/10 bg-background/80 backdrop-blur-glass sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">App Builder</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Prompt Area */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Describe Your App
              </h1>
              <p className="text-muted-foreground">
                Tell us what you want to build and we'll create it for you
                instantly.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="prompt"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  App Description
                </label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Create a fitness tracking app with workout logging, progress charts, and social sharing features..."
                  className="min-h-[200px] text-base"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                size="lg"
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating App...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Generate App
                  </>
                )}
              </Button>
            </div>

            {/* Examples */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">
                Try these examples:
              </h3>
              <div className="space-y-2">
                {[
                  "A task management app with categories and due dates",
                  "A recipe sharing app with ingredients and ratings",
                  "A expense tracker with budget alerts",
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="text-left text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded border border-border/50 hover:border-primary/50 w-full"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Live Preview
              </h2>
              <p className="text-muted-foreground">
                Your app will appear here as you build it.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 min-h-[600px]">
              {!generatedApp && !isGenerating && (
                <div className="flex items-center justify-center h-full text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                      <Smartphone className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">
                        Ready to Build
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Enter your app description and click "Generate App" to
                        see your creation come to life.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isGenerating && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
                    <div>
                      <h3 className="font-medium text-foreground mb-2">
                        Creating Your App
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI is analyzing your requirements and building your
                        app...
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {generatedApp && !isGenerating && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-foreground">
                      Generated App Preview
                    </h3>
                    <Button variant="outline" size="sm">
                      Export Code
                    </Button>
                  </div>
                  <div className="border border-border rounded-lg bg-background">
                    <div
                      className="p-4"
                      dangerouslySetInnerHTML={{ __html: generatedApp }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
