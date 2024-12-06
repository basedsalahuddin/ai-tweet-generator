import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateAIResponse = async (prompt: string) => {
  try {
    // In production, this should come from Supabase secrets
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    return 'Sorry, I encountered an error generating a response.';
  }
};