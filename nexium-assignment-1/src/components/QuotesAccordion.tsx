"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuotesContext } from "@/provider/QuoteProvider";
import { useContext } from "react";

type Quote = {
  id: string;
  author: string;
  topic?: string;
  text: string;
};

export function QuotesAccordion() {
  // Get quotes from context
  const QuotesData = useContext(QuotesContext);
  const { quotes } = (QuotesData || { quotes: [] }) as { quotes: Quote[] };
  if (!quotes.length) return null;
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full max-w-md mt-6 border border-blue-300 bg-white/90 rounded-lg shadow-lg p-4"
    >
      {quotes.map((quote, index) => (
        <AccordionItem
          key={quote.id}
          value={`item-${index + 1}`}
          className="border-b border-blue-200 last:border-b-0"
        >
          <AccordionTrigger className="text-blue-800 font-semibold">
            {quote.author} - {quote.topic}
          </AccordionTrigger>
          <AccordionContent className="text-blue-900">
            <p className="text-base md:text-lg">{quote.text}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
