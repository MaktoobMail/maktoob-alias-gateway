
import React from 'react';
import SignUpForm from './SignUpForm';
import { Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-10 h-10 text-brand-secondary">
            <Mail size={32} />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-2">
            تسجيل الدخول
          </h1>
          <p className="text-gray-600">
            للمتابعة إلى مكتوب.مي
          </p>
        </div>
        
        <div className="mb-6">
          <SignUpForm className="animate-fade-in" />
        </div>
        
        <div className="text-sm text-gray-600 mt-8">
          <p className="mb-2">
            ليس جهازك؟ استخدم وضع التصفح الخاص.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            تعرف على المزيد حول استخدام وضع الضيف
          </a>
        </div>
        
        <div className="flex justify-between mt-6">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
            إنشاء حساب
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm">
            التالي
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
