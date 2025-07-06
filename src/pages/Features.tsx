
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone,
  Database,
  LineChart,
  Target,
  Clock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep dive into your data with comprehensive analytics tools and customizable dashboards.",
      category: "Analytics"
    },
    {
      icon: PieChart,
      title: "Data Visualization",
      description: "Transform complex data into beautiful, interactive charts and graphs.",
      category: "Visualization"
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "Leverage AI to predict trends and make data-driven decisions for the future.",
      category: "AI & ML"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights and collaborate with your team in real-time.",
      category: "Collaboration"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with encryption, access controls, and compliance features.",
      category: "Security"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process and analyze data in real-time for immediate insights.",
      category: "Performance"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Scale your analytics globally with our cloud infrastructure.",
      category: "Infrastructure"
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access your dashboards and insights on any device, anywhere.",
      category: "Accessibility"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect to hundreds of data sources and APIs seamlessly.",
      category: "Integration"
    },
    {
      icon: LineChart,
      title: "Custom Reports",
      description: "Create and schedule automated reports tailored to your needs.",
      category: "Reporting"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track KPIs and business objectives with precision.",
      category: "Management"
    },
    {
      icon: Clock,
      title: "Historical Analysis",
      description: "Analyze historical trends and patterns to understand your business evolution.",
      category: "Analysis"
    }
  ];

  const categories = [...new Set(features.map(f => f.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Powerful <span className="bg-accent-gradient bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
              Discover all the tools and capabilities that make GrowTrack the ultimate analytics platform for your business.
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in">
              Start Free Trial
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Everything You Need to Grow</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Our comprehensive suite of features is designed to help businesses of all sizes unlock the power of their data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="animate-fade-in hover-scale group">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex items-center justify-between">
                        <CardTitle>{feature.title}</CardTitle>
                        <span className="text-xs bg-muted px-2 py-1 rounded">{feature.category}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Feature Categories</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Our features are organized into key categories to help you find exactly what you need.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-card rounded-lg p-4 text-center border border-border hover:border-accent/50 transition-colors animate-fade-in">
                  <h3 className="font-semibold text-sm">{category}</h3>
                  <p className="text-xs text-foreground/70 mt-1">
                    {features.filter(f => f.category === category).length} features
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-card rounded-2xl p-12 border border-border">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using GrowTrack to transform their data into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">Start Free Trial</Button>
                <Button variant="outline" size="lg">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
