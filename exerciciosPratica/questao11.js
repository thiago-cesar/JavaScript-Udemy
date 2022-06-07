function receberPrimeiroEUltimoElemento(novoArray){
    let tamanho=novoArray.length
    novoArray.splice(1,tamanho-2)

    return novoArray

}

console.log(receberPrimeiroEUltimoElemento([1,2,3,4,5,15,25,30]))

