var Aviao = /** @class */ (function () {
    function Aviao(lugares, tamanho, velocidade) {
        this.lugares = lugares;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
    }
    Aviao.prototype.voar = function () {
        console.log('Esse avião ira voar com ou sem você! kkk');
    };
    return Aviao;
}());
var aviao = new Aviao(70, 39, 850);
aviao.voar();
console.log("Esse avi\u00E3o tem ".concat(aviao.lugares, " lugares! \n Tem ").concat(aviao.tamanho, " de tamanho! \n Ele voa em at\u00E9 ").concat(aviao.velocidade, " por hora."));
