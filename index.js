// This app hosts the website for Carbonado
"use strict";

const Express = require("express");

const app = Express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
	//
});
