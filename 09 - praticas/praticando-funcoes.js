function mostreNome(nome){
    console.log('Meu nome é '+ nome);
}
function verificaIdade(idade) {
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else{
        console.log('Você é menor de idade');
    }
}

(function() {
    nome = 'Jamili';
    idade = 20;
    mostreNome(nome);
    verificaIdade(idade);
})();