import DiscordOAuthAPI from "discord-oauth2";
import discordCredentials from "../../credentials/discord.json";

class DiscordAPI {
	client: DiscordOAuthAPI;

	constructor() {
		this.client = new DiscordOAuthAPI({
			clientId: discordCredentials.clientId,
			clientSecret: discordCredentials.clientSecret,
			redirectUri: discordCredentials.redirectURI,
		});
	}

	public async getUserByToken(
		AccessToken: string
	): Promise<ReturnType<DiscordOAuthAPI["getUser"]>> {
		const discordUser = await this.client.getUser(AccessToken);

		return discordUser;
	}
}

export default new DiscordAPI();
