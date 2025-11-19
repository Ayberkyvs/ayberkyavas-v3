import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "@/sanity/lib/client";
import { GET_FAQS_QUERY } from "@/sanity/lib/queries";
import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Faq } from "@/types/pricing";

export async function FAQSection() {
  const { faq: faqs } = await client.fetch(GET_FAQS_QUERY);

  if (!faqs || faqs.length === 0) {
    return (
      <Alert variant="destructive" className="mt-8 gap-2">
        <AlertCircleIcon />
        <AlertTitle>Unable to load faqs</AlertTitle>
        <AlertDescription>
          <p>Please try again later.</p>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <section className="py-24">
      <div className="mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border-strong"
            >
              <AccordionTrigger className="text-left text-base transition-colors hover:text-brand-500 dark:hover:text-brand-200 md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="paragraph leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
