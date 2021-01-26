const grading = n => {
    if(n>=100){
        return "Nilai yang dimasukkan tidak dalam range.!";
    }else if(n>=90){
        return "A";
    }else if(n>=80){
        return "B";
    }else if(n>=70){
        return "C";
    }else if(n>=60){
        return "D";
    }else if(n>=0){
        return "E";
    }else{
        return "Nilai yang dimasukkan tidak dalam range.!";
    }
}

console.log(grading(30));