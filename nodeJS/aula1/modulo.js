const nome = 'Lucas';
const sobrenome = 'Vitor';

const falaNome = () => {
    console.log(nome,sobrenome);
};
//Abaixo é uma das formas de exportar
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

//Outra forma de exportar é usando apenas:
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "Olá";

console.log(exports)