const { readFileSync, promises: fsPromises } = require('fs');


function ruckSort() {

	const contents = readFileSync("3_1.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
	let valueFound;
	let totalPriority = 0;
	//console.log(strArr);

	for (i = 0; i < strArr.length; i++) { // INITIAL LOOP FOR ENTIRE ARRAY
		//console.log(strArr[i].length);
		let midPoint = 0;
		let firstHalf = [];
		let secondHalf = [];
		midPoint = (strArr[i].length / 2);

		for (j = 0; j < strArr[i].length; j++) { // INNER LOOP FOR EACH INDEX
			if (j < midPoint) { // MAKE 2 ARRAYS OF FIRST AND SECOND HALF
				firstHalf.push(strArr[i][j]);
			} else if (j => midPoint) {
				secondHalf.push(strArr[i][j]);
			}
		}
		//console.log("first: ", firstHalf);
		//console.log("second: ", secondHalf);
		//console.log(firstHalf.includes("v"));
		if ((firstHalf.includes("a") == true) && (secondHalf.includes("a") == true)) {
			//console.log("hit on V");
			valueFound = "a";
			totalPriority += 1;		
		}
		if ((firstHalf.includes("b") == true) && (secondHalf.includes("b") == true)) {
			//console.log("hit on b");
			valueFound = "b";
			totalPriority += 2;		
		}
		if ((firstHalf.includes("c") == true) && (secondHalf.includes("c") == true)) {
			//console.log("hit on b");
			valueFound = "c";
			totalPriority += 3;		
		}
		if ((firstHalf.includes("d") == true) && (secondHalf.includes("d") == true)) {
			//console.log("hit on b");
			valueFound = "d";
			totalPriority += 4;		
		}
		if ((firstHalf.includes("e") == true) && (secondHalf.includes("e") == true)) {
			//console.log("hit on b");
			valueFound = "e";
			totalPriority += 5;		
		}
		if ((firstHalf.includes("f") == true) && (secondHalf.includes("f") == true)) {
			//console.log("hit on b");
			valueFound = "f";
			totalPriority += 6;		
		}
		if ((firstHalf.includes("g") == true) && (secondHalf.includes("g") == true)) {
			//console.log("hit on b");
			valueFound = "g";
			totalPriority += 7;		
		}
		if ((firstHalf.includes("h") == true) && (secondHalf.includes("h") == true)) {
			//console.log("hit on b");
			valueFound = "h";
			totalPriority += 8;		
		}
		if ((firstHalf.includes("i") == true) && (secondHalf.includes("i") == true)) {
			//console.log("hit on b");
			valueFound = "i";
			totalPriority += 9;		
		}
		if ((firstHalf.includes("j") == true) && (secondHalf.includes("j") == true)) {
			//console.log("hit on b");
			valueFound = "j";
			totalPriority += 10;		
		}
		if ((firstHalf.includes("k") == true) && (secondHalf.includes("k") == true)) {
			//console.log("hit on b");
			valueFound = "k";
			totalPriority += 11;		
		}
		if ((firstHalf.includes("l") == true) && (secondHalf.includes("l") == true)) {
			//console.log("hit on b");
			valueFound = "l";
			totalPriority += 12;		
		}
		if ((firstHalf.includes("m") == true) && (secondHalf.includes("m") == true)) {
			//console.log("hit on b");
			valueFound = "m";
			totalPriority += 13;		
		}
		if ((firstHalf.includes("n") == true) && (secondHalf.includes("n") == true)) {
			//console.log("hit on b");
			valueFound = "n";
			totalPriority += 14;		
		}
		if ((firstHalf.includes("o") == true) && (secondHalf.includes("o") == true)) {
			//console.log("hit on b");
			valueFound = "o";
			totalPriority += 15;		
		}
		if ((firstHalf.includes("p") == true) && (secondHalf.includes("p") == true)) {
			//console.log("hit on b");
			valueFound = "p";
			totalPriority += 16;		
		}
		if ((firstHalf.includes("q") == true) && (secondHalf.includes("q") == true)) {
			//console.log("hit on b");
			valueFound = "q";
			totalPriority += 17;		
		}
		if ((firstHalf.includes("r") == true) && (secondHalf.includes("r") == true)) {
			//console.log("hit on b");
			valueFound = "r";
			totalPriority += 18;		
		}
		if ((firstHalf.includes("s") == true) && (secondHalf.includes("s") == true)) {
			//console.log("hit on b");
			valueFound = "s";
			totalPriority += 19;		
		}
		if ((firstHalf.includes("t") == true) && (secondHalf.includes("t") == true)) {
			//console.log("hit on b");
			valueFound = "t";
			totalPriority += 20;		
		}
		if ((firstHalf.includes("u") == true) && (secondHalf.includes("u") == true)) {
			//console.log("hit on b");
			valueFound = "u";
			totalPriority += 21;		
		}
		if ((firstHalf.includes("v") == true) && (secondHalf.includes("v") == true)) {
			//console.log("hit on b");
			valueFound = "v";
			totalPriority += 22;		
		}
		if ((firstHalf.includes("w") == true) && (secondHalf.includes("w") == true)) {
			//console.log("hit on b");
			valueFound = "w";
			totalPriority += 23;		
		}
		if ((firstHalf.includes("x") == true) && (secondHalf.includes("x") == true)) {
			//console.log("hit on b");
			valueFound = "x";
			totalPriority += 24;		
		}
		if ((firstHalf.includes("y") == true) && (secondHalf.includes("y") == true)) {
			//console.log("hit on b");
			valueFound = "y";
			totalPriority += 25;		
		}
		if ((firstHalf.includes("z") == true) && (secondHalf.includes("z") == true)) {
			//console.log("hit on b");
			valueFound = "w";
			totalPriority += 26;		
		}
		if ((firstHalf.includes("A") == true) && (secondHalf.includes("A") == true)) {
			//console.log("hit on V");
			valueFound = "A";
			totalPriority += 27;		
		}
		if ((firstHalf.includes("B") == true) && (secondHalf.includes("B") == true)) {
			//console.log("hit on b");
			valueFound = "B";
			totalPriority += 28;		
		}
		if ((firstHalf.includes("C") == true) && (secondHalf.includes("C") == true)) {
			//console.log("hit on b");
			valueFound = "C";
			totalPriority += 29;		
		}
		if ((firstHalf.includes("D") == true) && (secondHalf.includes("D") == true)) {
			//console.log("hit on b");
			valueFound = "D";
			totalPriority += 30;		
		}
		if ((firstHalf.includes("E") == true) && (secondHalf.includes("E") == true)) {
			//console.log("hit on b");
			valueFound = "E";
			totalPriority += 31;		
		}
		if ((firstHalf.includes("F") == true) && (secondHalf.includes("F") == true)) {
			//console.log("hit on b");
			valueFound = "F";
			totalPriority += 32;		
		}
		if ((firstHalf.includes("G") == true) && (secondHalf.includes("G") == true)) {
			//console.log("hit on b");
			valueFound = "G";
			totalPriority += 33;		
		}
		if ((firstHalf.includes("H") == true) && (secondHalf.includes("H") == true)) {
			//console.log("hit on b");
			valueFound = "H";
			totalPriority += 34;		
		}
		if ((firstHalf.includes("I") == true) && (secondHalf.includes("I") == true)) {
			//console.log("hit on b");
			valueFound = "I";
			totalPriority += 35;		
		}
		if ((firstHalf.includes("J") == true) && (secondHalf.includes("J") == true)) {
			//console.log("hit on b");
			valueFound = "J";
			totalPriority += 36;		
		}
		if ((firstHalf.includes("K") == true) && (secondHalf.includes("K") == true)) {
			//console.log("hit on b");
			valueFound = "K";
			totalPriority += 37;		
		}
		if ((firstHalf.includes("L") == true) && (secondHalf.includes("L") == true)) {
			//console.log("hit on b");
			valueFound = "L";
			totalPriority += 38;		
		}
		if ((firstHalf.includes("M") == true) && (secondHalf.includes("M") == true)) {
			//console.log("hit on b");
			valueFound = "M";
			totalPriority += 39;		
		}
		if ((firstHalf.includes("N") == true) && (secondHalf.includes("N") == true)) {
			//console.log("hit on b");
			valueFound = "N";
			totalPriority += 40;		
		}
		if ((firstHalf.includes("O") == true) && (secondHalf.includes("O") == true)) {
			//console.log("hit on b");
			valueFound = "O";
			totalPriority += 41;		
		}
		if ((firstHalf.includes("P") == true) && (secondHalf.includes("P") == true)) {
			//console.log("hit on b");
			valueFound = "P";
			totalPriority += 42;		
		}
		if ((firstHalf.includes("Q") == true) && (secondHalf.includes("Q") == true)) {
			//console.log("hit on b");
			valueFound = "Q";
			totalPriority += 43;		
		}
		if ((firstHalf.includes("R") == true) && (secondHalf.includes("R") == true)) {
			//console.log("hit on b");
			valueFound = "R";
			totalPriority += 44;		
		}
		if ((firstHalf.includes("S") == true) && (secondHalf.includes("S") == true)) {
			//console.log("hit on b");
			valueFound = "S";
			totalPriority += 45;		
		}
		if ((firstHalf.includes("T") == true) && (secondHalf.includes("T") == true)) {
			//console.log("hit on b");
			valueFound = "T";
			totalPriority += 46;		
		}
		if ((firstHalf.includes("U") == true) && (secondHalf.includes("U") == true)) {
			//console.log("hit on b");
			valueFound = "U";
			totalPriority += 47;		
		}
		if ((firstHalf.includes("V") == true) && (secondHalf.includes("V") == true)) {
			//console.log("hit on b");
			valueFound = "V";
			totalPriority += 48;		
		}
		if ((firstHalf.includes("W") == true) && (secondHalf.includes("W") == true)) {
			//console.log("hit on b");
			valueFound = "W";
			totalPriority += 49;		
		}
		if ((firstHalf.includes("X") == true) && (secondHalf.includes("X") == true)) {
			//console.log("hit on b");
			valueFound = "X";
			totalPriority += 50;		
		}
		if ((firstHalf.includes("Y") == true) && (secondHalf.includes("Y") == true)) {
			//console.log("hit on b");
			valueFound = "Y";
			totalPriority += 51;		
		}
		if ((firstHalf.includes("Z") == true) && (secondHalf.includes("Z") == true)) {
			//console.log("hit on b");
			valueFound = "Z";
			totalPriority += 52;		
		}
	}
	console.log(valueFound);
	console.log(totalPriority);
}

ruckSort();