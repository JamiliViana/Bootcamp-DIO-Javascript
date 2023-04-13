const { gets, print } = require('./funcoes-auxiliares-pratica.js');

const entrada = [2];
for(let i = 1; i <= 10; i++){
    let tabuada = gets(entrada) * i;
    print(gets(entrada)+'X'+ i+' = '+ tabuada);
}
