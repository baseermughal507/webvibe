import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/20 shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl md:text-3xl font-bold text-gradient cursor-pointer transition-transform hover:scale-105"
            onClick={() => scrollToSection("hero")}
          >
            WebVibe
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", id: "hero" },
              { name: "Services", id: "services" },
              { name: "Projects", id: "portfolio" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-900 dark:text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 dark:border-gray-700/20">
            <div className="flex flex-col space-y-3 pt-4">
              {[
                { name: "Home", id: "hero" },
                { name: "Services", id: "services" },
                { name: "Projects", id: "portfolio" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-900 dark:text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
