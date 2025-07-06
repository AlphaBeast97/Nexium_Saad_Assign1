import quotesData from "../data/quotes.json";

type Quote = {
  id: string;
  author: string;
  text: string;
  topic?: string;
};

export function getQuotes(topic: string): Quote[] {
  const arr = quotesData[topic as keyof typeof quotesData] || [];
  // Add topic to each quote object, ensuring id is present
  return arr.map((q: any) => ({
    id: q.id,
    author: q.author,
    text: q.text,
    topic,
  }));
}
