/*
Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar os seguintes resultados:

•	se o número for par, escreva 'par' e o número correspondente.
•	se o número for ímpar, escreva 'ímpar' e o número correspondente.
•	se o número for zero, escreva 'zero' e o número correspondente.
*/

let alunosPresentes = 16;

for(let i = 0; i <= alunosPresentes; i++) {

    if( i == 0 ) {
    console.log(`Zero: ${i}`);
    } else if( i % 2 == 0 ){ 
    console.log(`Par: ${i}`);   
    } else {
    console.log(`Ímpar: ${i}`);    
    }     
}
