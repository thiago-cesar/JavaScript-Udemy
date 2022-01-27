const prod1 ={}//Par de chave representa um objto(literal).Composto de uma coleção de chavese valores.
prod1.nome='Celular Ultra Mega' //nome criado dinamicamente dentro do objeto.
prod1.preco=4998.90
prod1['Desconto Legal']=0.40//Evitar atributos com espaço.

console.log(prod1)

const prod2={
    nome:'Camisa Polo',
    preco:79.90,
}

console.log(prod2)

//json:

'{"nome":"Camisa Polo", "Preço":79.90}'
//A partir de um objeto podemos gerar um json (possibilita interoperabilidade entre sistemas).