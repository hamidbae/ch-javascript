const testArr = arr => {
    let max = -Infinity;
    let min = Infinity;
    let median = 0;
    let avg = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max) max = arr[i]
        if(arr[i] < min) min = arr[i]
        if(arr.length%2 == 0){
            median = (arr[(arr.length/2)]+arr[arr.length/2-1])/2
        }else{
            median = arr[Math.round(arr.length/2)-1]
        }
        avg += arr[i]
    }

    avg /= arr.length

    console.log(`Max : ${max}`);
    console.log(`Min : ${min}`);
    console.log(`Median : ${median}`);
    console.log(`Average : ${avg}`);
}

testArr([-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98])