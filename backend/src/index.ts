require("dotenv").config();
import express from "express";
import cors from "cors";
import templateRoutes from "./routes/template";
import chatRoutes from "./routes/chat";
import { config } from "./config/environment";

const app = express();
app.use(cors());
app.use(express.json());

// Setup routes
app.get("/", (req, res) => {
  res.status(200).json({ msg: "backend server is running" });
});
app.use("/template", templateRoutes);
app.use("/chat", chatRoutes);

app.listen(config.port, () => {
  console.log(`Gemini server running on http://localhost:${config.port}`);
});
