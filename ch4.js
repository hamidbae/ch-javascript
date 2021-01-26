function kabisat(x, y){
    let awal = x;
    let akhir = y;
    let kabisatPertama = awal - (awal%4);

    for(let i=kabisatPertama; i< akhir; i+=4){
        console.log(i);
    }
}

kabisat(2000,2020)