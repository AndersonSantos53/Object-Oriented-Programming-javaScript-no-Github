import PromptSync = require('prompt-sync');
import { Cliente } from "./Cliente";

const prompt = PromptSync();

const idade = Number(prompt('Digite a sua idade: '));
const nome = prompt('Digite o seu nome: ');
const cpf = Number(prompt('Digite o seu CPF: '));


const cliente = new Cliente({
  idade,
  nome,
 cpf
});

console.log(`nome: ${nome} \n  idade: ${idade} \n cpf: ${cpf}`);