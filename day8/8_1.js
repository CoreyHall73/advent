const { readFileSync, promises: fsPromises } = require('fs');

const lines = readFileSync("8.txt", { encoding: "utf-8" }) // read day??.txt content
	.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
    .split("\n") // Split on newline
    .map((line) => [...line].map(Number));

function visTree() {
	console.log(lines);
	for (i = 1; i < lines.length - 1; i++) {
		console.log(lines[i]);
		for (j = 1; j < lines[i].length - 1; j++) {
			console.log(lines[i][j]);
			
		}
	}
}

visTree();