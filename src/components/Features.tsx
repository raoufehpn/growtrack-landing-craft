
import React from 'react';
import { BarChart3, Shield, Zap, Globe, Users, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your business performance with our comprehensive analytics suite."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with bank-level security and compliance standards."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time data processing and instant report generation for quick decision making."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built to handle businesses of any size, from startups to Fortune 500 companies."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights and collaborate with your team members in real-time."
    },
    {
      icon: TrendingUp,
      title: "Growth Tracking",
      description: "Monitor your growth metrics and identify opportunities for expansion."
    }
  ];

  return (
    <section id="features" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-accent-gradient bg-clip-text text-transparent"> Modern Businesses</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Everything you need to understand, analyze, and grow your business in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-card-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <feature.icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
