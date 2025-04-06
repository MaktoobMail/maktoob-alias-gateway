
import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import AliasCreationForm from './AliasCreationForm';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'signup' | 'createAlias'>('signup');

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
        
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('signup')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'signup' 
                ? 'bg-blue-100 text-blue-800' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {t("تسجيل الدخول", "Sign in")}
          </button>
          <button
            onClick={() => setActiveTab('createAlias')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'createAlias' 
                ? 'bg-blue-100 text-blue-800' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {t("إنشاء بريد إلكتروني", "Create Email Alias")}
          </button>
        </div>
        
        {activeTab === 'signup' ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-medium text-gray-800 mb-2">
                {t("تسجيل الدخول", "Sign in")}
              </h1>
            </div>
            
            <div className="mb-6">
              <SignUpForm className="animate-fade-in" />
            </div>
            
            <div className="flex justify-between mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                {t("إنشاء حساب", "Create account")}
              </a>
              <Button variant="default" size="sm">
                {t("التالي", "Next")}
              </Button>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
