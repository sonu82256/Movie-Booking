import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/auth.routes.js";
import movieRouter from "./routes/movieList.routes.js";
import movieShow from "./routes/movieShow.routes.js"

import cookieParser from "cookie-parser";

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

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", userRoutes);
app.use("/api/movie-list", movieRouter);
app.use("/api/theater-show", movieShow);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});