import { Request, Response } from "express";

class AppAPIController {
	public getUserByAuth(req: Request, res: Response) {
		return res.json(req.auth);
	}
}

export default new AppAPIController();
