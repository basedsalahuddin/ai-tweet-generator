import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PromptForm from '@/components/PromptForm';
import PromptHistory from '@/components/PromptHistory';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tampurple to-black text-white font-spaceGrotesk">
      <div className="container px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-12 h-12 text-tamblue animate-pulse" />
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-tamblue to-tampink">
              TAM AI
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your AI-powered crypto companion. Tell me what to tweet, and I'll engage with the community on your behalf.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 bg-black/50 border-tamblue/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-tamblue flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Chat with TAM AI
            </h2>
            <PromptForm />
          </Card>

          <Card className="p-6 bg-black/50 border-tamblue/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-tamblue">Previous Conversations</h2>
            <PromptHistory />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;