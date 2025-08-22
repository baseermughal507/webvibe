import { Button } from "@/components/ui/button";
import heroDarkImage from "@/assets/hero-bg-dark.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(54, 106, 197, 0.9) 0%, rgba(33, 145, 186, 0.9) 50%, rgba(33, 145, 109, 0.8) 100%), url(${heroDarkImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-success/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight animate-slide-up">
            We Bring Your{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Digital Ideas
            </span>{" "}
            to Life
          </h1>

          {/* Short, Impactful Tagline */}
          <p className="text-2xl md:text-3xl text-white/95 mb-12 font-medium animate-slide-up max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
            Professional Web Development & Digital Solutions
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up mb-16" style={{animationDelay: '0.4s'}}>
            <Button 
              onClick={scrollToServices}
              className="btn-hero text-xl px-12 py-6 animate-pulse-glow"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Stats or Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;