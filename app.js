import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import app from "./cgenerate.js";
import grammarCheck from "./grammarcheck.js";
import humanazie from "./humanazie.js";

dotenv.config();

const app3 = express();
const port = 8080;

// Configure CORS
app3.use(cors());
app3.use(express.json()); // For parsing application/json

// Routes
app3.use("/api/cgenerate", app);
app3.use("/api/grammarcheck", grammarCheck);
app3.use("/api/humanazie", humanazie);

// Start server
app3.listen(port, () => {
  console.log(`AI Writing app listening at http://localhost:${port}`);
});
app.listen( () => console.log("Server is running on port 8080"));
