import { Request, Response } from "express";
import { planets } from "../../models/planets/planets.model";

export const planetsController = {
  getAllPlanets(req: Request, res: Response) {
    res.status(200).json(planets);
  },
};
