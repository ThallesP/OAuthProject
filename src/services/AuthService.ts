import jwt from "jsonwebtoken";

class AuthService {
	public generateToken(payload: Object) {
		const token = jwt.sign(payload, process.env.APP_TOKEN, {
			expiresIn: 60,
		});
		return token;
	}
}

export default new AuthService();
