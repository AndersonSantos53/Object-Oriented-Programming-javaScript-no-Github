var Funcionario = /** @class */ (function () {
    function Funcionario(nome, sexo, idade, cpf, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    Funcionario.prototype.cadastroConcluido = function () {
        console.log('Bem vindo(a) a nossa empresa!');
    };
    return Funcionario;
}());
var funcionario = new Funcionario('Anderson Santos', 'Masculino', 26, 10000001000, 'Rua dos Salgados');
funcionario.cadastroConcluido();
console.log("Nome: ".concat(funcionario.nome, " \n Idade: ").concat(funcionario.idade, " Anos \n CPF:").concat(funcionario.cpf, " \n Endere\u00E7o: ").concat(funcionario.endereco, "."));
