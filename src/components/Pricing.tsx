
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap, Building, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with analytics",
      icon: Zap,
      features: [
        "Up to 5 team members",
        "10,000 data points/month",
        "Basic dashboards",
        "Email support",
        "Standard integrations",
        "Mobile app access"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Advanced features for growing businesses",
      icon: Building,
      features: [
        "Up to 25 team members",
        "100,000 data points/month",
        "Advanced dashboards",
        "Priority support",
        "All integrations",
        "Custom reports",
        "API access",
        "Advanced analytics"
      ],
      buttonText: "Get Started",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "Full-scale solution for large organizations",
      icon: Crown,
      features: [
        "Unlimited team members",
        "Unlimited data points",
        "Custom dashboards",
        "24/7 phone support",
        "White-label solution",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, <span className="bg-accent-gradient bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our core analytics features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative animate-fade-in hover-scale ${
                  plan.popular 
                    ? 'border-accent shadow-card-glow scale-105' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-foreground/70">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-foreground/70 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-foreground/60">
            Need a custom plan? <a href="#contact" className="text-accent hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
