// Used in index page to typewrite text
const TYPE_SPEED = 100; // measured in ms per key
const TEXT_KEEP = 5000; // time after finished to keep text
const span = document.body.getElementById("homepage-edited-text");
const ideaSlogans = [ // stereotypical corporate shit, lol
	"A cryptocurrency for everyone",
	"A platform for your new token",
	"An NFT-first blockchain implementation",
];

let lastIdeaNum = -1;

function typewrite(text, callback) {
	let ideaNum;
	do { // Assign new random numbers until not same as last
		ideaNum = generateNewIdeaNum();
	} while (ideaNum === lastIdeaNum);
	lastIdeaNum = ideaNum;

	let ideaText = ideaSlogans[ideaNum];
	let i = 0;

	let x = setInterval(() => {
		if (i === (ideaText.length - 1)) { // Finished
			clearInterval(x);
			setTimeout(callback, TEXT_KEEP);
		} else {
			//
		}
		i++
	}, TYPE_SPEED);
}

function generateNewIdeaNum() {
	return Math.floor(Math.random() * ideaSlogans.length);
}
