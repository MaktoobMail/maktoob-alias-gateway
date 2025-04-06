
import React from 'react';
import FeatureCard from './FeatureCard';
import { Shield, RefreshCw, Zap, Lock, Ban, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield />,
      title: "Privacy Protection",
      description: "Shield your real email address from spam, tracking, and data breaches."
    },
    {
      icon: <RefreshCw />,
      title: "Email Forwarding",
      description: "All emails sent to your alias are automatically forwarded to your primary inbox."
    },
    {
      icon: <Zap />,
      title: "Instant Generation",
      description: "Create new email aliases instantly whenever you need them."
    },
    {
      icon: <Lock />,
      title: "Secure by Design",
      description: "Built with security as a priority using AWS SES verified domains."
    },
    {
      icon: <Ban />,
      title: "Disable Anytime",
      description: "Easily disable any alias that starts receiving unwanted messages."
    },
    {
      icon: <BarChart />,
      title: "Usage Insights",
      description: "See which aliases are receiving emails and how often."
    }
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your inbox
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
