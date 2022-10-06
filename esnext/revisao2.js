//arrow function

const soma=(a, b) => a + b

console.log(soma(2,3))

//Arrow Function(this)- É associado ao local o qual a função foi escrita.

const lexico1 = ()=>console.log(this===exports)//dentro de um módulo o módulo sempre irá apontar para um exports/module.exports.Função tradicional o this aponta para 'global'.

const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//Parâmetro default

function log(texto='Node'){
    console.log(texto)
}

log()//Se passar algum utro valor que não o padrão, ele irá imprimir o valor passado.
log(null)
log('mais forte que o valor default!')

//Operador rest(spread)-"espalhar"- Vários parâmetros que serão agrupados.

function total(...numeros){//espalhamento de parâmetros em arrays.
    let total=0
    numeros.forEach(n=>total+=n)
    return total

}

console.log(total(2,3,4,5))