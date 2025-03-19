import { Request, Response } from "express";
import { launches } from "../../models/launches/launches.model";

export const launchesController = {
  getAllLaunches(req: Request, res: Response) {
    res.status(200).json(Array.from(launches.values()));
  },
};
