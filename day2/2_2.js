const { readFileSync, promises: fsPromises } = require('fs');

function winStrat() {

	const contents = readFileSync("2_1.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
	//console.log(strArr);
	let score = 0;
	const win = 6;
	const draw = 3;
	const rock = 1;
	const paper = 2;
	const scissors = 3; 

	for (i = 0; i < strArr.length; i++) {
		
		if (strArr[i][2] == "X") {
			if (strArr[i][0] == "A") {
				score += scissors;
			}
			if (strArr[i][0] == "B") {
				score += rock;
			}
			if (strArr[i][0] == "C") {
				score += paper;			}
		}
		if (strArr[i][2] == "Y") {
			if (strArr[i][0] == "A") {
				score += (rock + draw);
			}
			if (strArr[i][0] == "B") {
				score += (paper + draw);
			}
			if (strArr[i][0] == "C") {
				score += (scissors + draw);			}
		}
		if (strArr[i][2] == "Z") {
			if (strArr[i][0] == "A") {
				score += (paper + win);
			}
			if (strArr[i][0] == "B") {
				score += (scissors + win);
			}
			if (strArr[i][0] == "C") {
				score += (rock + win);			}
		}
		
	}
	console.log(score);
}

winStrat();