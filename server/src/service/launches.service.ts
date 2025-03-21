import { launches } from "../models/launches/launches.model";
import { Launches } from "../types/Launches-Types";

let latestFlightNumber = 100;

export const launchesService = {
  parseLaunches() {
    return Array.from(launches.values());
  },
  addNewLaunch(launch: Launches) {
    latestFlightNumber++;
    launches.set(
      latestFlightNumber,
      Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ["New Marlo", "NASSA"],
        upcoming: true,
        success: true,
      })
    );
  },
};
