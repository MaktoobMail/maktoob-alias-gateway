
import React from 'react';
import { Check, Mail, Shield, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: "Sign Up",
    description: "Create an account with your primary email address",
    icon: <Mail className="h-8 w-8" />
  },
  {
    title: "Generate Alias",
    description: "Get a random email alias @maktoob.me",
    icon: <Shield className="h-8 w-8" />
  },
  {
    title: "Use Anywhere",
    description: "Use your alias instead of your real email",
    icon: <Check className="h-8 w-8" />
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Protecting your email privacy has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 text-center h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 text-brand-primary rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-brand-secondary">
                  <ChevronRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brand-primary font-medium mb-6">
            All emails sent to your alias are automatically forwarded to your primary inbox
          </p>
          <div className="inline-flex items-center justify-center p-2 bg-brand-primary/10 text-brand-primary rounded-lg">
            <code className="font-mono text-sm">random-alias@maktoob.me → your.real.email@example.com</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
