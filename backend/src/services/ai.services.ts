import { GoogleGenAI } from "@google/genai";
import { AIMessage } from '../types/index.ts'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function callGemini(messages: AIMessage[]): Promise<string> {
    const chat = await ai.chats.create({
        model: "gemini-2.0-flash",
        history: messages.slice(0, -1).map(msg => ({
            role: msg.role,
            parts: [{ text: msg.content}],
        })),
    });

    const userMessage = messages[messages.length-1].content;

    const streamResult = await chat.sendMessageStream({
        message: [{ text: userMessage }],
    })


    let fullTextResponse = "";
    for await (const chunk of streamResult) {
        const part = chunk.text;
        fullTextResponse += part;
    }
    return fullTextResponse;
}