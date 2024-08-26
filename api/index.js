import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api/user", function (req, res) {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

