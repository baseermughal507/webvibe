import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, Globe } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Health-o-Nutrition Website",
      category: "WordPress Development",
      description: "WordPress-based nutrition website optimized for search engines with comprehensive health content",
      technologies: ["WordPress", "SEO"],
      liveUrl: "https://health-o-nutrition.com", // Replace with your actual website
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Portfolio Website",
      category: "Custom Development", 
      description: "This portfolio is hand-coded using modern web technologies for speed, scalability, and design excellence. Built with React, powered by Vite for blazing-fast performance, styled with Tailwind CSS, and enhanced with shadcn/ui components for a professional UI.",
      features: [
        "Responsive and mobile-friendly design",
        "Lightning-fast performance with Vite", 
        "Clean and modern UI using Tailwind CSS + shadcn/ui",
        "Scalable code structure for future growth"
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
      liveUrl: "https://baseerportfolio.vercel.app/",
      icon: <Code2 className="w-8 h-8 text-purple-600" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our recent projects that showcase our expertise and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-portfolio group animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    {project.icon}
                  </div>
                  <div className="relative z-10">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  </div>
                  
                  {/* Animated background elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
                </div>

                <div className="p-8">
                  {/* Project Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features (if available) */}
                  {project.features && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Live Demo Button */}
                  <Button 
                    className="btn-cta group w-full"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-secondary p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your ideas and create something amazing together
            </p>
            <Button 
              className="btn-hero"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;