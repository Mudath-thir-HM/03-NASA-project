import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", routes);

export default app;
