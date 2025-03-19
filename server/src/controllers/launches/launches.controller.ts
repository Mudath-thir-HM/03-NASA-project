import { Request, Response } from "express";
import { launchesService } from "../../service/launches.service";

export const launchesController = {
  getAllLaunches(req: Request, res: Response) {
    res.status(200).json(launchesService.parseLaunches);
  },
};
