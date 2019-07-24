require('./global')

console.log(MinhaApp.saudacao())

// tem como mudr os atributos do global, melhor usar o freez para isso nao acontecer

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)