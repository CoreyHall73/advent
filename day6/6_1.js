const { readFileSync, promises: fsPromises } = require('fs');

const lines = readFileSync("6.txt", { encoding: "utf-8" }) // read day??.txt content
	.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
	//.split("\n") // Split on newline


function receive() {
	let afterIndex = 0;
	console.log(lines);
	for (i = 0; i < lines.length - 3; i++) {
		
		afterIndex++;
		
		let group = lines[i] + lines[i + 1] + lines[i + 2] + lines[i + 3];
		//console.log(group ,i);
		for (j = 0; j < group.length; j++) {
			//console.log(group[j]);
			if ((group[j] != group[j+1]) && (group[j] != group[j+2]) && (group[j] != group[j+3]) && (group[j+1] != group[j+2])
			&& (group[j+1] != group[j+3]) && (group[j+2] != group[j+3]) && (group[j+3] != undefined)) {
				console.log("group:", group[j], group[j+1], group[j+2], group[j+3], afterIndex);
				break;
			}
			break;
		}
		// Edge case for last 3 groups
		if (group.length > 4) {
			//console.log("incomplete group");
			break;
		}
	console.log(afterIndex + 3);
	}
}

receive();