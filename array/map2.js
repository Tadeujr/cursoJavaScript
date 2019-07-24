const carrinho =[
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"kit de lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}',
]

// Retornar um array apenas com preço
const paraObjeto = json => JSON.parse(json)// converte Jason em objeto
const apenasPreco = produto=>produto.preco

const resultado= carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)