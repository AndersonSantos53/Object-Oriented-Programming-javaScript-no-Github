var ProdutoEletronico = /** @class */ (function () {
    function ProdutoEletronico(nome, marca, quantia) {
        this.nome = nome;
        this.quantia = quantia;
    }
    ProdutoEletronico.prototype.energia = function () {
        console.log('Verifique a clasicação do produto para economizar energia');
    };
    return ProdutoEletronico;
}());
var produtoEletronico = new ProdutoEletronico('celular', "Motorola", 20);
produtoEletronico.energia();
console.log("Nome do produto: ".concat(produtoEletronico.nome, " \nMarca: ").concat(produtoEletronico.marca, " \n ").concat(produtoEletronico.quantia, "."));
