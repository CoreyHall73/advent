const { readFileSync, promises: fsPromises } = require('fs');


function overlap() {

	const contents = readFileSync("4.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
	let intArr = [];
	let testA = [];

	//console.log(strArr);

	for (i = 0; i < strArr.length; i++) {
		//console.log(strArr[i]);
		//console.log(strArr[i+1]);
		for (j = 0; j < strArr[i].length; j++) {
			intArr.push(parseInt(strArr[i][j]));
			if (typeof intArr[j] == "number") {
				testA.push(parseInt(intArr[j]));
			} else if (typeof intArr[j] == "NaN") {
				testA.push("hit");
			}
		}
		
		break;
	}
		//console.log(strArr);
		console.log(intArr);
		console.log(testA);

}

overlap();