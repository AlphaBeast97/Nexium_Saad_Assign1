"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quotesData } from "../data/quotes";
import { QuoteTopicContext } from "@/provider/QuoteProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

export function Selector() {
  // Get topic and setTopic from context
  const SelectedTopic = useContext(QuoteTopicContext);
  const { topic, setTopic } = SelectedTopic || {
    topic: "",
    setTopic: () => {},
  };

  // List of all available topics
  const topics = Object.keys(quotesData);

  const handleChange = (value: string) => {
    setTopic(value);
    toast.success(`Topic set to: ${value}`, {
      duration: 3000,
      id: "topic-change-toast",
    });
  };
  return (
    <div className="flex flex-col items-center my-6">
      <label
        className="mb-2 text-lg font-semibold text-blue-800 drop-shadow-sm"
        htmlFor="topic-select"
      >
        Choose a Topic
      </label>
      {/* Dropdown UI */}
      <Select value={topic} onValueChange={handleChange}>
        <SelectTrigger
          id="topic-select"
          className="w-[220px] h-12 bg-white/90 border-2 border-blue-300 text-blue-900 font-medium rounded-lg shadow focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-200"
        >
          <SelectValue placeholder="Select Topic" />
        </SelectTrigger>
        <SelectContent className="bg-white/95 border-blue-200 rounded-lg shadow-lg">
          {topics.map((topic) => (
            <SelectItem
              key={topic}
              value={topic}
              className="text-blue-800 hover:bg-blue-100 cursor-pointer px-4 py-2 text-base"
            >
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
