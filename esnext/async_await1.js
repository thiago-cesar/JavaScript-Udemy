

function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(()=> resolve(), tempo)//será executado após a Promise executar o setTimeOut e então o '.then'   seráchamado.
    })
}

esperarPor(2000)
    .then(()=>console.log('Esperar promise 1...'))
    .then(esperarPor)
    .then(()=>console.log('Esperar promise 2...'))
    .then(esperarPor)
    .then(()=>console.log('Esperar promise 3...'))

//Usar async/await é utilizar um código assíncrono de forma síncrona.Abaixo,o código acima utilizando do async/await.

function retornarValor(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(10), 5000)//Irá retornar o valor "10" somente após o setTimeout ser executado.
    })
}


async function executar(){// função marcada como assíncrona

    let valor = await retornarValor()//Trabalhando com uma função assíncrona na forma síncrona em substituição ao "then".


    await esperarPor(1500)//Utilizar uma função que retorna uma promise.O await faz a função executar linha por linha na ordem, de forma síncrona.O await faz com que determinada promise seja resolvida uma por uma na ordem.
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)//Utilizar uma função que retorna uma promise.
    console.log(`Async/Await ${valor+1}...`)

    await esperarPor(1500)//Utilizar uma função que retorna uma promise.
    console.log(`Async/Await ${valor+2}...`)


    return valor+3
}

executar().then(console.log)