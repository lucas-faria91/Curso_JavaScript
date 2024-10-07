// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString())

// ano, mês, dia, hora, minutos, segundos, milissegundo
// const data = new Date(2019, 3, 20, 15, 14, 24, 999); // mes começa em 0 e vai até 11
// console.log(data.toString());

// const data = new Date('2019-04-20 20:34:52');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //0 janeiro - 11 dezembro
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Milissegundo', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 domingo - 6 sábado
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);