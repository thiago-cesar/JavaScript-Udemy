const pessoa={
    nome:'Rebeca',
    idade:2,
    peso:13

}

console.log(Object.keys(pessoa))//Mostrar todos as chaves do objeto.
console.log(Object.values(pessoa))//Mostrar os valores do objeto.
console.log(Object.entries(pessoa))//Mostrar as chaves e valores do objeto.

Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave,valor])=>{//Por Destructuring
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa,'dataNascimento',{//Definir uma propriedade do objeto.
    enumerable:true,//permissão para ser listada.
    writable:false, //permite alteração.
    value: '01/01/2019'
})

pessoa.dataNascimento='01/01/2017'//Não pérmite alteração conforme definição no defnePropertie.
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))//Mostrar as chaves do objeto.

//Object.assign(ECMAScript 2015)

const deDestino={a:2}
const o1={b:2}
const o2={c:3, a:4}
const obj=Object.assign(deDestino,o1,o2)//Pega os atributos dos dois objetos(o1 e o2) e enviam e concatenam com o objeto de destino.

Object.freeze(obj)
obj.c=1234
console.log(obj)