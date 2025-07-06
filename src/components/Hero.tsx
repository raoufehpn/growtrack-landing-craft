
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Grow Your Business with
              <span className="bg-accent-gradient bg-clip-text text-transparent"> Smart Analytics</span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your data into actionable insights. Track, analyze, and optimize your business performance with our powerful analytics platform.
            </p>
          </div>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="xl">
              Watch Demo
            </Button>
          </div>

          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Revenue Growth</h3>
              <p className="text-foreground/70 text-center">Track and optimize your revenue streams with advanced analytics</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Insights</h3>
              <p className="text-foreground/70 text-center">Understand your customers better with detailed behavioral analysis</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <BarChart3 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Reports</h3>
              <p className="text-foreground/70 text-center">Get instant insights with real-time dashboards and alerts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
