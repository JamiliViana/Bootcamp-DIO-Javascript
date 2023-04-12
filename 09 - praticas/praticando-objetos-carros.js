// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carros{
    marca;
    cor;
    gastoMedioCombustivel;

    constructor(marca, cor, gastoMedioCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = 1/gastoMedioCombustivel ;
    }

    calculoValorPercuso(quilometros, precoCombustivel){
        console.log('O valor do percuso foi de ' + (quilometros * this.gastoMedioCombustivel * precoCombustivel))
    }
}

(function() {
    const crv = new Carro('Honda','Vinho', 6.7);
    console.log(crv);
    const valorPercuso = crv.calculoValorPercuso(10, 5.7)
})();