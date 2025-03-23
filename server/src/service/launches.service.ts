import { launches } from "../models/launches/launches.model";
import { Launches } from "../types/Launches-Types";

let latestFlightNumber = 100;

export const launchesService = {
  parseLaunches() {
    return Array.from(launches.values());
  },
  addNewLaunch(launch: Launches) {
    latestFlightNumber++;

    if (
      !launch.mission ||
      !launch.rocket ||
      !launch.launchDate ||
      !launch.destination
    ) {
      throw new Error("Invalid Parameters!");
    } else if (isNaN(new Date(launch.launchDate).getTime())) {
      throw new Error("Invalid Date");
    }

    launches.set(
      latestFlightNumber,
      Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ["New Marlo", "NASSA"],
        upcoming: true,
        success: true,
        launchDate: new Date(launch.launchDate),
      })
    );
  },
};
