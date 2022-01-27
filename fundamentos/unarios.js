let num1 = 1
let num2 = 2


num1++ //Posfixada.
console.log(num1)
--num1 // Prefixada. Prioridade maior que o perador posfixado.
console.log(num1)

console.log(++num1 === num2--) //Primeiro ocorre a comparação. Decrementa-se o num2 após a comparação.
console.log(num1 === num2) // Evitar um incremento dentro de uma comparação.

