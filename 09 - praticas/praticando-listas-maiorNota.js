// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
var listaNotas  = [2, 7, 3, 8, 10, 4];
var maiorNumero = listaNotas[0];
for (let i = 1; i < listaNotas.length; i++){
    if (listaNotas[i] > maiorNumero){
        maiorNumero = listaNotas[i];
    }
}
console.log(maiorNumero);