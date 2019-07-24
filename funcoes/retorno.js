// armazenand função em variavel

const imprimirSoma = function (a,b){
    console.log(a+b);
}

imprimirSoma(2,3)

// função arrow

const soma = (a,b) =>{
    return a+b;
}

console.log(soma(3,3))


// retorno implicito
const subtracao = (a,b) => a - b;

console.log(subtracao(10,3));
