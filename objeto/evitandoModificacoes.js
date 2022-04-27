//Object.preventExtension- Evitar a extensão e incluir novos atributos.

const produto=Object.preventExtensions({
    nome:'Qualquer',preco:1.99,tag:'promocao'
})

console.log('Extensivel:',Object.isExtensible(produto))//Testando se uma função é extensível.

produto.nome='Borracha'
produto.descricao='Borracha escolar branca'//Permite alterações mas, não inclusões.

delete produto.tag//Pode também ser excluído.
console.log(produto)

//Object.seal(selar).

const pessoa={
    nome:'Juliana',idade:35
}

Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))//Não consegue adicionar novos atributos,não exclui atributos do objeto, mas consegue-se modificar os já existentes.

pessoa.sobrenome='Silva'//Tentando incluir novo atributo.
delete pessoa.nome //Tentando excluir um atributo.
pessoa.idade=29//Alterando  uma atributo-Permitido.
console.log(pessoa)

//Object.freeze=selado+valores constantes.Não altera, não exclui e nem altera(constante)