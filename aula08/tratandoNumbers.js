let num1 = 10;
let num2 = 2.34587

console.log(num1.toString() + num2); // transforma temporariamente o num1 em string
console.log(num1.toString(2)); // transforma o numero em binario
console.log(num2.toFixed(2)); // limita em 2 casas decimais
console.log(Number.isInteger(num1)); // retorna true se for inteiro, senão false
let temp = num1 * 'olá';
console.log(Number.isNaN(temp)) // retorna true se não for um número.

let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4) // há um imprecissão na soma de decimais.
//Para resolver o toFixed não resolve, para resolver, uma solução pode ser:
temp = ((num3 * 100) + (num4 * 100)) / 100;
console.log(temp) 