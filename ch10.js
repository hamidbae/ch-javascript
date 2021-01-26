function jamToMenit(jam){
    return `${jam * 60} menit`;
}

function menitToJam(menit){
    return `${menit/60} jam`;
}

function menitToTahun(menit){
    return `${menit/525600} tahun`;
}

console.log(jamToMenit(14));
console.log(menitToJam(150));
console.log(menitToTahun(525600));