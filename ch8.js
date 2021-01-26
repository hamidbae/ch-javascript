function sorting(arr){
    let newArr = [...arr];

    for(let i=0; i<newArr.length; i++){
        if(newArr[i]>newArr[i+1]){
            [newArr[i],newArr[i+1]] = [newArr[i+1],newArr[i]];
            i -= 2;
        }
    }

    console.log(newArr)
}

sorting([3, 52, 103, -6, 10, 0, 3, 1, -4, 40, 71]);