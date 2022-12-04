const { readFileSync, promises: fsPromises } = require('fs');


function ruckSort() {
	console.log("start");
	const contents = readFileSync("3_1.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
	let groupPriority = 0;
	let groupArr = [];
	//console.log(strArr);

	for (i = 0; i < strArr.length; i+=3) { // INITIAL LOOP FOR ENTIRE ARRAY
		//console.log(strArr[i], typeof strArr[i]);
		groupArr.push([strArr[i], strArr[i+1], strArr[i+2]]);
		for (j = 0; j < groupArr.length; j++) {
			
		}
	}
	console.log(groupArr[0]);
	console.log("end");
}

ruckSort();