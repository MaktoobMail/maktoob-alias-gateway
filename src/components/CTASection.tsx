
import React from 'react';
import SignUpForm from './SignUpForm';

const CTASection = () => {
  return (
    <section id="signup" className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-primary text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Inbox?
          </h2>
          <p className="text-xl text-brand-light/90 mb-8">
            Sign up now for early access to Maktoob.me and get lifetime free email aliases.
          </p>
          
          <div className="flex justify-center">
            <SignUpForm />
          </div>
          
          <p className="mt-6 text-brand-light/80 text-sm">
            We respect your privacy. We'll never share your email address.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
