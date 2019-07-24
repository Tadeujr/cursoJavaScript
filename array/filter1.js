const produtos = [
    {nome:"notebook", preco: 2499,fragil: true},
    {nome:"Ipad Pro", preco: 4199,fragil: true},
    {nome:"Copo de Vidro", preco: 12.49,fragil: true},
    {nome:"Copo de Plastico", preco: 18.99,fragil: false}

]

console.log(produtos.filter(function(p){
    return p.fragil == true && p.preco < 100
}))

const fragil = produto => produto.fragil == true // lembrar de chamar o atributo do objeto na função
const caro = valor => valor.preco >= 500

console.log("\nfuncão cria fora do filter\n")
console.log( produtos.filter(fragil).filter(caro) )