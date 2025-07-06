import { quotesData } from "../data/quotes";

type Quote = {
  id: string;
  author: string;
  text: string;
  topic?: string;
};

export function getQuotes(topic: string): Quote[] {
  const arr =
    (quotesData[topic as keyof typeof quotesData] as Array<{
      id: string;
      author: string;
      text: string;
    }>) || [];
  // Add topic to each quote object, ensuring id is present
  return arr.map((q) => ({
    id: q.id,
    author: q.author,
    text: q.text,
    topic,
  }));
}
