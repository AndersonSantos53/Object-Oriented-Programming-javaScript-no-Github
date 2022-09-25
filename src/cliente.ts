class Cliente {
    public nome: string;
    public sexo: string;
    public idade: number;
    public cpf: number;
    public endereco: string;

    constructor(nome: string,sexo:string, idade: number, cpf: number,endereco:string){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;

    }

    cadastroConcluido(){
        console.log('você ganhou um brinde!');

    }

}

const cliente = new Cliente ('Maiara Costa ','Feminino', 25,1001000,'Rua dos Salgados');
cliente.cadastroConcluido()

console.log(`Nome: ${cliente.nome} \n Idade: ${cliente.idade} Anos \n CPF:${cliente.cpf} \n Endereço: ${cliente.endereco}`);