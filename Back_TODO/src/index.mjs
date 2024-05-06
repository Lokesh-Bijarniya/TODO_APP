import express from "express";
import mongoose from "mongoose";
import { router } from "./Routes/routes.mjs";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Lokesh-Bijarniya:Sikar%40123@cluster0.2oyc6pu.mongodb.net/TODO"
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", router);

app.listen(8000, () => console.log("Server Started at:", 8000));
