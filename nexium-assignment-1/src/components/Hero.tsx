// Combines the topic selector, quote button, and accordion display
import { QuoteButton } from "./QuoteButton";
import { QuotesAccordion } from "@/components/QuotesAccordion";
import { Selector } from "./Selector";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-dvh min-h-[60vh] bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg p-8 animate-fadeIn">
      {/* Quote icon */}
      <Image
        src={'/quote.png'}
        alt="Quote Icon"
        width={100}
        height={100}
        className="mb-6 animate-bounce drop-shadow-lg"
      />
      {/* App title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 text-center whitespace-nowrap w-full px-2 lg:overflow-visible">
        Welcome To QuoteNation
      </h1>
      {/* Dropdown to select topic */}
      <Selector />
      {/* Button to fetch quotes */}
      <QuoteButton />
      {/* Accordion to display quotes */}
      <QuotesAccordion />
    </section>
  );
}
