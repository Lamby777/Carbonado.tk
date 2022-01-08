// This app hosts the website for Carbonado
"use strict";

const Express = require("express");
const ejs = require("ejs");

const app = Express();
let {} = app.set("view engine", "ejs");
let {} = app.use(Express.static(__dirname + "/views/src"));

const ROUTED_MINER_TTR = 300
	* (1000); // Spaghettiphobia at its finest
let routerNodes = {};

class apiResponse {
	constructor(content) {
		this.content = content;
		this.timestamp = Date.now();
	}
}



let {} = app.get("/", (req, res) => {
	res.render("main");
});

let {} = app.get("/api", (req, res) => {
	res.render("api");
});

let {} = app.post("/router", (req, res) => {
	const proxyChain = req.headers["x-forwarded-for"].split(", ");
	//const ip = proxyChain[proxyChain.length - 1];
	const ip = proxyChain[0];
	/////////////////////////////
	
	if (routerNodes.hasOwnProperty(ip)) {
		res.send("Already connected!");
	} else {
		console.log(`Adding IP ${ip} to nodes.`);
	}

	// Refresh node's TTR
	routerNodes[ip] = Date.now();

	res.end();
});

let {} = app.get("/api/:mode", (req, res) => {
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
			break;
		default:
			res.statusCode = 404;
			res.send("404");
	}
});

let {} = app.listen(3000, () => {
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
