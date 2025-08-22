import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 311 5892707",
      link: "tel:+923115892707",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email", 
      value: "mughalbaseer81@gmail.com",
      link: "mailto:mughalbaseer81@gmail.com",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with us",
      link: "https://www.linkedin.com/in/baseermughal007/",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background to-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="card-service">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in space-y-8" style={{animationDelay: '0.2s'}}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have questions about our services? Want to discuss your project? 
                We're here to help and would love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="card-service cursor-pointer group"
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{info.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-primary p-6 rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-2">Quick Response Guaranteed</h4>
              <p className="text-white/90">
                We typically respond to all inquiries within 24 hours. 
                For urgent matters, feel free to call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Note */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">
            We typically respond to all inquiries within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;