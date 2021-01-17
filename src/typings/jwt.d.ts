import { Secret, VerifyOptions } from "jsonwebtoken";

declare module "jsonwebtoken" {
	function verify(
		token: string,
		secretOrPublicKey: Secrett,
		options?: VerifyOptions
	): userAuthInformation;
}
