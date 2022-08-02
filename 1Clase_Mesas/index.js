let arrayNumeros = [1, 2, 3, 4, 5, 6];

function sumandoAcumulados(array) {
let aux = 0;
for (let i = 0; i < arrayNumeros.length; i++) {
    aux += arrayNumeros[i];
    console.log(aux);
}
};

console.log(sumandoAcumulados(arrayNumeros));
