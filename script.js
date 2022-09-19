

var Cliente_1 = require("./Cliente");
var prompt = PromptSync();
var idade = Number(prompt('Digite a sua idade: '));
var nome = prompt('Digite o seu nome: ');
var cpf = Number(prompt('Digite o seu CPF: '));
var cliente = new Cliente_1.Cliente({
    idade: idade,
    nome: nome,
    cpf: cpf
});
console.log("nome: ".concat(nome, " \n  idade: ").concat(idade, " \n cpf: ").concat(cpf));
