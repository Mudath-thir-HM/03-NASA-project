import { Request, Response } from "express";
import { launchesService } from "../../service/launches.service";
import { Launches } from "../../types/Launches-Types";

export const launchesController = {
  getAllLaunches(req: Request, res: Response) {
    res.status(200).json(launchesService.parseLaunches);
  },
  async addNewLaunch(req: Request, res: Response) {
    const launch: Launches = await req.body;

    launch.launchDate = new Date(launch.launchDate);

    launchesService.addNewLaunch(launch);
    res.status(201).json(launch);
  },
};
