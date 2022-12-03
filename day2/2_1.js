const {readFileSync, promises: fsPromises} = require('fs');

function winStrat() {

    const contents = readFileSync("2_1.txt", 'utf-8');
	const strArr = contents.split(/\r?\n/);
    //console.log(strArr);
    
    for (i = 0; i < strArr.length; i++) {
		//console.log("pairs: ", strArr[i]);
		for (j = 0; j < strArr[i].length; j++) {
			//console.log();
			if (strArr[i][0] == "A" && strArr[i][2] == "Y") {
				console.log("Case 1");
			} else {
				//console.log("others");
			}
		}
	}
}

winStrat();