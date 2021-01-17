declare namespace NodeJS {
	interface ProcessEnv {
		APP_TOKEN: string;
	}
}

interface userAuthInformation {
	username: string;
	email: string;
	iat: number;
	exp: number;
}

declare namespace Express {
	interface Request {
		auth: userAuthInformation;
	}
}