import { Request, Response } from "express";
import DiscordService from "../services/discord/OAuthDiscordService";
import DiscordAPIService from "../services/discord/DiscordAPI";
import InternalException from "../exceptions/InternalException";
import UnathorizedException from "../exceptions/UnathorizedException";
import AuthService from "../services/AuthService";

class DiscordOAuthController {
	public handleDiscordOAuthURL(req: Request, res: Response) {
		const URL = DiscordService.generateOAuthURL();

		return res.redirect(URL);
	}

	public async handleDiscordCallback(req: Request, res: Response) {
		const code: string = req.query.code as string;

		if (!code) return res.json({ error: "No code param was specified." });

		let tokens;
		try {
			tokens = await DiscordService.getAccessTokenByCode(code);
		} catch (error) {
			new UnathorizedException(req, res, "Invalid authorization code from Discord. Try to login again.");
			return;
		}

		const DiscordUser = await DiscordAPIService.getUserByToken(
			tokens.access_token
		);

		if (!DiscordUser.email)
			return res.json({
				error: "no-email",
				message: "Couldn't get your e-mail!",
			});

		try {
			const token = AuthService.generateToken({
				username: DiscordUser.username,
				email: DiscordUser.email,
			});

			res.cookie("token", token);

			return res.redirect("http://localhost:3333/app/welcome");
		} catch (error) {
			new InternalException(req, res, "Couldn't generate a login session.");

			return;
		}
	}
}

export default new DiscordOAuthController();
