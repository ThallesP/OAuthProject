declare namespace NodeJS {
	interface ProcessEnv {
		APP_TOKEN: string;
		ENVIRONMENT: string;
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
