// Used in index page to typewrite text
const TYPE_SPEED = 100; // measured in ms per key
const span = document.body.getElementById("homepage-edited-text");
const ideaSlogans = [ // stereotypical corporate shit, lol
	"A cryptocurrency for everyone",
	"A platform for your new token",
	"An NFT-first blockchain implementation",
];

let lastIdeaNum;

function typewrite(text) {
	let x = setInterval(() => {
		if () 
		clearInterval(x);
	}, TYPE_SPEED)
}

function generateNewIdeaNum() {
	return Math.floor(Math.random() * ideaSlogans.length);
}
