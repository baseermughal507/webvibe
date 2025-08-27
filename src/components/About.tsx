"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Shield, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.7,
      ease: "easeOut" as const
    }
  })
};

const About = () => {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Expertise Across Services",
      description:
        "From web development to social media management, video editing, and content creation, we cover all aspects of digital marketing and online presence.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Modern Technology & Design",
      description:
        "Our custom-coded websites use React, Vite, Tailwind CSS, and shadcn/ui to ensure fast, responsive, and visually stunning experiences.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Client-Focused Approach",
      description:
        "We listen, understand your goals, and deliver solutions tailored to your brand. Communication and satisfaction are our top priorities.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Reliable & Scalable Solutions",
      description:
        "Whether it's a portfolio, landing page, blog, or full website, we build projects that are future-ready, easy to maintain, and scalable as your business grows.",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We provide complete digital solutions that help your brand grow,
            engage audiences, and stand out online. Here's why clients trust us:
          </motion.p>
        </motion.div>

        {/*  Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="card-service group hover:shadow-xl transition-all duration-500"
            >
              <CardContent className="p-8">
                {/* Icon with gradient */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {reason.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Keep animations here*/}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="bg-gradient-secondary p-8 md:p-12 rounded-3xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground text-lg">
              Our commitment to excellence and innovation drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fast Delivery",
                description:
                  "Quick turnaround times without compromising quality"
              },
              {
                title: "24/7 Support",
                description:
                  "Always available to help with your questions and concerns"
              },
              {
                title: "Competitive Pricing",
                description:
                  "Premium services at affordable rates with transparent pricing"
              },
              {
                title: "Future-Proof Solutions",
                description: "Built with scalability and modern standards in mind"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
                className="text-center group"
              >
                <div
                  className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 
                  group-hover:bg-gray-800 dark:group-hover:bg-gray-900 
                  transition-colors"
                >
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                  <h4
                    className="font-semibold mb-2 
                  text-gray-900 dark:text-gray-100 
                  group-hover:text-white"
                  >
                    {benefit.title}
                  </h4>
                  <p
                    className="text-sm 
                  text-gray-700 dark:text-gray-300 
                  group-hover:text-gray-200 transition-colors"
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
