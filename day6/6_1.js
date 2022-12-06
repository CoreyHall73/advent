const { readFileSync, promises: fsPromises } = require('fs');

const lines = readFileSync("6.txt", { encoding: "utf-8" }) // read day??.txt content
	.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
	//.split("\n") // Split on newline

function receive() {
	let afterIndex = 0;
	//console.log(lines);
	for (i = 0; i < lines.length; i++) {
		afterIndex += 4;
		//console.log("value:", lines[i], "at index:", i);
		//console.log(lines[i], lines[i + 1], lines[i + 2], lines[i + 3], afterIndex);
		let group = lines[i] + lines[i + 1] + lines[i + 2] + lines[i + 3];
		if (group != null) {
			console.log(group);
		}
		// Edge case for last 3 groups
	}
	//console.log(group);
}

receive();