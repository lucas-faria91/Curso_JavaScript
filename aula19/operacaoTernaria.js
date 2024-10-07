// (condição) ? 'valor se verdadeiro' : 'valor se falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// a variável sempre vai ter um valor padrão.
const corUsuario = 'null';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

