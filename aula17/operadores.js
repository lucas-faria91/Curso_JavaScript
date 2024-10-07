/*
>
>=
<
<=
== (só checa valor)
=== igualdade estrita (checa valor e tipo)
!= 
!== diferente estrito (valor e tipo)
*/
const num1 = 10;
const num2 = '10';
console.log(num1 == num2);
//mesmo sendo tipos diferentes, number e string, o JS reconhece como iguais
//por isso se deve usar ===
console.log(num1 === num2);
//o mesmo vai servir para != é melhor fazer !==