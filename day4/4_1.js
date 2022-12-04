const { readFileSync, promises: fsPromises } = require('fs');


function overlap() {

	const contents = readFileSync("4.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
	let intArr = [];

	//console.log(strArr);

	for (i = 0; i < strArr.length; i++) {
		//console.log(strArr[i]);
		//console.log(strArr[i+1]);
		intArr.push([parseInt([strArr[0]])], [parseInt([strArr[1]])]);
		break;
	}
		//console.log(strArr);
		console.log(intArr);

}

overlap();