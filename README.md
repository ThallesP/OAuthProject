<p align="center">
<img height="230" width="500" src="https://i.imgur.com/wkmBYRD.png"> </img>
</p>
<h1 align="center">OAuth Project</h1>

OAuthProject é um repositório para eu implementar sistema de login [OAuth 2.0](https://oauth.net/2/) com outros sites, feito totalmente em Typescript e também para servir como um portfólio para mostrar minhas "skills", o projeto é focado no [Back-end](https://pt.wikipedia.org/wiki/Front-end_e_back-end#Back-end).

O projeto conta com uma página para se logar com umas das plataformas escolhidas (Por enquanto apenas o Discord), após escolher qual plataforma, o usuário é redirecionado para a plataforma, caso o usuário autorize a aplicação ter acesso, ele é redirecionado para a aplicação e você terá informações básicas na sua tela como o seu nome de usuário e e-mail.

## Tecnologias usadas
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [JSON Web Token](https://jwt.io/)

## Como configurar?
Você terá que ter as credenciais do OAuth de cada plataforma, consulte pelo nome da plataforma de como obter essas credenciais, por exemplo o [Discord](https://discord.com/developers/docs/topics/oauth2), após ter as credenciais você deve informar para a aplicação de um formato que é entendido pela aplicação, na pasta "credenciais" terá arquivos de exemplo de cada plataforma, você deverá informar no formato descrito, após informar as credenciais, remova a extensão ".example" do arquivo, por exemplo `discord.json.example` => `discord.json` e após ter feito isso, a aplicação estará entendendo cada arquivo e funcionando.

Você terá que também configurar as variáveis de ambiente na pasta "root" do projeto, renomeie o arquivo `.env.example` para `.env` e configure do jeito que quiser.

## Qual plataformas o projeto é compatível?
* Discord
* Google (Em desenvolvimento)
* Facebook (Em desenvolvimento)
* Github (Em desenvolvimento)

## Como iniciar a aplicação?
Yarn: 
```
yarn dev
```

NPM:
```
npm run dev
```

Qualquer dúvida sobre o projeto não hesite em abrir uma issue com sua pergunta.