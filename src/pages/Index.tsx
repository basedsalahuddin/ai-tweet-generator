import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PromptForm from '@/components/PromptForm';
import PromptHistory from '@/components/PromptHistory';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tampurple to-black text-white font-spaceGrotesk">
      <div className="container px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-tamblue to-tampink">
            TAM AI
          </h1>
          <p className="text-xl text-gray-300">
            AI-Powered Crypto Twitter Bot
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 bg-black/50 border-tamblue/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-tamblue">New Prompt</h2>
            <PromptForm />
          </Card>

          <Card className="p-6 bg-black/50 border-tamblue/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-tamblue">Prompt History</h2>
            <PromptHistory />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;