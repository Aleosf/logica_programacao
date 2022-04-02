/*
Situação-problema: Codificação de um Sistema de Cadastro de Peças

A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar a programação de um sistema de cadastro de peças, que deverá atender os seguintes requisitos:

    • Passo 1 - Se a peça possuir um peso superior a 100gramas, pode cadastrar.

    • Passo 2 - Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.

    • Passo 3 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

Para criação desse sistema de cadastro, você, enquanto programador(a) responsável, deverá solucionar os seguintes desafios:

• Aplicar técnicas de programação e ferramentas para desenvolvimento do código.

• Aplicar linguagem de programação JavaScript para implementação do sistema.
*/

let listaPecas = ["Distribuidor", "Alternador", "Ventoinha", "Relê","Amortecedor", "Catalisador", "Bateria", "Fluído de Freio", "Buzina", "Roda"];

let nomePeca = "BP";
let pesoPeca = 180;

if(listaPecas.length >= 10){ //verifica se tem espaço na lista
    console.log("Capacidade máxima da caixa atingido (limite de 10 peças). Retire uma peça para que seja possível cadastrar nova.");
    } else{ //prossegue caso tenha espaço na lista para cadastrar
        if(pesoPeca >= 100){ //verifica o peso da peça
            console.log("Peso da peça superior a 100gramas, pode cadastrar.");
                if(nomePeca.length < 3){ //verifica a quantidade de caracteres no nome da peça
                    console.log("Erro!!! O nome da peça deve ter mais que 3 caracteres.");
    }
  }
}
