{
    // let tem escopo de bloco ou seja use sempre let uahuahuhau
    //const para definir uma constante
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// tamplate string
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l,e,...tras] = "Cod3r"
console.log(l,e,tras)

// em um objeto
const {idade:i,nome} = {nome:'Edlaine', idade:30}
console.log(i,nome)