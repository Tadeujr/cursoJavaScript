const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixa1 = []

notas.forEach((notas)=>{
    if(notas < 6){
        notasBaixa1.push(notas)
    }
})

console.log(notasBaixa1)

// com call back maneiro nem usei
const notasBaixa2 = notas.filter( (nota) => nota > 7)

console.log(notasBaixa2)