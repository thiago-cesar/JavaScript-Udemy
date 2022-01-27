//Função é um bloco de código nomeado com parâmetros de entrada, ou não, e retornar dados, ou não.

//Função sem retorno:

function imprimirSoma(a, b){//não necessita utilizar o tipo de parâmetros.
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)//NaN
imprimirSoma(2,10,4,5,6,7)
imprimirSoma()

//Função com retorno:

function soma(a, b=0){
    return a+b
}

console.log(soma(2,3))
