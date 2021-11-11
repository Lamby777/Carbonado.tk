// This app hosts the website for Carbonado
"use strict";

const Express = require("express");

const app = Express();

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(3000, () => {
	//
});
