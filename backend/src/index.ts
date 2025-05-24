import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({
    path: './.env'
});

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "what is 2+2",
  });
  console.log(response.text);
}
 
main();