let valor //não atribuir nada.

console.log(valor)

//console.log(valor2)/Não foi definido, diferente de indefinido.Não

valor=null //Ausência de valor.Não aponta para nenhum objeto da memória.Serve para zerar uma variável.
console.log(valor)
//console.log(valor.toString())//Variáveis nulas gera um problema em acessar funções.Erro!

const produto={}
console.log(produto.preco)//pelo menos o "produto" está definido.por isso é possível acessar "preco" sem atribuição.
console.log(produto)

produto.preco=3.50
console.log(produto)

produto.preco=undefined//evite atribuir undefined.
console.log(!!produto.preco)//undefined é falso.
//delete produto.preco
console.log(produto)

produto.preco=null //sem preço!
console.log(!!produto.preco)
console.log(produto.preco)








