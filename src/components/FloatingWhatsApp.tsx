import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; //  WhatsApp logo

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "923115892707"; //  your number (no +)
    const message =
      "Hi! I'm interested in your services. Can we discuss my project?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 text-white" /> {/*  official logo of Whatsapp */}
    </Button>
  );
};

export default FloatingWhatsApp;
