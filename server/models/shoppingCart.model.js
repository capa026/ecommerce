import mongoose from "mongoose";

const sCart = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: {
      type: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", sCart);
