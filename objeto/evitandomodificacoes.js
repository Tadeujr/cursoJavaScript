// Object.preventsExtension não permite adição de novos atributos no objeto alterar é permitido
const produto = Object.preventExtensions({
    nome:"qualquer", preco: 1.99, tag: "promoçao"
})

// object.seal não e possivel adicionar ne excluir atributos mas e permitido modificar
const pessoa = { nome:"Edlaine", idade:30}
Object.seal(pessoa)
pessoa.idade = 29
console.log(pessoa)