import { launches } from "../models/launches/launches.model";

export const launchesService = {
  parseLaunches() {
    return Array.from(launches.values());
  },
};
