const alunos = [
    {nome:"João", nota: 7.3, bolsista: false},
    {nome:"Maria", nota: 9.2, bolsista: true},
    {nome:"Pedro", nota: 9.8, bolsista: false},
    {nome:"Ana", nota: 8.7, bolsista: true},
]
// Imperativo
let total1 = 0
for(let i = 0; i < alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1)

// Declarativo
const getNota = sNota => sNota.nota
const somaNota = (nota,valores) => nota += valores
total2 = alunos.map(getNota).reduce(somaNota)
console.log(total2)