
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import { useLanguage } from '@/contexts/LanguageContext';

const emailSchema = z.string().email();

const SignUpForm = ({ className = "" }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { language, t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      emailSchema.parse(email);
      setIsSubmitting(true);
      
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success - would normally send this to an API
      console.log("Submitted email:", email);
      setEmail("");
      setIsSubmitting(false);
      toast.success(
        t("تم إرسال بريد التحقق. يرجى التحقق من صندوق الوارد الخاص بك.", 
          "Verification email sent. Please check your inbox.")
      );
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(t("يرجى إدخال عنوان بريد إلكتروني صالح", "Please enter a valid email address"));
      } else {
        setError(t("حدث خطأ. يرجى المحاولة مرة أخرى.", "An error occurred. Please try again."));
      }
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${className} w-full`}>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex-1">
          <Input
            type="email"
            placeholder={t("البريد الإلكتروني", "Email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            aria-label={t("البريد الإلكتروني", "Email")}
          />
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
        <div className={`mt-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            {t("نسيت البريد الإلكتروني؟", "Forgot email?")}
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
