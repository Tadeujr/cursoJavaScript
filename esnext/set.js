// nao aceita repetições indexadas
const times = new Set()
times.add('Flamengo')
times.add('Vasco')
times.add('São paulo')
times.add('Vasco')
console.log(times)
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.size)
console.log(times)
