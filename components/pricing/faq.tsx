"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What technologies do you use?",
    answer:
      "I specialize in modern frontend technologies including React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. I always choose the best tools for your specific project needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A Starter project typically takes 1 week, Professional projects take 2-3 weeks, and Custom projects are scheduled based on requirements. I always provide realistic timelines upfront.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! All plans include revisions. Starter includes 2 rounds, Professional includes 4 rounds, and Custom projects include unlimited revisions to ensure you're completely satisfied.",
  },
  {
    question: "What's included in maintenance?",
    answer:
      "Custom plan maintenance includes bug fixes, security updates, performance optimization, and minor content updates. I ensure your project stays current and runs smoothly.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "You can start with a smaller plan and upgrade as your project grows. I'll work with you to ensure a smooth transition and apply any previous payments to the new plan.",
  },
  {
    question: "Do you work with existing projects?",
    answer:
      "Yes, I can work with existing codebases. Whether you need new features, performance improvements, or a complete redesign, I can help. Contact me for a Custom plan tailored to your needs.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border-strong"
            >
              <AccordionTrigger className="text-left text-lg transition-colors hover:text-brand-500 dark:hover:text-brand-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="paragraph leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
