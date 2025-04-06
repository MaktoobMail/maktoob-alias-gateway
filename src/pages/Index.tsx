
import React from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
