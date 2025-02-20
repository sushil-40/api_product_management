import express from "express";
import productRouter from "./src/routers/productRouter.js";
import { connectMongoDb } from "./src/config/dbConfig.js";
import cors from "cors";
import morgan from "morgan";

// Connect to Database
connectMongoDb();
const app = express();
app.use(morgan("dev"));
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`You are running at http://localhost:${PORT}`);
});
