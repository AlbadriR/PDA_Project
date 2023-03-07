import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
dotenv.config();
const port = process.env.PORT || 3001;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static("client/build"));
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB);

app.use(routes);

app.listen(port, () => console.log(`server run on port : ${port}`));
