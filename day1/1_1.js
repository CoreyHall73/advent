const {readFileSync, promises: fsPromises} = require('fs');

function sumOfMostCals() {
    let sum = 0;
    let mostCals = 0;
    let timesAdded = 0;
	
	const contents = readFileSync("1_1.txt", 'utf-8');

	const strArr = contents.split(/\r?\n/);
	let intArr = [];
	
	for (i = 0; i < strArr.length; i++) {
		if (strArr[i].length > 1) {
			intArr.push(parseInt(strArr[i]));
		} else {
			intArr.push(strArr[i]);
		}
	}
	
	// LOGIC OF ALGORITHM
	for (index = 0; index < intArr.length; index++) {
		
		if (typeof intArr[index + 1] == "number") {
			timesAdded++;
			sum += intArr[index];
			console.log("number:" , intArr[index]);
		} 		
		if ((typeof intArr[index + 1] != "number") && (typeof intArr[index] == "number")) {
			// Try nesting more logic here
			timesAdded++;
			console.log("number:" , intArr[index]);
			sum += intArr[index];
			if (sum > mostCals) {
				mostCals = sum;
			}
		}	
		if (typeof intArr[index] == "string") {
			sum = 0;
		}
		  			
	}
	console.log(sum);
	console.log(timesAdded);   
	console.log(mostCals);
}

sumOfMostCals();