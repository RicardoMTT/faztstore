import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost/faztcommerce");
    console.log("db connected");
  } catch (error) {
    console.log("error", error);
  }
}
