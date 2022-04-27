
const ferrari={
    modelo:'F40',
    velMax:324
}

const volvo={
    modelo:'V40',
    velMax:200
}

console.log(ferrari.__proto__)//acessar o protótipo desse objeto(ferrari).
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__=== null)//Object.prototype será sempre a última instância de protótipo do objeto.

function meuObjeto() {}

console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)