class Funcionario {
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
        console.log('Bem vindo(a) a nossa empresa!');

    }

}

const funcionario = new Funcionario ('Anderson Santos','Masculino', 26,10000001000,'Rua dos Salgados');
funcionario.cadastroConcluido()
console.log(`Nome: ${funcionario.nome} \n Idade: ${funcionario.idade} Anos \n CPF:${funcionario.cpf} \n Endereço: ${funcionario.endereco}.`);