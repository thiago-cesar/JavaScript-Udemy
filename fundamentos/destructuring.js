//novo recurso ES2015

const pessoa={
    nome:'Ana',
    idade:5,
    endereco:{
        logradouro:'Rua ABC',
        numero:1000
    }
}

const{nome, idade}=pessoa //tire dentro do objeto('pessoa') os atributos 'nome' e 'idade'.
console.log(nome, idade)

const{nome: n, idade:i}=pessoa
console.log(n,i)

const{ sobrenome, humor=true}=pessoa
console.log(sobrenome, humor)

const{endereco:{logradouro, numero, cep}}=pessoa
console.log(logradouro, numero, cep)













