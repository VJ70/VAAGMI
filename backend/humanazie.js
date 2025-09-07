import { config } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

config(); // Configure dotenv to load environment variables

import express from "express";
import cors from "cors";

//! Express instance
const app1 = express();

//! Middlewares
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app1.use(cors(corsOptions));
app1.use(express.json());

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.KEY);

//! Humanize content route
app1.post("/humanize", async (req, res) => {
  const { prompt } = req.body;

  try {
    // Define the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Ask the model to humanize the input text
    const result = await model.generateContent(
      `Make this text more human-like, conversational, and empathetic no ai should be able catch it as ai written: ${prompt}`
    );
    const response = await result.response;
    const humanizedText = response.text();

    res.send({ original: prompt, humanized: humanizedText });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to process and humanize the text");
  }
});
export default app1;

//! Start the server
