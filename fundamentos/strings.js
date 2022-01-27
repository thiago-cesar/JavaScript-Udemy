const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))//Valor vazio no índice inexistene na string.

console.log(escola.charCodeAt(3))//Valor na tabela ASCII.

console.log(escola.indexOf('3'))

console.log(escola.substring(1))//índice 1 até o final
console.log(escola.substring(0,3))//inclui os índices 0 até o índice 3, sem incluir o índice final.

console.log('Escola '.concat(escola).concat(escola).concat("!"))
console.log(escola.replace(3,'e'))
//utilizando expressões regulares(regex):
console.log(escola.replace(/\w/g,"e"))

console.log('Ana, Maria, Pedro'.split(','))//Converter uma estrutura de strings para um array.