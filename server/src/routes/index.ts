import { Router } from "express";
import planetsRouter from "./planets/planets.routes";

const routes = Router();

routes.use("/planets", planetsRouter);

export default routes;
