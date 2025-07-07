// Home page entry point for QuoteNation
import { Hero } from "@/components/Hero";

// Tell Next.js to statically generate this page for best performance
export const dynamic = "force-static";

// Metadata for SEO and browser tab
export const metadata = {
  title: "QuoteNation",
  description: "A simple quote generator application",
  icons: {
    icon: "/quote.png",
  },
};

export default function Home() {
  return <Hero />;
}
