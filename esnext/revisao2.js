// Arrow Function, é uma função anonima
const soma = (a,b) => a+b

const soma2 = (a,b) => {
    return a+b
}

console.log(soma(2,3))

//Array Function(this)
const lexico1 = ()=> console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro defoult 
function log(texto='Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5))