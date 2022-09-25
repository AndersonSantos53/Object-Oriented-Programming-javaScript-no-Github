class Aviao {
    public lugares : number;
    public tamanho :number;
    public velocidade : number;

    constructor(lugares:number, tamanho:number, velocidade:number){
        this.lugares = lugares;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
    }
    voar():void{
        console.log('Esse avião ira voar com ou sem você! kkk');
    }
}
const aviao = new Aviao(70,39,850);
aviao.voar()
console.log(`Esse avião tem ${aviao.lugares} lugares! \n Tem ${aviao.tamanho} de tamanho! \n Ele voa em até ${aviao.velocidade} por hora.`);