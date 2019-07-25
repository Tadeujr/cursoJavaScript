const porta =  3003
const express =  require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados') 

app.use(bodyParser.urlencoded({extended: true})) // lembrar de baixar o modulo bodyParser

//busca todos produtos
app.get('/produtos',(req,res,next) => {
    res.send(bancoDeDados.getProdutos())
})

//busca produto por id
app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

//salva produto
app.post('/produtos',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

//altera o produto

app.put('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

//exluir produtos
app.delete('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)//JSON
})

app.listen(porta,()=>{
    console.log(`servidor executando na porta ${porta}`)
})