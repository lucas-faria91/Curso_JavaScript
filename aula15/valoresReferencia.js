let a = [1, 2, 3];
let b = a;

console.log(a, b);

a.push(4);
console.log(a, b); //b vai apontar para o mesmo local de memória que a

let c = [...a]; //forma de fazer uma cópia de a
//para objeto seria exatamente a mesma coisa {...a}

c.pop();
console.log(a, b, c); //neste caso c foi o único que perdeu um número
