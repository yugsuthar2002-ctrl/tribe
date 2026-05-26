import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyCwLl9OBKkcSszMa7rmtFiPhKVh35GU8OY";
const ai = new GoogleGenAI({ apiKey: apiKey });

async function run() {
  try {
    console.log("Testing with model: gemini-1.5-flash");
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash", 
      contents: "Hello",
    });
    console.log("Success with short name:", response.text);
  } catch (e) {
    console.log("Short name failed:", e.message);
  }

  try {
    console.log("Testing with prefix: models/gemini-1.5-flash");
    const response2 = await ai.models.generateContent({
      model: "models/gemini-1.5-flash",
      contents: "Hello",
    });
    console.log("Success with prefix:", response2.text);
  } catch (e) {
      console.log("Prefix failed:", e.message || e);
  }
}

run();
