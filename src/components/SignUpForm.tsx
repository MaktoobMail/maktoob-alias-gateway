
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email("يرجى إدخال عنوان بريد إلكتروني صالح");

const SignUpForm = ({ className = "" }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

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
      toast.success("تم إرسال بريد التحقق. يرجى التحقق من صندوق الوارد الخاص بك.");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("حدث خطأ. يرجى المحاولة مرة أخرى.");
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
            placeholder="البريد الإلكتروني أو الهاتف"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            aria-label="البريد الإلكتروني"
          />
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
        <div className="text-left mt-1">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            نسيت البريد الإلكتروني؟
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
