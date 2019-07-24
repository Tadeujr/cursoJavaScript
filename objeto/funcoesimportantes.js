const pessoa = {
    nome: 'Edlaine',
    idade: 29,
    peso : 74
}

console.log(Object.keys(pessoa)); // mostras as chaves do objeto
console.log(Object.values(pessoa));// mostra os valores do objeto
console.log(Object.entries(pessoa));// mostra chave e valor com arrays 

Object.entries(pessoa).forEach(e =>{ // for mostra de maneiraa organizaada a chave e o valor do objeto
    console.log(`${e[0]}: ${e[1]}`);
})

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true, // o objeto podera ser listado através das keys (true ou false)
    writable: false, // permite ser alterada (true ou falasee)
    values:'22/06/1989' 
});// define uma propiedade do objeto

//FUNÇAÔ QUE NA TESTEI Object.assign(objeto destino,objeto1, objeto2)// pega os atributos do objetos e joga dentro de um outro objeto

Object.freeze(pessoa);// nao permite alteração nenhuma no objetoos
