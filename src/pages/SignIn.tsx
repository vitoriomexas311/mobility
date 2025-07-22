import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Chrome, Smartphone, Loader2 } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Get the saved idea from navigation state if it exists
  const savedIdea = location.state?.idea || "";

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      toast({
        title: "Welcome back!",
        description: `Successfully signed in as ${user.displayName}`,
      });

      // Navigate to builder with the saved idea if it exists
      if (savedIdea) {
        navigate("/builder", { state: { idea: savedIdea } });
      } else {
        navigate("/builder");
      }
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/10 bg-background/80 backdrop-blur-glass">
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
            <span className="font-semibold text-lg">Mobility</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="w-full max-w-md space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-blue-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome to Mobility
            </h1>
            <p className="text-muted-foreground">
              {savedIdea
                ? "Sign in to start building your app idea"
                : "Sign in to start building amazing apps with AI"}
            </p>
          </div>

          {/* Saved Idea Display */}
          {savedIdea && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
              <h3 className="font-medium text-green-800">Your App Idea</h3>
              <p className="text-sm text-green-700 italic">"{savedIdea}"</p>
              <p className="text-xs text-green-600">
                This idea will be preserved after you sign in
              </p>
            </div>
          )}

          {/* Sign In Card */}
          <div className="bg-card border border-border rounded-lg shadow-lg p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                Sign in to your account
              </h2>
              <p className="text-sm text-muted-foreground">
                Continue with your Google account to get started
              </p>
            </div>

            {/* Google Sign In Button */}
            <Button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              size="lg"
              className="w-full bg-blue-primary hover:from-green-700 hover:to-green-800 text-white shadow-md transition-all duration-200 hover:shadow-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Chrome className="w-5 h-5" />
                  Continue with Google
                </>
              )}
            </Button>

            {/* Benefits */}
            <div className="space-y-3 pt-4 border-t border-border">
              <h3 className="text-sm font-medium text-foreground">
                What you get:
              </h3>
              <div className="space-y-2">
                {[
                  "AI-powered app generation",
                  "Save and manage your projects",
                  "Deploy apps instantly",
                  "Access to premium features",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-primary rounded-full" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link
              to="/terms"
              className="text-blue-primary hover:text-blue-primary underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-blue-primary hover:text-blue-primary underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
