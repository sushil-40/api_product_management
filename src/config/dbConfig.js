import mongoose from "mongoose";
const mongoUrl = "mongodb://localhost:27017/product_management";

export const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB connected sucessfully!");
  } catch (error) {
    console.log(error);
  }
};
