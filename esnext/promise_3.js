function gerarNumerosEntre(min, max){

    if(min>max){
        [max, min] = [min, max]//invertendo os valores das duas variáveis por destructuring.
        
    }

    return new Promise(resolve=>{
        const fator=max-min+1
        const aleatorio=parseInt(Math.random()*fator)
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1,60)
    .then(num=>num*10)
    .then(numX10=>`o numero gerado foi ${numX10}`)
    .then(console.log)