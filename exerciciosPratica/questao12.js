const myobj={a:1, b:2}

function removerPropriedade(objeto, propdel) {

    let a=propdel
    let copia={...objeto}
    delete copia.a
    
    return copia

}




let newObjecto= removerPropriedade(myobj,"a")

console.log(newObjecto)
console.log(myobj)


console.log(Object.is(newObjecto))


function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
}

let myobj2= removerPropriedade(myobj,"a")

console.log(myobj2)
console.log(myobj)


