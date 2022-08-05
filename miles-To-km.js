// miles to kilometer converter

function milesToKm(miles) {
    const km = miles * 1.60934;
    return km;
}
const rodaMiles = 7.5;
const roadKm = milesToKm(rodaMiles);
console.log(roadKm);