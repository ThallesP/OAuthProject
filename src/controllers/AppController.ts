import { Request, Response, NextFunction } from "express";
import path from "path";

class AppController {
	public async Index(req: Request, res: Response) {
		res.sendFile(path.join(__dirname, "..", "./public/oauth.html"));
	}

	public Login(req: Request, res: Response) {
		res.sendFile(path.join(__dirname, "..", "./public/login.html"));
	}
}

export default new AppController();
