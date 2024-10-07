const pessoa1 = { //para criar objeto basta abrir chaves
    nome: 'Lucas',
    sobrenome: 'Faria',
    idade: 25,

    fala(){ //para criar funções/método
        console.log(`A minha idade é ${this.idade}`); //o this referencia o atributo do método
    },

};

console.log(pessoa1); //chama todos os dados
console.log(pessoa1.nome); //chama apenas o nome
pessoa1.fala();


//funcao que cria objetos
function criaPessoa (nome, sobrenome, idade){
    return { // colocando as chaves no return, irá retornar um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoaObjetc = criaPessoa('Luiz', 'Carlos', 72);
console.log(pessoaObjetc)
