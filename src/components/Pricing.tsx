
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10,000 data points",
        "5 custom dashboards",
        "Email support",
        "Basic analytics",
        "7-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 data points",
        "Unlimited dashboards",
        "Priority support",
        "Advanced analytics",
        "30-day data retention",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data points",
        "Unlimited dashboards",
        "24/7 phone support",
        "AI-powered insights",
        "Unlimited data retention",
        "Advanced team features",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, Transparent
            <span className="bg-accent-gradient bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 animate-fade-in ${
                plan.popular
                  ? 'bg-accent-gradient border-accent shadow-glow'
                  : 'bg-card border-border hover:shadow-card-glow'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-background border border-accent rounded-full px-4 py-2 flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="text-sm font-medium text-accent">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-foreground/70'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-foreground/70'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-accent'}`} />
                    <span className={`${plan.popular ? 'text-white' : 'text-foreground/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "outline" : "hero"}
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? 'bg-white text-accent hover:bg-white/90'
                    : ''
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
