import { Button } from "@/components/ui/button";
import { ArrowUp, Phone, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; //  Official WhatsApp logo

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" }
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />, //  Replaced MessageCircle with FaWhatsapp
      url: "https://wa.me/923115892707",
      color: "hover:text-green-500"
    },
    {
      name: "LinkedIn", 
      icon: <MessageCircle className="w-5 h-5" />, 
      url: "https://www.linkedin.com/in/baseermughal007/",
      color: "hover:text-blue-500"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:mughalbaseer81@gmail.com",
      color: "hover:text-purple-500"
    },
    {
      name: "Phone",
      icon: <Phone className="w-5 h-5" />,
      url: "tel:+923115892707",
      color: "hover:text-orange-500"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-secondary/10 border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-gradient mb-4">Web Services</div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                We bring your digital ideas to life with modern web development, 
                social media management, video editing, and content creation services.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`${social.color} transition-colors border-border hover:border-primary`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+92 311 5892707</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    mughalbaseer81@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-4 h-4 text-primary" /> {/*  Changed here too */}
                  <span className="text-muted-foreground">WhatsApp Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 WebServices. All rights reserved.
            </div>
            
            <div className="flex gap-4 text-sm">
              <button 
                onClick={() => window.open("https://policies.google.com/privacy", "_blank")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.open("https://policies.google.com/terms", "_blank")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
            </div>

            {/* Back to Top Button */}
            <Button 
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group hover:border-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
