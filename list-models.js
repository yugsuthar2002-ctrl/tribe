import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyCwLl9OBKkcSszMa7rmtFiPhKVh35GU8OY";
const ai = new GoogleGenAI({ apiKey: apiKey });

async function run() {
  try {
    console.log("Listing models...");
    const response = await ai.models.list(); // Or check specific method in docs/types if list() is correct
    // If list() returns an iterator or object, handle it.
    // Based on common patterns, it might return { models: [...] } or be async iterable.
    
    // Attempting to print details
    console.log("Models found:", response); 
    
    // If it's iterable
    /*
    for await (const model of response) {
      console.log(model.name);
    }
    */
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

run();
