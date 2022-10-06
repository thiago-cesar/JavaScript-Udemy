const schedule=require('node-schedule')
const { setTimeout } = require('timers/promises')

const tarefa1=schedule.scheduleJob('*/5*16**0', function(){
    console.log('Executando Tarefa1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek=[new schedule.Range(1,5)]
regra.hour=16
regra.second=30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})