function palindrom(str){
    strArr = str.toLowerCase().split("");

    if(strArr == strArr.reverse()){
        console.log(`${str} # --> palindrom`);
    }else{
        console.log(`${str} # --> bukan palindrom`);
    }
}

palindrom('Ibu Ratna antar ubi')