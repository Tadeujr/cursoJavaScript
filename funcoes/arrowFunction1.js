let dobro = function(a){
    return 2 * a
}

dobro = (a) => { // mesma função em arrow function forma 1 this nao muda nunca 
    return 2 * a
}

dobro = a => 2 * a // return implicito forma 2

console.log(dobro(3))