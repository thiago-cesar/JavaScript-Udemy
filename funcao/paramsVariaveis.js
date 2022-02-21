function soma(){//sem parâmetros.
    let soma=0
    for(i in arguments){
        soma += arguments[i]
    }

    return soma;
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,100))
console.log(soma(1.1,2.2,'teste'))
console.log(soma('a','b','c'))