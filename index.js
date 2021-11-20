// This app hosts the website for Carbonado
"use strict";

const Express = require("express");
const ejs = require("ejs");

const app = Express();
app.set("view engine", "ejs");
app.use(Express.static(__dirname + "/views/src"));

const ROUTED_MINER_TTR = 60 * (1000); // Spaghettiphobia at its finest
let routerNodes = {};

class apiResponse {
	constructor(content) {
		this.content = content;
		this.timestamp = Date.now();
	}
}



app.get("/", (req, res) => {
	res.render("main");
});

app.get("/api", (req, res) => {
	res.render("api");
});

app.post("/router", (req, res) => {
	let ip = req.headers["x-forwarded-for"];
	if (routerNodes.hasOwnProperty(ip)) {
		res.send("Already connected!");
	} else {
		console.log(`Adding IP ${ip} to nodes.`);
	}

	// Refresh node's TTR
	routerNodes[ip] = Date.now();

	res.end();
});

app.get("/api/:mode", (req, res) => {
	cleanNodesList();
	switch(req.params.mode) {
		case "chain":
			res.json(new apiResponse({
				chainLength: 0,
			}));
			break;
		case "router":
			res.json(new apiResponse({
				miners: Object.keys(routerNodes),
			}));
		default:
			res.send("404");
	}
});

app.listen(3000, () => {
	//
});

function cleanNodesList() {
	let nobj = {};
	let curDate = Date.now();
	for (const [k,v] of Object.entries(routerNodes)) {
		if (curDate - v < ROUTED_MINER_TTR)
			nobj[k] = v;
	}

	return routerNodes = nobj;
}
