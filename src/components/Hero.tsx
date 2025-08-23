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
        backgroundImage: `url(${heroDarkImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
       {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
  
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-success/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight animate-slide-up">
            We Bring Your Digital Ideas to Life
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-16 font-medium animate-slide-up max-w-4xl mx-auto" style={{animationDelay: '0.2s'}}>
            Professional Web Development & Digital Solutions
          </p>
        </div>
      </div>

      {/* CTA Button fixed above scroll indicator */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-10">
      <Button 
         onClick={scrollToServices}
        className="btn-hero text-lg px-8 py-4">
          Explore Us
      </Button>
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
