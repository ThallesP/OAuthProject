import DiscordOAuth from "discord-oauth2";
import discordCredentials from "../../credentials/discord.json";

class OAuthDiscordService {
	client: DiscordOAuth;

	constructor() {
		this.client = new DiscordOAuth({
			clientId: discordCredentials.clientId,
			clientSecret: discordCredentials.clientSecret,
			redirectUri: discordCredentials.redirectURI,
		});
	}

	public generateOAuthURL(): string {
		return this.client.generateAuthUrl({
			scope: ["identify", "email"],
		});
	}

	public async getAccessTokenByCode(
		code: string
	): Promise<ReturnType<DiscordOAuth["tokenRequest"]>> {
		const tokens = await this.client.tokenRequest({
			scope: ["identify", "email"],
			grantType: "authorization_code",
			code,
		});

		return tokens;
	}

	public async refreshUserAccessToken(
		refreshToken: string
	): Promise<ReturnType<DiscordOAuth["tokenRequest"]>> {
		const tokens = await this.client.tokenRequest({
			grantType: "refresh_token",
			refreshToken: refreshToken,
			scope: ["identify", "email"],
		});

		return tokens;
	}
}

export default new OAuthDiscordService();
