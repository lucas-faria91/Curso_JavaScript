//primeira forma

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana){
//     let diaSemanaTexto;

//     switch (diaSemana) {
//     case 0:
//         return diaSemanaTexto = 'domingo';
//     case 1:
//         return diaSemanaTexto = 'segunda-feira';
//     case 2:
//         return diaSemanaTexto = 'terça-feira';
//     case 3:
//         return diaSemanaTexto = 'quarta-feira';
//     case 4:
//         return diaSemanaTexto = 'quinta-feira';
//     case 5:
//         return diaSemanaTexto = 'sexta-feira';
//     case 6:
//         return diaSemanaTexto = 'sábado';
//     default:
//         return diaSemana = '';
    
//     }
// }

// function getNomeMes(numeroMes){
//     let nomeMes;

// switch (numeroMes) {
//     case 0:
//         return nomeMes = 'janeiro';
//     case 1:
//         return nomeMes = 'fevereiro';
//     case 2:
//         return nomeMes = 'março';
//     case 3:
//         return nomeMes = 'abril';
//     case 4:
//         return nomeMes = 'maio';
//     case 5:
//         return nomeMes = 'junho';    
//     case 6:
//         return nomeMes = 'julho';
//     case 7:
//         return nomeMes = 'agosto';        
//     case 8:
//         return nomeMes = 'setembro';    
//     case 9:
//         return nomeMes = 'outubro';        
//     case 10:
//         return nomeMes = 'novembro';
//     case 11:
//         return nomeMes = 'dezembro';
//     }
// }

// function criaData(data){
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}
//     de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
//     )
// }
// h1.innerHTML = criaData(data);


//segunda forma

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});



//terceira forma

const h1 = document.querySelector('.container h1');
const data = new Date();

function getNomeMes(numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 
        'maio', 'junho', 'julho', 'agosto', 'setembro', 
        'outubro', 'novembro', 'dezembro']; 
    return meses[numeroMes]
}

function  getDiaSemanaTexto(diaSemana){
    const meses = ['domingo', 'segunda', 'teça', 'quarta', 
        'quinta', 'sexta', 'sábado'];
    return meses[diaSemana];
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}
    de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
    )
}
h1.innerHTML = criaData(data);