// This app hosts the website for Carbonado
"use strict";

const Express = require("express");

const app = Express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/api/:mode", (req, res) => {
	switch(req.params.mode) {
		case "seeds":
			res.json({
				timestamp: new Date().getTime(),
				miners: [],
			});
			break;
		default:
			res.send("404");
	}
});

app.listen(3000, () => {
	//
});
