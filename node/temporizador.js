// tarefas temporizada
const schadule = require('node-schedule')

const tarefa1 = schadule.scheduleJob('*/5 * 21 * * 4',function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})// 5 e, 5 segundo em quealquer minito/ hora ** ignora 1. segunfa ...

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa1')
},20000)

const regra = new schadule.RecurrenceRule()
regra.dayOfWeek = [new schadule.Range(1,5)]
regra.hour = 21
regra.second = 30

const tarefa2 = schadule.scheduleJob(regra,function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})