//let e const

//let escopo de bloco

{
    var a = 2
    let b = 3//possui escopo de bloco.
    console.log(b)

}

console.log(a)
//console.log(b)


//Template String--delimitar as strings por crase e chaves.

const produto ='Ipad'

console.log(`${produto} é caro!`)


//Destructuring- retirar algo de detnro de um objeto,array ou string

const[l, e, ...tras] = "Cod3r"

console.log(l, e, tras)

const[x, y] = [1,2,3]
console.log(x, y)

const{idade, nome}= {nome:'Ana', idade:9}
console.log(idade, nome)
