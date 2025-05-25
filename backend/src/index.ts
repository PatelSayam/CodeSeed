import dotenv from "dotenv";
import express from "express";
import cors from 'cors';

import chatRoutes from './routes/chat.ts';
import templateRoutes from './routes/template.ts'

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use(cors());


app.use('/chat', chatRoutes);
app.use('/template', templateRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
})

