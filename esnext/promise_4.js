

function gerarNumerosEntre(min, max, tempo){
    if(min>max){
        [max, min] = [min, max]//invertendo os valores das duas variáveis por destructuring    
    }

    return new Promise(resolve=>{
        setTimeout(function() {
            const fator=max-min+1
            const aleatorio=parseInt(Math.random()*fator)
            resolve(aleatorio) 
        }, tempo);
       
    })
}

//Gerando 10 numeros aleatorios

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1,60, 4000),
        gerarNumerosEntre(1,60, 1000),
        gerarNumerosEntre(1,60, 500),
        gerarNumerosEntre(1,60, 3000),
        gerarNumerosEntre(1,60, 100),
        gerarNumerosEntre(1,60, 1500),
        gerarNumerosEntre(1,60, 1000),
        
    ])
}
console.time('promise')
gerarVariosNumeros()
    .then(numeros=>console.log(numeros))
    .then(()=>{
        
        console.timeEnd('promise')

    })



