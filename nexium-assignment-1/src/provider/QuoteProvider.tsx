// This file provides React Contexts and Providers for global state management.
"use client";
import { createContext, useState } from "react";

// Context and provider for the currently selected topic
type QuoteTopicContextType = {
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
};

export const QuoteTopicContext = createContext<
  QuoteTopicContextType | undefined
>(undefined);

// Provider for the selected topic
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

// Type for a single quote
type Quote = {
  id: string;
  author: string;
  text: string;
  topic?: string;
};

// Context and provider for the list of quotes
type QuotesProviderProps = {
  quotes: Quote[];
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
};

export const QuotesContext = createContext<QuotesProviderProps | undefined>(
  undefined
);

// Provider for the list of quotes, wraps the topic provider
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
