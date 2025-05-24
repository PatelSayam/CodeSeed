import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({
    path: './.env'
});

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {

  const response = await ai.models.generateContentStream({
    model: "gemini-2.0-flash",
    contents: "create todo app in nodejs",
  });

  let text = "";
  for await (const chunk of response) {
    const part = chunk.text;
    console.log(part);
    text += part;
  }
}
 
main();