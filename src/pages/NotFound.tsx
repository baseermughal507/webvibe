import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* 404 Animation */}
        <div className="text-8xl md:text-9xl font-bold text-gradient mb-8 animate-bounce-in">
          404
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.location.href = "/"}
            className="btn-hero group"
          >
            <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Go Home
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="btn-outline-hero group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 opacity-50">
          <div className="flex justify-center space-x-8">
            <div className="w-4 h-4 bg-primary rounded-full animate-float"></div>
            <div className="w-4 h-4 bg-success rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="w-4 h-4 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
