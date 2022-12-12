const { readFileSync, promises: fsPromises } = require('fs');

const lines = readFileSync("10.txt", { encoding: "utf-8" }) // read day??.txt content
	.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
    .split("\n") // Split on newline
    //.map((line) => [...line].map(Number));
let sortedArr = [];
    
function signalCycle() {
	//console.log(lines);
	for (i = 0; i < lines.length; i ++) {
		if (lines[i].includes("addx")) {
			//console.log("Add");
			sortedArr.push(~~lines[i]);
		} else {
			//console.log("Noop");
			sortedArr.push(lines[i]);
		}
	}
	console.log(sortedArr);
}

signalCycle();