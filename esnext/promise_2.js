

/*setTimeout(function(){
    console.log('Executando callback 01...')
    
    setTimeout(function(){
        console.log('Executando callback 02...')
        
        setTimeout(function(){
            console.log('Executando callback 03...')

        },2000)
        
    },2000 )

},2000)//Primeiro executa a função setTimeOut para, em seguida executar a callback(function) e executar o console.log*/


function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()//será executado após a Promise executar o setTimeOut e esntão o '.then'   seráchamado.
        }, tempo)
    })
}


esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)