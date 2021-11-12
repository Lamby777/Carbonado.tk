// This app hosts the website for Carbonado
"use strict";

const Express = require("express");

const app = Express();
app.use(Express.static(__dirname + "/page"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

class apiResponse {
	constructor(content) {
		this.content = content;
		this.timestamp = new Date().getTime();
	}
}

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
