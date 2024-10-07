const alunos = ['Lucas', 'Maria', 'Carlos'];
console.log(alunos);

alunos.unshift('Fábio'); // adiciona no início
console.log(alunos);

alunos.push('Marcos'); // adiciona no final
console.log(alunos);

alunos.pop(); //remove o último
console.log(alunos);

alunos.shift(); // remove o primeiro
console.log(alunos);

delete alunos[1]; //remove do index solicitado, mas deixa vazio
console.log(alunos);

console.log(alunos.slice(0,2)); //fatia o array