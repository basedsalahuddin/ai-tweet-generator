import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');
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

    // TODO: Add Supabase integration here
    toast({
      title: "Message received!",
      description: "I'll craft a tweet based on your prompt",
    });
    
    setPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Hey TAM AI! What would you like me to tweet about today?"
        className="min-h-[150px] bg-black/30 border-tamblue/30 text-white placeholder:text-gray-400"
      />
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-tamblue to-tampink hover:opacity-90 transition-opacity animate-glow flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Send to TAM AI
      </Button>
    </form>
  );
};

export default PromptForm;