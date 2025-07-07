import { Hero } from "@/components/Hero";
export const dynamic = "force-static";

export const metadata = {
  title: "Quote Generator",
  description: "A simple quote generator application",
  icons: {
    icon: "/quote.png",
  },
};

export default function Home() {
  return <Hero />;
}
