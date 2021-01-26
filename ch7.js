function strReverse(str){
    strArr = str.split(/[ .,]/);
    console.log(strArr.reverse().join(" "));
}

strReverse("aku akan lari")