  import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle } from 'lucide-react';

const PromptHistory = () => {
  // TODO: Fetch prompts from Supabase
  const mockPrompts = [
    { id: 1, text: "Could you tweet about the latest developments in DeFi?", created_at: new Date().toISOString() },
    { id: 2, text: "Share your thoughts on the future of crypto payments", created_at: new Date().toISOString() },
  ];

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        {mockPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="p-4 rounded-lg bg-black/30 border border-tamblue/30 hover:border-tamblue/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-tamblue mt-1" />
              <div>
                <p className="text-gray-300">{prompt.text}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(prompt.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default PromptHistory;
