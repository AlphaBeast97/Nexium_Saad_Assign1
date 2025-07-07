import { quotesData } from "../data/quotes";

// Type definition for a single quote
type Quote = {
  id: string;
  author: string;
  text: string;
  topic?: string;
};

// Returns all quotes for a given topic, adding the topic to each quote object
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
