//armazenandop em uma variável:

const soma=function(x,y){
    return x+y

}

const imprimirResultado=function(a,b,operacao=soma){//função dentro de outra função como parâmetro.
    console.log(operacao(a,b))
}

imprimirResultado(3,4)//não foi passado o terceiro parâmetro portanto, o terceiro parâmetro irá assumir a função soma com os dois parâmetros passado na função atual.


imprimirResultado(3,4,soma)//mesmo resultado=7

imprimirResultado(3,4, function(x,y){//não utilizou a função soma mas a função anônima passada como parãmetro9função anônima.
    return x-y
})
    


const pessoa={
    falar: function(){
        console.log('Opa')
    }
}


pessoa.falar()