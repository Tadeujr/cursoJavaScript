// execicio de function factore que retorna um objeto

function criarProduto(nome,preco,desconto = 1.09){
    
    preco -= desconto;
    return {
        nome, 
        preco
        
    }
}

let produto = new criarProduto('Banana',10.0)
console.log(produto.preco);
