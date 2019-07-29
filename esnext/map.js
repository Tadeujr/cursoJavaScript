//map
const tecnologia = new Map()
tecnologia.set('react',{framework:false})
tecnologia.set('angular',{framework:true})

console.log(tecnologia.react)// vai dar resultadoo indefinido
console.log(tecnologia.get('react').framework)// maneira correta de utilizar o map 

// outro exemplo 
const chavesVariadas = new Map([
    [function(){},'Função'],
    [{},'Objeto'],
    [123,'Número'],
])

chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))// verificando se a chave existe no map return true ou false
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)