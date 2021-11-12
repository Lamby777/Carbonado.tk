// This app hosts the website for Carbonado
"use strict";

const Express = require("express");
const ejs = require("ejs");

const app = Express();
app.set("view engine", "ejs");
app.use(Express.static(__dirname + "/views/src"));

class apiResponse {
	constructor(content) {
		this.content = content;
		this.timestamp = new Date().getTime();
	}
}

app.get("/", (req, res) => {
	res.render("main");
});

app.get("/api/:mode", (req, res) => {
	switch(req.params.mode) {
		case "seeds":
			res.json(new apiResponse({
				miners: [],
				chainLength: 0,
			}));
			break;
		default:
			res.send("404");
	}
});

app.listen(3000, () => {
	//
});
