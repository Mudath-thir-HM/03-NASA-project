import { Router } from "express";
import planetsRouter from "./planets/planets.routes";
import homeRouter from "./home-page/home.routes";

const routes = Router();

routes.use("/", homeRouter);
routes.use("/planets", planetsRouter);

export default routes;
