var Cliente = /** @class */ (function () {
    function Cliente(nome, sexo, idade, cpf, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    Cliente.prototype.cadastroConcluido = function () {
        console.log('você ganhou um brinde!');
    };
    return Cliente;
}());
var cliente = new Cliente('Maiara Costa ', 'Feminino', 25, 1001000, 'Rua dos Salgados');
cliente.cadastroConcluido();
console.log("Nome: ".concat(cliente.nome, " \n Idade: ").concat(cliente.idade, " Anos \n CPF:").concat(cliente.cpf, " \n Endere\u00E7o: ").concat(cliente.endereco));
