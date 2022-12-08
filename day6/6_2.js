const { readFileSync, promises: fsPromises } = require('fs');

const lines = readFileSync("6.txt", { encoding: "utf-8" }) // read day??.txt content
	.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
	.trim() // Remove starting/ending whitespace
//.split("\n") // Split on newline


function receive() {
	let group;
	let afterIndex = 0;
	console.log(lines);
	for (i = 0; i < lines.length - 13; i++) {
		group = lines[i];
		//console.log(lines[i]);
		for (j = 1; j < 14; j++) {
			if (i < 17) {
				group += lines[i + j];
			}

		}

		for (index = 0; index < group.length - 1; index++) {
			if ((group[index] != group[index + 1]) && (group[index] != group[index + 2]) && (group[index] != group[index + 3]) && (group[index] != group[index + 4])
			 && (group[index] != group[index + 5]) && (group[index] != group[index + 6]) && (group[index] != group[index + 7]) && (group[index] != group[index + 8])
			 && (group[index] != group[index + 9]) && (group[index] != group[index + 10]) && (group[index] != group[index + 11]) && (group[index] != group[index + 12])
			 && (group[index] != group[index + 13]) && (group[index] != group[index + 14]) && (group[index] != group[index + 15]) && (group[index + 1] != group[index + 2])
			 && (group[index + 1] != group[index + 3]) && (group[index + 1] != group[index + 4]) && (group[index + 1] != group[index + 5]) && (group[index + 1] != group[index + 6])
			 && (group[index + 1] != group[index + 7]) && (group[index + 1] != group[index + 8]) && (group[index + 1] != group[index + 9]) && (group[index + 1] != group[index + 10])
			 && (group[index + 1] != group[index + 11]) && (group[index + 1] != group[index + 12]) && (group[index + 1] != group[index + 13]) && (group[index + 1] != group[index + 14])
			 && (group[index + 1] != group[index + 15]) && (group[index + 2] != group[index + 3]))
			
		}
	console.log("GROUP: ", group, i);
	}
}

receive();