
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

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
      toast.success("Thank you for signing up! We'll be in touch soon.");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${className} w-full max-w-md`}>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base"
            aria-label="Email"
          />
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
        <Button 
          type="submit" 
          className="bg-brand-secondary hover:bg-brand-secondary/90 text-white h-12 px-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing up..." : "Get Early Access"}
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
