import { Router } from "express";
import DiscordOAuthController from "./controllers/DiscordOAuthController";
import AppAPIController from "./controllers/AppAPIController";
import AuthMiddleware from "./middleware/AuthMiddleware";

const routes = Router();

// DISCORD
routes.get("/oauth/discord", DiscordOAuthController.handleDiscordOAuthURL);
routes.get(
	"/oauth/discordcallback",
	DiscordOAuthController.handleDiscordCallback
);

routes.use(AuthMiddleware.verifyToken);

// APP API ROUTES
routes.get("/@me", AppAPIController.getUserByAuth);

export default routes;
