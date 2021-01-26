function umur(date){
    let arrDate = date.split(/[- /]/)
    let tanggal = new Date(arrDate[2], arrDate[1], arrDate[0]);
    let now = new Date();
    var ageDifMs = now - tanggal;
    var ageDate = new Date(ageDifMs);

    return (`${ageDate.getFullYear() - 1970} tahun ${ageDate.getMonth()} bulan`);
}

console.log(umur("17-09-1999"))