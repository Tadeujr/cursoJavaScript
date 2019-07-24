
const escola = [{
    nome:'Turma1',
    alunos:[{nome: "gustavo",nota:8.1},{nome: "ana",nota:9.3}]
    },
    {nome :'Turma2',
    alunos:[{nome: "rebeca",nota:8.9},{nome: "roberto",nota:7.3}]}
]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma =  turma => turma.alunos.map(getNotaAluno)
const nota1 =  escola.map(getNotaTurma)

console.log(nota1)