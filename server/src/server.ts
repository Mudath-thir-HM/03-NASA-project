import express from "express";
import http from "http";

const PORT = process.env.PORT as unknown as number;

const app = express();

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
