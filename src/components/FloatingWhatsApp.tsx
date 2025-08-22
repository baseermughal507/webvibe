import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+923115892707";
    const message = "Hi! I'm interested in your services. Can we discuss my project?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="floating-whatsapp group"
      size="lg"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default FloatingWhatsApp;