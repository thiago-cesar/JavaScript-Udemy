//Armazenando uma função em uma variável:
//Função sem nome.
const imprimirSoma =function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma função arrow em uma variável (forma reduzida):

const soma=(a,b)=>{
    return a+b
}

console.log(soma(2,3))

//Retorno implícito:

const subtracao =(a,b)=>a-b //sem chaves, executa uma única sentença de código.
console.log(subtracao(2,3))

const imprimir2 =a=>console.log(a)
imprimir2('Legal!!!')