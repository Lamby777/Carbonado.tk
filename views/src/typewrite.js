// Used in index page to typewrite text
const TYPE_SPEED = 40; // measured in ms per key
const TEXT_KEEP = 4000; // time after finished to keep text
const span = document.getElementById("homepage-edited-text");
const ideaSlogans = [ // actually decent lines now
	"A crypto for everyone!",
	"A platform for your new token.",
	"Digital ownership!",
	"... or something, I guess.",
	"An NFT-first blockchain implementation.",
	"Official Carbonado project website!",
];

let lastIdeaNum = -1; // Not equal to any index of ^^^

function typewrite(callback) {
	let ideaNum;
	do { // Assign new random numbers until not same as last
		ideaNum = Math.floor(Math.random() * ideaSlogans.length);
	} while (ideaNum === lastIdeaNum);
	lastIdeaNum = ideaNum;

	let ideaText = ideaSlogans[ideaNum];
	let i = 0;

	let typeInterval = setInterval(() => {
		if (i === ideaText.length) { // Finished
			clearInterval(typeInterval);
			if (callback) setTimeout(callback, TEXT_KEEP);
			else setTimeout(detypewrite, TEXT_KEEP);
		} else {
			i++;
			span.innerHTML = ideaText.slice(0, i);
		}
	}, TYPE_SPEED);

	function detypewrite() {
		let detypeInterval = setInterval(() => {
			if (i === 0) { // Finished
				clearInterval(detypeInterval);
				typewrite();
			} else {
				i--;
				span.innerHTML = ideaText.slice(0, i);
			}
		}, TYPE_SPEED);
	}
}

typewrite();
