import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";

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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`Connected to DB on port ${PORT}`);
});
