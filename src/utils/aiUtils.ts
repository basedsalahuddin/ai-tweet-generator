import { GoogleGenerativeAI } from "@google/generative-ai";

export const getGeminiKey = () => {
  return localStorage.getItem('GEMINI_API_KEY');
};

export const setGeminiKey = (key: string) => {
  localStorage.setItem('GEMINI_API_KEY', key);
};

export const generateAIResponse = async (prompt: string) => {
  try {
    const apiKey = getGeminiKey();
    if (!apiKey) {
      return 'Please set your Gemini API key first';
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    return 'Sorry, I encountered an error generating a response.';
  }
};