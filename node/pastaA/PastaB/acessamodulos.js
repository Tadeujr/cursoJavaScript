const moduloA = require('../../muduloA')// ../ sai da pasta 
console.log(moduloA.ola)

// so o text de index
const saudacao = require('./pastaC')
console.log(saudacao.ola2)

// exemplo para abir no browser
const http = require('http')

http.createServer((req,res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)