function sumOfMostCals() {
    let sum = 0;
    let mostCals;
    arrayOfListedNums = [[1,2,3],[2,3,4]];

    for (i = 0; i < arrayOfListedNums.length; i++) {
        console.log(arrayOfListedNums[i]);
        for (j = 0; j < arrayOfListedNums[i].length; j++) {
            //console.log(arrayOfListedNums[i][j]);
            if (arrayOfListedNums[i][j + 1] < arrayOfListedNums[i].length ) {
                if (sum === 0) {
                    console.log("if");
                    sum += arrayOfListedNums[i][j];
                    console.log(sum);
                } else {
                    console.log("else");
                    sum += arrayOfListedNums[i][j];
                    console.log(sum);
                }
            } else {
                sum = 0;
            }
        }
    }
    console.log(sum);
}

sumOfMostCals();