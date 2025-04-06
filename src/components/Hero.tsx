
import React from 'react';
import AliasCreationForm from './AliasCreationForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/bfa5760f-db8b-45c4-b567-748926edadc7.png" 
            alt="Maktoob Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-2">
            {t("إنشاء بريد إلكتروني", "Create Email Alias")}
          </h1>
          <p className="text-gray-600 text-sm">
            {t("أنشئ بريد إلكتروني مخصص واحصل على رسائل موجهة إلى بريدك الحالي", 
              "Create a custom email alias and get messages forwarded to your current email")}
          </p>
        </div>
        
        <div className="mb-6">
          <AliasCreationForm className="animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
