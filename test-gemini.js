import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCwLl9OBKkcSszMa7rmtFiPhKVh35GU8OY"; // User provided key
const genAI = new GoogleGenerativeAI(apiKey);

async function testModel(modelName) {
  console.log(`\nTesting model: ${modelName}`);
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const prompt = "Hello, reply with 3 words.";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(`Success with ${modelName}:`, response.text());
  } catch (error) {
    console.error(`Failed with ${modelName}`);
    console.error("Error Message:", error.message);
    // Print shorter error details if possible
    if (error.statusText) console.error("Status Text:", error.statusText);
  }
}

async function run() {
  await testModel("gemini-1.5-flash");
  await testModel("gemini-2.0-flash-exp"); // Try experimental
  await testModel("gemini-pro");
}

run();
