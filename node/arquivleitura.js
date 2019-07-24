const fs = require('fs')// fs modulo de leitura e arbetura de arquivo


const caminho = __dirname + '/arquivo.json'

//lendo arquivo de modo sincrono
const conteudo = fs.readFileSync(caminho,'utf-8')

console.log(conteudo)

// leitura assincrona
fs.readFile(caminho,'utf-8',(erro,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// lendo uma pasta 
fs.readdir(__dirname,(erro,arquivos)=>{
    console.log('Conteúdo das pastas...')
    console.log(arquivos)
})