import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to guide the persona
const SYSTEM_INSTRUCTION = `You are the FiStudy AI Tutor, an intelligent assistant for an online education platform.
Your goal is to help students find courses, explain complex academic concepts simply, and provide study tips.
- Be encouraging, concise, and professional.
- If asked about courses, assume we have courses on Web Development, Data Science, Design, Marketing, and Business.
- Keep responses under 150 words unless asked for a detailed explanation.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (
  chat: Chat,
  message: string
): Promise<AsyncIterable<GenerateContentResponse>> => {
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Error in Gemini stream:", error);
    throw error;
  }
};