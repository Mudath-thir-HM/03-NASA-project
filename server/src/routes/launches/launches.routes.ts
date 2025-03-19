import { Router } from "express";
import { launchesController } from "../../controllers/launches/launches.controller";

const launchRouter = Router();

launchRouter.get("/", launchesController.getAllLaunches);

export default launchRouter;
