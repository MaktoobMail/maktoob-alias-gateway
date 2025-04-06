
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is an email alias?",
    answer: "An email alias is an alternative email address that forwards incoming messages to your primary email address. With Maktoob.me, aliases are randomly generated and can be used to protect your real email address from spam and tracking."
  },
  {
    question: "How does email forwarding work?",
    answer: "When someone sends an email to your Maktoob.me alias, our servers automatically forward that email to your primary email address. The sender never knows your real email address, maintaining your privacy."
  },
  {
    question: "Is this service completely free?",
    answer: "Early adopters will receive free alias generation and forwarding capabilities. After our initial launch, we plan to offer both free and premium tiers with additional features."
  },
  {
    question: "Can I reply to emails sent to my alias?",
    answer: "Yes! When you reply to a forwarded email, your response will appear to come from your alias, not your primary email address, maintaining your privacy throughout the conversation."
  },
  {
    question: "How many aliases can I create?",
    answer: "Early adopters will be able to create multiple aliases. The exact number will be announced when we launch."
  },
  {
    question: "Can I delete an alias if it starts receiving spam?",
    answer: "Absolutely. You'll have complete control to deactivate or delete any alias that begins receiving unwanted messages."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our email alias service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
