import express from "express";
import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.json());
app.use("/", routes);

export default app;
