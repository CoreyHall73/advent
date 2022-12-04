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
	}
	console.log(valueFound);
	console.log(totalPriority);
}

ruckSort();