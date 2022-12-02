const {readFileSync, promises: fsPromises} = require('fs');

function sumOfMostCals() {
    let sum = 0;
    let mostCals;
	
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
		if (intArr[index] == typeof number) {
			sum += intArr[index];
		}
	}
	console.log(sum);
	
    
    
}

sumOfMostCals();