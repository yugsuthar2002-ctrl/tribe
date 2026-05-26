import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyCwLl9OBKkcSszMa7rmtFiPhKVh35GU8OY";
const ai = new GoogleGenAI({ apiKey: apiKey });

async function run() {
  try {
    console.log("Listing models (async iteration)...");
    const response = await ai.models.list();
    let count = 0;
    // Iterate if it's iterable
    // Note: The SDK might return a Page object.
    
    // Check if response has models property
    if (response.models) {
        response.models.forEach(m => console.log(m.name || m.displayName));
        return;
    }

    // Try async iteration
    try {
        for await (const model of response) {
            console.log("Model:", model.name);
            count++;
            if (count > 10) break;
        }
    } catch (e) {
        console.log("Iteration failed, trying direct property access");
        console.log(JSON.stringify(response, null, 2));
    }

  } catch (error) {
    console.error("Error listing models:", error);
  }
}

run();
