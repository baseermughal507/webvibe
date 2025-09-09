import { Button } from "@/components/ui/button";
import heroDarkImage from "@/assets/hero-bg-dark.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const rotatingWords = [
  "WEB DEVELOPMENT",
  "SOCIAL MEDIA",
  "DIGITAL SOLUTIONS",
  "VIDEO EDITING",
  "CONTENT WRITING",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);

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
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 right-20 w-24 h-24 bg-success/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-20 h-20 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Static Heading */}
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          WE BRING YOUR DIGITAL IDEAS TO LIFE
          </h1>

          {/* Rotating Words */}
          <div className="min-h-[3.5rem] md:min-h-[4.5rem] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
            key={rotatingWords[index]}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {rotatingWords[index]}
            </motion.p>
          </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-10">
        <Button onClick={scrollToServices} className="btn-hero text-lg px-8 py-4">
          Explore Us
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
