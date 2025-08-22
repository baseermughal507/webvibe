import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      service: "Web Development",
      quote: "WebVibe transformed our website into a modern, fast, and responsive platform. Our clients love the new look, and the performance improvements are amazing!",
      author: "Sarah Johnson",
      company: "TechStart Solutions",
      rating: 5
    },
    {
      service: "Social Media Management", 
      quote: "Thanks to their social media strategy, our engagement skyrocketed! They handle content creation, posting, and analytics seamlessly.",
      author: "Mike Chen",
      company: "Local Fitness Studio",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-secondary/20 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-testimonial animate-fade-in group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6" />
                
                {/* Service Badge */}
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  {testimonial.service}
                </div>

                {/* Quote */}
                <blockquote className="text-lg leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary/5 rounded-full"></div>
                <div className="absolute top-12 left-4 w-6 h-6 bg-success/10 rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-gradient mb-2">24h</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;