const nome = "Lucas"; //const não pode ser reatribuído, ex const nome = "João"
const sobrenome = "Faria";
const idade = 33;
const peso = 93;
const altura = 1.87;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade; //let pode sofrer reatribuição

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);