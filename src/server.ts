import dotenv from "dotenv";
dotenv.config();
import express from "express";
import APIroutes from "./APIroutes";
import APProutes from "./APProutes";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => res.redirect("http://localhost:3333/app/login"));

app.use("/api/v2/", APIroutes);
app.use("/app/", APProutes);

app.listen(process.env.ENVIRONMENT == "prod" ? 8080 : 3333, () => {
	console.log("> Server listening on 3333");
});
