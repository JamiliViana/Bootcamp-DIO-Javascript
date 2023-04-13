let i = 0;
function print(texto){
    console.log(texto);
}

function gets(entrada){
    const valorIndice = entrada[i];
    i++;
    return valorIndice;
}

module.exports = { gets, print };