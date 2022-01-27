let isAtivo = false
console.log(isAtivo)
isAtivo= true
console.log(isAtivo)

isAtivo=1

console.log(!!isAtivo)//Negação "!" NOT não mostra o número "1".

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar...')
console.log(!!(''|| null || 0||'epa'))//Retorna apenas o valor verdadeiro.

let nome = ''

console.log(nome||'Desconhecido!') //a variável "nome" esta vazia portanto, a mesam será "false".