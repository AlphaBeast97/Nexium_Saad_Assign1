import { QuoteButton } from "./QuoteButton";
import { QuotesAccordion } from "@/components/QuotesAccordion";
import { Selector } from "./Selector";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-dvh min-h-[60vh] bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg p-8 animate-fadeIn">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 text-center whitespace-nowrap w-full px-2 lg:overflow-visible">
        Welcome To QuoteNation
      </h1>
      <Selector />
      <QuoteButton />
      <QuotesAccordion />
    </section>
  );
}
