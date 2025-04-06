
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 w-full">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-brand-primary">
            Maktoob<span className="text-brand-secondary">.me</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
        
        <div>
          <Button 
            className="bg-brand-primary hover:bg-brand-primary/90 text-white"
            asChild
          >
            <a href="#signup">Get Early Access</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
