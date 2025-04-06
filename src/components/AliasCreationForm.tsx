
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";
import { useLanguage } from '@/contexts/LanguageContext';

const emailSchema = z.string().email();
const aliasSchema = z.string().min(3).max(30).regex(/^[a-zA-Z0-9._-]+$/, {
  message: "Alias can only contain letters, numbers, dots, underscores, and hyphens",
});

const AliasCreationForm = ({ className = "" }: { className?: string }) => {
  const [alias, setAlias] = useState("");
  const [forwardingEmail, setForwardingEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aliasError, setAliasError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { language, t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAliasError("");
    setEmailError("");
    
    let isValid = true;
    
    try {
      aliasSchema.parse(alias);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setAliasError(t("اسم المستخدم غير صالح", "Invalid alias name"));
        isValid = false;
      }
    }
    
    try {
      emailSchema.parse(forwardingEmail);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setEmailError(t("يرجى إدخال عنوان بريد إلكتروني صالح", "Please enter a valid email address"));
        isValid = false;
      }
    }
    
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Success - would normally send this to an API
    console.log("Created alias:", { alias: `${alias}@maktoob.me`, forwardingEmail });
    setAlias("");
    setForwardingEmail("");
    setIsSubmitting(false);
    toast.success(
      t("تم إنشاء البريد الإلكتروني بنجاح.", 
        "Email alias created successfully.")
    );
  };

  return (
    <form onSubmit={handleSubmit} className={`${className} w-full`}>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <label htmlFor="alias" className="text-sm font-medium">
            {t("اسم المستخدم", "Username")}
          </label>
          <div className="flex items-center">
            <Input
              id="alias"
              type="text"
              placeholder={t("اسم المستخدم", "username")}
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="h-12 text-base border rounded-l-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              aria-label={t("اسم المستخدم", "Username")}
              disabled={isSubmitting}
            />
            <div className="h-12 px-3 flex items-center bg-gray-100 border border-l-0 border-gray-300 rounded-r-md">
              @maktoob.me
            </div>
          </div>
          {aliasError && <p className="text-sm text-red-500 mt-1">{aliasError}</p>}
        </div>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="forwardingEmail" className="text-sm font-medium">
            {t("توجيه إلى", "Forward to")}
          </label>
          <Input
            id="forwardingEmail"
            type="email"
            placeholder={t("بريدك الإلكتروني الحالي", "your current email")}
            value={forwardingEmail}
            onChange={(e) => setForwardingEmail(e.target.value)}
            className="h-12 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            aria-label={t("توجيه إلى", "Forward to")}
            disabled={isSubmitting}
          />
          {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
        </div>
        
        <Button 
          type="submit" 
          className="h-12 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? t("جاري الإنشاء...", "Creating...") 
            : t("إنشاء بريد إلكتروني", "Create Email Alias")}
        </Button>
      </div>
    </form>
  );
};

export default AliasCreationForm;
