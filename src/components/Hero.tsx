
import React from 'react';
import SignUpForm from './SignUpForm';

const Hero = () => {
  return (
    <section className="hero-gradient text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Modern Email for Everyone
          </h1>
          <p className="text-xl md:text-2xl text-brand-light mb-8">
            A fresh approach to email with built-in privacy features.
            Sign up for early access and get email aliases as a bonus.
          </p>
          
          <div className="flex justify-center mb-8">
            <SignUpForm className="animate-slide-up" />
          </div>
          
          <div className="text-center">
            <p className="text-brand-light/80 text-sm">
              🎁 Early adopters get premium features including unlimited email aliases forever!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
