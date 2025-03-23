import { Request, Response } from "express";
import { launchesService } from "../../service/launches.service";
import { Launches } from "../../types/Launches-Types";

export const launchesController = {
  getAllLaunches(req: Request, res: Response) {
    res.status(200).json(launchesService.parseLaunches);
  },
  async addNewLaunch(req: Request, res: Response) {
    try {
      const launch: Launches = await req.body;

      launchesService.addNewLaunch(launch);
      res.status(201).json(launch);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
};
