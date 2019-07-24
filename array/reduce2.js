const alunos = [
    {nome:"João", nota: 7.3, bolsista: false},
    {nome:"Maria", nota: 9.2, bolsista: true},
    {nome:"Pedro", nota: 9.8, bolsista: false},
    {nome:"Ana", nota: 8.7, bolsista: true},
]

// todo alunos são bolsista
const bolsas = ehbolsista =>  ehbolsista.bolsista
const todosBolsista = (resultado,bolsista) => resultado && bolsista
const resultado1 = alunos.map(bolsas).reduce(todosBolsista)
console.log(resultado1)

//Algum aluno é bolsista
const algumBolsista = (resultado,bolsista) => resultado || bolsista
const resultado2 = alunos.map(bolsas).reduce(algumBolsista)

console.log(resultado2)


