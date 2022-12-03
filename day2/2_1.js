const { readFileSync, promises: fsPromises } = require('fs');

function winStrat() {

	const contents = readFileSync("2_1.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
	let score = 0;
	const win = 6;
	const draw = 3;
	const rock = 1;
	const paper = 2;
	const scissors = 3; 

	for (i = 0; i < strArr.length; i++) {
		
		if (strArr[i][0] == "A") {
			if (strArr[i][2] == "X") {
				score += (rock + draw);
				console.log("draw: ", rock, draw);
			}
			if (strArr[i][2] == "Y") {
				score += rock;
				console.log("loss : ", rock);
			}
			if (strArr[i][2] == "Z") {
				score += (rock + win);
				console.log("win: ", rock, win);
			}
		}
		if (strArr[i][0] == "B") {
			if (strArr[i][2] == "X") {
				score += (paper + win);
				console.log("win: ", paper, win);
			}
			if (strArr[i][2] == "Y") {
				score += (paper + draw);
				console.log("draw : ", paper, draw);
			}
			if (strArr[i][2] == "Z") {
				score += paper;
				console.log("loss: ", paper);
			}		
		}
		if (strArr[i][0] == "C") {
			if (strArr[i][2] == "X") {
				score += scissors;
				console.log("lose: ", scissors);
			}
			if (strArr[i][2] == "Y") {
				score += (scissors + win);
				console.log("win : ", scissors, win);
			}
			if (strArr[i][2] == "Z") {
				score += (scissors + draw);
				console.log("draw: ", draw);
			}		
		}
	}
	console.log(score);
}

winStrat();