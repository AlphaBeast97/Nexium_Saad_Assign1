"use client";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { useContext } from "react";
import { QuotesContext, QuoteTopicContext } from "@/provider/QuoteProvider";
import { getQuotes } from "@/generator/QuoteGenerator";

export function QuoteButton() {
  const QuoteTopic = useContext(QuoteTopicContext);
  const { topic } = QuoteTopic || { topic: "" };

  const QuotesData = useContext(QuotesContext);
  const { setQuotes } = QuotesData || { setQuotes: () => {} };

  const handleClick = () => {
    if (!topic) {
      toast.error("Please select a topic first!", {
        duration: 3000,
        id: "topic-error-toast",
      });
      return;
    }

    const Quotes = getQuotes(topic);
    if (Quotes.length > 0) {
      toast.success("Quotes fetched successfully!", {
        duration: 3000,
        id: "quotes-success-toast",
      });
      setQuotes(Quotes);
    } else {
      toast.error("No quotes found for this topic.", {
        duration: 3000,
        id: "quotes-error-toast",
      });
      setQuotes([]);
    }
  };
  return (
    <Button onClick={handleClick} variant={"outline"}>
      Get Quotes!
    </Button>
  );
}
