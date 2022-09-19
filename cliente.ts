interface newCliente {
  
    nome: string;
    idade: number;
    cpf: number;
  }
  
  class Cliente {
    private idade: number;
    private nome: string;
    private cpf: number;
   
    constructor ({idade, nome, cpf}: newCliente) {
  
      this.idade = idade;
      this.nome = nome;
      this.cpf = cpf;
    }
  
    
  
  }
  
  export { Cliente};