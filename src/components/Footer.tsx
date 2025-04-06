
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-gray-100 py-4 px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div>
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value as 'ar' | 'en')}
          >
            <SelectTrigger className="bg-transparent border-none text-gray-600 focus:outline-none">
              <div className="flex items-center">
                <Languages className="mr-2 h-4 w-4" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-6 rtl:space-x-reverse mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-800">{t("المساعدة", "Help")}</a>
          <a href="#" className="hover:text-gray-800">{t("الخصوصية", "Privacy")}</a>
          <a href="#" className="hover:text-gray-800">{t("البنود", "Terms")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
