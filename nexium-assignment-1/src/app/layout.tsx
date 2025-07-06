import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { NavBar } from "@/components/NavBar";
import { FootBar } from "@/components/FootBar";
import { Toaster } from "react-hot-toast";
import { QuoteTopicProvider } from "@/provider/QuoteTopicProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexium Assignment 1",
  description: "This is assignment number 1 for Nexium, A Quote Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuoteTopicProvider>
          <Toaster />
          <NavBar />
          {children}
          <FootBar />
        </QuoteTopicProvider>
      </body>
    </html>
  );
}
