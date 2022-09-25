class ProdutoEletronico {
    public nome : string;
    public marca: string;
    public quantia : number;
    
    constructor (nome:string,marca:string, quantia: number){
        this.nome = nome;
        this.quantia = quantia;
}

    energia(){
      console.log ('Verifique a clasicação do produto para economizar energia')
    }
}
const produtoEletronico = new ProdutoEletronico ('celular',"Motorola", 20)
produtoEletronico.energia()
console.log(`Nome do produto: ${produtoEletronico.nome} \nMarca: ${produtoEletronico.marca} \n ${produtoEletronico.quantia}.`)