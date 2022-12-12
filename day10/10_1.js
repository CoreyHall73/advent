const { readFileSync, promises: fsPromises } = require('fs');

const lines = readFileSync("10.txt", { encoding: "utf-8" }) // read day??.txt content
	.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
    .split("\n") // Split on newline
    //.map((line) => [...line].map(Number));
let sortedArr = [];
    
function signalCycle() {
	let tempArr = [];
	//console.log(lines);
	for (i = 0; i < lines.length; i ++) {
		if (lines[i].includes("addx")) {
			//console.log("Add");
			for (j = 0; j < lines[i].length; j++) {
				if ((lines[i][j] == "-") || (parseInt(lines[i][j]) != "Nan")) {
					tempArr.push(parseInt(lines[i][j]));
				}
			}
			sortedArr.push(tempArr);
		} else {
			//console.log("Noop");
			sortedArr.push(lines[i]);
		}
	}
	console.log(sortedArr);
}

signalCycle();