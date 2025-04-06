
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={cn(
      "feature-gradient rounded-xl p-6 transition-all duration-300 hover:shadow-lg", 
      className
    )}>
      <div className="mb-4 text-brand-primary text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-brand-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
