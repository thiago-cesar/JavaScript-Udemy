const nums=[1,2,3,4,5]//Gera um novo array com o dobro dos valores.

//For com propoósito, diferente do foreach:

let resultado=nums.map(function(e){
    return e*20
})

console.log(resultado)

const soma10=e=>e+10

const triplo=e=>e*3

const paraDinheiro=e=>`R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado=nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)


