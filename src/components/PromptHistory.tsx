import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const PromptHistory = () => {
  // TODO: Fetch prompts from Supabase
  const mockPrompts = [
    { id: 1, text: "Sample prompt 1", created_at: new Date().toISOString() },
    { id: 2, text: "Sample prompt 2", created_at: new Date().toISOString() },
  ];

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        {mockPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="p-4 rounded-lg bg-black/30 border border-tamblue/30"
          >
            <p className="text-gray-300">{prompt.text}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(prompt.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default PromptHistory;