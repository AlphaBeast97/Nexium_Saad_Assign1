"use client";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

export function QuoteButton() {
  const handleClick = () => {
    toast.success('Quotes fetched successfully!', {
      position: "top-center",
      duration: 3000,
      id: "quotes-success-toast",
    });
  };
  return (
    <Button onClick={handleClick} variant={"outline"}>
      Get Quotes!
    </Button>
  );
}
