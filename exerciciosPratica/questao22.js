const funcaoDaSorte=(numeroEscolhido)=>{

    const numeroAleatorio= (Math.random()*10).toFixed(0)
    if(numeroEscolhido==numeroAleatorio){

        return `Parabéns!O numero sorteado foi ${numeroAleatorio}`
    }else{
        return `Que pena!O numero sorteado foi ${numeroAleatorio}`
    }

}

console.log(funcaoDaSorte(3))