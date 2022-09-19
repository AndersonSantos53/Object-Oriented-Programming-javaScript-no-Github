System.register("cliente", [], function (exports_1, context_1) {
    "use strict";
    var Cliente;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Cliente = /** @class */ (function () {
                function Cliente(_a) {
                    var idade = _a.idade, nome = _a.nome, cpf = _a.cpf;
                    this.idade = idade;
                    this.nome = nome;
                    this.cpf = cpf;
                }
                return Cliente;
            }());
            exports_1("Cliente", Cliente);
        }
    };
});
System.register("script", ["prompt-sync", "cliente"], function (exports_2, context_2) {
    "use strict";
    var PromptSync, Cliente_1, prompt, idade, nome, cpf, cliente;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (PromptSync_1) {
                PromptSync = PromptSync_1;
            },
            function (Cliente_1_1) {
                Cliente_1 = Cliente_1_1;
            }
        ],
        execute: function () {
            prompt = PromptSync();
            idade = Number(prompt('Digite o tamanho do bolo: '));
            nome = prompt('Digite o seu nome: ');
            cpf = Number(prompt('Digite o valor do bolo: '));
            cliente = new Cliente_1.Cliente({
                idade: idade,
                nome: nome,
                cpf: cpf
            });
            console.log("nome: ".concat(nome, " \n  idade: ").concat(idade, " \n cpf: ").concat(cpf));
        }
    };
});
