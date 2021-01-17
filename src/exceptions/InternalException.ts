import { Request, Response } from "express";

class InternalException {
	constructor(
		req: Request,
		res: Response,
		message: string = "Oops! Internal error happened. We're sorry for that."
	) {
		res.status(500).json({
			error: "internal",
			message,
		});
	}
}

export default InternalException;
