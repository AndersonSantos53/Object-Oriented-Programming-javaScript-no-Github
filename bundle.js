var Aviao = /** @class */ (function () {
    function Aviao(lugares, tamanho, velocidade) {
        this.lugares = lugares;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
    }
    return Aviao;
}());
var aviao = new Aviao(70, 39, 850);
console.log(aviao);
