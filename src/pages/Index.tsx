
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
