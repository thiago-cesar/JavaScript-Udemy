function segundoMaior(arrayNumero){

    const maiorNumero=Math.max(...arrayNumero)

    arrayNumero=arrayNumero.filter(numero=>numero!=maiorNumero)

    const segundoMaior=Math.max(...arrayNumero)

    return segundoMaior


    
}


console.log(segundoMaior([10,20,30]))