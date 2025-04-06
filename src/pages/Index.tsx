
import React from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="flex-1">
        <main className="flex-1">
          <Hero />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
