/**Funcação call back */
const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)

/**Outra forma */
console.log("\nUsando arrow function eu que coloquei\n ")
fabricante.forEach((fabricante)=>{
    console.log(fabricante)
})