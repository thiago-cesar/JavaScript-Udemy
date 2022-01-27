const resultado = nota => nota>= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.5))
console.log(resultado(6.9))

//ou...

const resultado2 = nota=>{
    return nota>= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(7.5))
console.log(resultado2(6.9))

