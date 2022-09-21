class Aviao {
    public lugares : number;
    public tamanho :number;
    public velocidade : number;

    constructor(lugares:number, tamanho:number, velocidade:number){
        this.lugares = lugares;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
    }
}
const aviao = new Aviao(70,39,850)


console.log(aviao)

