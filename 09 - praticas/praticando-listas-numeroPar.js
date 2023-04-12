// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
var lista= [];
for(let i = 0; i<=10;i++){
    lista.push(i);
}
var numerosPares= [];
for (let i = 0; i < lista.length; i++){
    if (lista[i] % 2 == 0){
        numerosPares.push(lista[i]);
    }
}
console.log(lista);
console.log(numerosPares);