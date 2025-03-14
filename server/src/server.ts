import http from "http";
import app from "./app";
import { loadPlanetsData } from "./models/planets/planets.model";

const PORT = process.env.PORT as unknown as number;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
