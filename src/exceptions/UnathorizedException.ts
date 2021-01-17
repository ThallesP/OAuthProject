import { Request, Response } from "express";

class UnathorizedException {
	constructor(
		req: Request,
		res: Response,
		message: string = "You're not authorized to see this content."
	) {
		res.status(401).json({
			error: "unathorized",
			message,
		});
	}
}

export default UnathorizedException;
