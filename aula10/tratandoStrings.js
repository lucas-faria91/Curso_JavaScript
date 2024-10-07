let umaString = 'Um texto qualquer';
console.log(umaString);

umaString = "Um \"texto\""; //a barra permite que imprima as aspas
console.log(umaString);

umaString = "Um \\texto"; //imprime uma barra
console.log(umaString);

umaString = "Um texto lindo"; //todo string tem indice
console.log(umaString[4]); //se colocar um um index q não está preenchido vai dar undefined

console.log(umaString.charAt(6)); //também imprime apenas o caracter do índice
//umaString.concat faz o mesmo que o + para concatenar

console.log(umaString.indexOf('texto')); //mostra onde começa a palavra
console.log(umaString.indexOf('o', 3)); //procura a partir do índice 3.
console.log(umaString.lastIndexOf('m', 5)); //procura de tras pra frente

console.log(umaString.replace('Um', 'Outro')); //substitui a primeira ocorrencia de 'Um' por 'Outro'

umaString = 'O rato roeu a roupa do rei de roma';
console.log(umaString.slice(2, 6)); //pega um padaço da string
console.log(umaString.slice(-4)); //com negativo pega de trás pra frente
console.log(umaString.substring(umaString.length - 4));//pega o tamnho e fatia do fim para o início
console.log(umaString.split(' ')); //separa o string pelo espaço e guarda em um array 
console.log(umaString.split(' ', 3)); //separa apenas as três primeiras.
console.log(umaString.toUpperCase()); //tudo maiusculo
console.log(umaString.toLowerCase()); //tudo minusculo


//estudar expressões regulares em javascript
