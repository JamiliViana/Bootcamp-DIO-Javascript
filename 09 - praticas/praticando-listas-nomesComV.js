// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".var lista= [];
var listaNomes = ['Jamili', 'Vitor', 'Victoria', 'Verde','Felipe'];
for (let i = 0; i < listaNomes.length; i++){
    if (listaNomes[i].substring(0,1) === 'V'){
        console.log(listaNomes[i]);
    }
}