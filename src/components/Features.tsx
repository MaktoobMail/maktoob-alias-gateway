
import React from 'react';
import FeatureCard from './FeatureCard';
import { Shield, RefreshCw, Zap, Lock, Ban, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Lock />,
      title: "Secure Email",
      description: "Enterprise-grade security to keep your communications private and safe."
    },
    {
      icon: <Zap />,
      title: "Lightning Fast",
      description: "Optimized infrastructure for quick message delivery and responsive interface."
    },
    {
      icon: <Shield />,
      title: "Privacy Features",
      description: "Built-in privacy tools including email aliases for early adopters."
    },
    {
      icon: <RefreshCw />,
      title: "Smart Organization",
      description: "Advanced filtering and organization to keep your inbox tidy."
    },
    {
      icon: <BarChart />,
      title: "Usage Insights",
      description: "Understand your email habits with helpful analytics and suggestions."
    },
    {
      icon: <Ban />,
      title: "Spam Protection",
      description: "Intelligent filtering to keep unwanted messages out of your inbox."
    }
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern email for the privacy-conscious user
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
