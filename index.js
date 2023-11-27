//let variavel, por que? por que a experiencia pode variar;
let quantidade_experiencia = ("Está no nível de: ");
console.log('quantidade_experiencia', quantidade_experiencia);

//const pois o nome sera permanente, constante
const nome_heroi = ("o Herói de nome: ");
console.log("nome_heroi", nome_heroi);

let nivel_experiencia = 1;

//if seria um *se* 
if (quantidade_experiencia <= 1000) {
    nivel_experiencia = "ferro";
} else if (quantidade_experiencia > 1001 && quantidade_experiencia <= 2000 ) {
    nivel_experiencia = "bronze";
} else if (quantidade_experiencia > 2001 && quantidade_experiencia <= 6000 ) {
    nivel_experiencia = "prata";
} else if (quantidade_experiencia > 6001 && quantidade_experiencia <= 7000 ) {
    nivel_experiencia = "ouro";
} else if (quantidade_experiencia > 7001 && quantidade_experiencia <= 8000 ) {
    nivel_experiencia = "platina";
} else if (quantidade_experiencia > 8001 && quantidade_experiencia <= 9000 ) {
    nivel_experiencia = "ascendente";
} else if (quantidade_experiencia > 9001 && quantidade_experiencia <= 10000 ) {
    nivel_experiencia = "imortal";
} else if (quantidade_experiencia > 10001 ) {
    nivel_experiencia = "radiante";
}

console.log("O herói está no nível de: " + nivel_experiencia);