const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const genero = g => g.genero === 'F'
const menorSal = (funcionario,funcionarioAtual)=>{
    return funcionario.salario < funcionarioAtual.salario ? funcionario:funcionarioAtual
} 



const dados = axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios.filter(chineses).filter(genero).reduce(menorSal)
    console.log(func)
    
})
