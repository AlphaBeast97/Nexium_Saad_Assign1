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
