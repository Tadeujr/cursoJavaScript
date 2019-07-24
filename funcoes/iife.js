// função imediatamente invocada
/**
 * (function sada(nome){
    return console.log(nome)
})(nome)

//sada("tadeu")
 * 
 *  */



 // função anônima
let teste = (function(){// o que eu criar aqui dentro so estara disonivel aqui dentr

    console.log('sera executado na hora ');
    console.log("foge do escopo mais abrangente");
})() // () serve para indicar um iife 

teste;

// funça imediata com retorno
let soma = (function(){
    let saida;

    return function(x, y){
        return console.log(x+y);
    }
    
})()

soma(1,2);