// 
const contadorA = require('./instanciaunica')
const contadorB = require('./instanciaunica')

// para driblar o cahe do nove devemos usar uma função factore
const contadorC = require('./instaciaNova')()// invocando funçao
const contadorD = require('./instaciaNova')()

contadorA.inc()
contadorA.inc()
//Imprimido e comprovando o cache do node no objeto exportado
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
//Imprimido o valor ao alterado
console.log(contadorD.valor)
