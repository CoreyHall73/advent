const {readFileSync, promises: fsPromises} = require('fs');

function sumOfMostCals() {
    let sum = 0;
    let mostCals = 0;
    let mostCals2 = 0;
    let mostCals3 = 0;
    let pivotFor3 = 0;
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
			//console.log("number:" , intArr[index]);
		} 		
		if ((typeof intArr[index + 1] != "number") && (typeof intArr[index] == "number")) {
			// Try nesting more logic here
			timesAdded++;
			//console.log("number:" , intArr[index]);
			sum += intArr[index];
			if (sum > mostCals) {
				mostCals = sum;
			} 
			if (sum < mostCals) {
				pivotFor3 = sum;
				//console.log("hit1");
			}
			if (mostCals3 < pivotFor3 && sum < mostCals) {
				console.log("hit2");
				mostCals3 = sum;
			}
			if (mostCals2 < mostCals3 && sum < mostCals3) {
				console.log("p");
				mostCals2 = sum;
			}
			
				
			
			
		}	
		if (typeof intArr[index] == "string") {
			sum = 0;
		}
		  			
	}
	//console.log(sum);
	//console.log(timesAdded);   
	console.log("sum for most: ", mostCals);
	console.log("sum for second: ",mostCals2);
	console.log("sum for pivot: ",pivotFor3);
	console.log("sum for third: ", mostCals3);
	console.log(mostCals + mostCals2 + mostCals3);
}

sumOfMostCals();