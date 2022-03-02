//pessoa->123{...}

const pessoa={nome:'João'}
pessoa.nome='Pedro'
console.log(pessoa)
//pessoa->456(outro endereço de memória)->{...}a variável pessoa aponta para um novo objeto.
//pessoa={nome:'Ana'}//gera um problema na atribuição de outro objeto para uma constante.

Object.freeze(pessoa)//congelando o objeto pessoa.
pessoa.nome='MARIA'
pessoa.end='Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)