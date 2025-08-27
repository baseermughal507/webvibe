import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import wordpressImg from "@/assets/wordpress-service.jpg";
import codingImg from "@/assets/coding-service.jpg";
import socialImg from "@/assets/social-service.jpg";
import videoImg from "@/assets/video-service.jpg";
import contentImg from "@/assets/content-service.jpg";

const Services = () => {
  const services = [
    {
      title: "WordPress Websites",
      subtitle: "Full-stack, CMS-driven",
      description: "Best when clients want easy management of content.",
      features: [
        "Content Management System (CMS) - clients can add/edit pages, blogs, products without coding",
        "Can handle e-commerce (WooCommerce), booking systems, blogs, etc.",
        "Thousands of plugins - SEO, security, payments, analytics",
        "Custom themes or fully coded themes possible"
      ],
      useCases: ["Business websites", "E-commerce stores", "Blogs & news portals", "Portfolio sites"],
      price: "99€",
      image: wordpressImg,
      badge: "Most Popular"
    },
    {
      title: "Custom-Coded Websites",
      subtitle: "Modern Frontend",
      description: "We build fast, modern, and responsive websites using the latest technologies. Our stack ensures performance, design flexibility, and a smooth user experience.",
      technologies: [
        "⚛️ React.js – Interactive, dynamic, and scalable web applications",
        "⚡ Vite – Lightning-fast development and optimized builds",
        "🎨 Tailwind CSS – Modern, responsive, and sleek designs",
        "🧩 shadcn/ui – Beautiful, pre-built components for professional UI"
      ],
      perfectFor: ["Portfolios", "Landing Pages", "Blogs & Content Websites", "Business Websites with Custom Design"],
      benefits: ["Ultra-fast", "SEO-friendly", "Fully responsive", "Modern & clean design"],
      price: "149€",
      image: codingImg,
      badge: "Premium"
    },
    {
      title: "Social Media Management",
      subtitle: "Grow your presence and engagement online",
      features: [
        "Develop engaging Posts, Graphics and videos",
        "Manage accounts: Facebook, Instagram, TikTok and LinkedIn",
        "Schedule Posts and Maintain Consistent posting Calendar",
        "Respond to comments and messages",
        "Analytics and Insights",
        "SEO and Hashtag Optimization"
      ],
      price: "99€",
      image: socialImg,
      badge: "Growth Focused"
    },
    {
      title: "Video Editing",
      subtitle: "Professional editing for marketing, YouTube, and ads",
      tools: [
        "Adobe Premier Pro",
        "CapCut",
        "InShot",
        "AI Editor"
      ],
      price: "29€",
      image: videoImg,
      badge: "Creative"
    },
    {
      title: "Content Writing",
      subtitle: "Professional content creation",
      services: [
        "Blog Posts",
        "Article Writing"
      ],
      price: "19€",
      image: contentImg,
      badge: "Essential"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-background to-secondary/20">
      <div className="container-custom">
        {/* Section Header with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete digital solutions to transform your business and online presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-service group animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {service.badge && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {service.badge}
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Service Header */}
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                  
                  {service.description && (
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  )}

                  {/* Features */}
                  {service.features && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {service.technologies && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies We Use:</h4>
                      <ul className="space-y-1">
                        {service.technologies.map((tech, idx) => (
                          <li key={idx} className="text-sm">{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Perfect For */}
                  {service.perfectFor && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Perfect For:</h4>
                      <ul className="space-y-1">
                        {service.perfectFor.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Use Cases */}
                  {service.useCases && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Use Cases:</h4>
                      <ul className="space-y-1">
                        {service.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tools */}
                  {service.tools && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Tools:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {service.tools.map((tool, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Services List */}
                  {service.services && (
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  {service.benefits && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Your website will be:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-gradient">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offer */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <Sparkles className="w-8 h-8 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4">Special Discount Offer!</h3>
            <p className="text-lg">
              We have discount offers if you choose more than one service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
