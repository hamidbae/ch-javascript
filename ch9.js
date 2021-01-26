function matrix(arr){
    let newArr = arr.sort((a,b) => a-b);
    let arrMatrix = [];
    let temp = [];

    for(let i=0; i<newArr.length; i++){
        temp.push(newArr[i]);
        console.log(temp)

        if(temp.length == 2){
            arrMatrix.push(temp);
            temp = [];
        }
    }

    return arrMatrix;
}

console.log(matrix([11, 5, 6, 19, 53, 82, 12, 54, 44, 15]));