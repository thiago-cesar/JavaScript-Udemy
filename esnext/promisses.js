//Noção de assícrono

function falarDepoisDe(segundos, frases){
    return new Promise((resolve, reject)=> {//Função quando a promessa for atendida/rejeitada
        setTimeout(() =>{
            resolve(frase)//Aceita um único parâmetro.
        }, segundos*1000)
    })


}

falarDepoisDe(3, 'Que Legal')
    .then(frase=>frase.concat('?!?'))
    .then(outraFrase=> console.log(outraFrase))