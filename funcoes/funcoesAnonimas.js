const soma = function (x ,y){
    return x + y
} 

const imprimiResultado = function(a , b , operacao = soma){
    console.log(operacao(a,b))
}

imprimiResultado(4,2) // como nao informei a operação ele utilizou a definida por padrao "soma"
imprimiResultado(4,2,soma)// nao vai mudar pois a padrao e soma
imprimiResultado(4,2,function(x,y){ // passei uma função anonima para o imprime
    return x - y
})

imprimiResultado(4,2,(x,y) => x * y) // passando um arrow function

/**Utilizando função anonima em um objeto */

const Pessoa = {
    fala: function(){
        console.log("tamo ai ")
    }
}

Pessoa.fala()