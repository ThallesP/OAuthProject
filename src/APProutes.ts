import { Router } from "express";
import AppController from "./controllers/AppController";

const routes = Router();

// Application Routes
routes.get("/welcome", AppController.Index);
routes.get("/login", AppController.Login)

export default routes;
