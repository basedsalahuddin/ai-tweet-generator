import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    // TODO: Add Supabase integration here
    toast({
      title: "Success",
      description: "Prompt saved successfully",
    });
    
    setPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your Twitter prompt here..."
        className="min-h-[150px] bg-black/30 border-tamblue/30 text-white placeholder:text-gray-400"
      />
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-tamblue to-tampink hover:opacity-90 transition-opacity animate-glow"
      >
        Save Prompt
      </Button>
    </form>
  );
};

export default PromptForm;