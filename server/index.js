import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const PORT = 8000;
const app = express();
dotenv.config(app);

// Connection with the DB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

//Middlewares
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  connect();
  console.log(`Connected to DB on port ${PORT}`);
});
