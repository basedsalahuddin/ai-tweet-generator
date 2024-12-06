import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';
import { generateAIResponse } from '@/utils/aiUtils';

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');
  const [aiPreview, setAiPreview] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Hey there!",
        description: "Please tell me what you'd like me to tweet about",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const response = await generateAIResponse(prompt);
      setAiPreview(response);
      toast({
        title: "Preview Generated!",
        description: "Here's how I would respond to this prompt",
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Had trouble generating a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Hey TAM AI! What would you like me to tweet about today?"
          className="min-h-[150px] bg-black/30 border-tamblue/30 text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit"
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-tamblue to-tampink hover:opacity-90 transition-opacity animate-glow flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          {isGenerating ? 'Generating...' : 'Generate Preview'}
        </Button>
      </form>

      {aiPreview && (
        <div className="mt-6 p-4 rounded-lg bg-black/40 border border-tamblue/30">
          <h3 className="text-lg font-bold text-tamblue mb-2">Preview Response:</h3>
          <p className="text-gray-300">{aiPreview}</p>
        </div>
      )}
    </div>
  );
};

export default PromptForm;