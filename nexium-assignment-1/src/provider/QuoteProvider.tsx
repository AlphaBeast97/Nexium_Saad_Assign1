"use client";
import { createContext, useState } from "react";

// 1. Create the context
type QuoteTopicContextType = {
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
};

export const QuoteTopicContext = createContext<
  QuoteTopicContextType | undefined
>(undefined);

// 2. Create the provider component
export function QuoteTopicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [topic, setTopic] = useState("");
  return (
    <QuoteTopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </QuoteTopicContext.Provider>
  );
}

type Quote = {
  id: string;
  author: string;
  text: string;
  topic?: string;
};

type QuotesProviderProps = {
  quotes: Quote[];
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
};

export const QuotesContext = createContext<QuotesProviderProps | undefined>(
  undefined
);

export function QuotesProvider({ children }: { children: React.ReactNode }) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  return (
    <QuoteTopicProvider>
      <QuotesContext.Provider value={{ quotes, setQuotes }}>
        {children}
      </QuotesContext.Provider>
    </QuoteTopicProvider>
  );
}
