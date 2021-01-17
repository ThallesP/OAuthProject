import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import UnathorizedException from "../exceptions/UnathorizedException";

class AuthMiddleware {
	public verifyToken(req: Request, res: Response, next: NextFunction) {
		if (!req.cookies) {
			new UnathorizedException(req, res);

			return;
		}

		const token: string | undefined = req.cookies.token;

		if (!token) {
			new UnathorizedException(req, res);

			return;
		}

		try {
			const decoded = jwt.verify(token, process.env.APP_TOKEN, {
				ignoreExpiration: true, //Implement a way to refresh the token later.
			});

			req.auth = decoded;
			next();
		} catch (error) {
			new UnathorizedException(req, res);
		}
	}
}

export default new AuthMiddleware();
