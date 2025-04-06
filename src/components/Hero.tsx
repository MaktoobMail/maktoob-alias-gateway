
import React from 'react';
import SignUpForm from './SignUpForm';
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
            {t("تسجيل الدخول", "Sign in")}
          </h1>
          <p className="text-gray-600">
            {t("للمتابعة إلى مكتوب.مي", "to continue to Maktoob.me")}
          </p>
        </div>
        
        <div className="mb-6">
          <SignUpForm className="animate-fade-in" />
        </div>
        
        <div className="text-sm text-gray-600 mt-8">
          <p className="mb-2">
            {t("ليس جهازك؟ استخدم وضع التصفح الخاص.", "Not your computer? Use Guest mode.")}
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            {t("تعرف على المزيد حول استخدام وضع الضيف", "Learn more about using Guest mode")}
          </a>
        </div>
        
        <div className="flex justify-between mt-6">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
            {t("إنشاء حساب", "Create account")}
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm">
            {t("التالي", "Next")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
