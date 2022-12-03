const { readFileSync, promises: fsPromises } = require('fs');


function ruckSort() {

    const contents = readFileSync("3_1.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
	//console.log(strArr);
	
	for (i = 0; i < strArr.length; i++) { // INITIAL LOOP FOR ENTIRE ARRAY
		//console.log(strArr[i].length);
		let midPoint = 0;
		
		for (j = 0; j < strArr[i].length; j++) { // INNER LOOP FOR EACH INDEX
				//console.log(strArr[i][j]);
				midPoint = (strArr[i].length / 2);
				
		}
		
	}

}

ruckSort();