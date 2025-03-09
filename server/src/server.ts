import http from "http";
import app from "./app";

const PORT = process.env.PORT as unknown as number;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
