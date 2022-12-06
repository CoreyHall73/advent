const { readFileSync, promises: fsPromises } = require('fs');

const lines = readFileSync("6.txt", { encoding: "utf-8" }) // read day??.txt content
	.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
//.split("\n") // Split on newline


function receive() {
	let afterIndex = 0;
	console.log(lines);
	for (i = 0; i < lines.length - 13; i++) {
		let group = lines[i];
		//console.log(lines[i]);
		for (j = 1; j < 14; j++) {
			if (i < 17) {
				group += lines[i + j];
			} 
			
		}
		console.log("GROUP: ", group, i);
		//break;	
	}
}

receive();