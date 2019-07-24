function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc:0.20};

console.log(getPreco.call(carro,0.17,'LB$'))// primeiro o contexto depois os parametros
console.log(getPreco.apply(carro,[0.18,'$']))// contexto e depois passa com array 
/** call passa o parametro para a funções contexto""objeto, const...",... parametros
 * 
 * 
 * 
 * apply passa para a função contexto e ous paramentro atravez de array
*/

