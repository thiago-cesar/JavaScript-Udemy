//par nome/valor
const saudacao = 'Opa' // contexto léxico 1: Local físico do código está definido (nível de arquivo).

function exec(){
    const saudacao='Faala' //contexto léxico 2.
    return saudacao //contexto da função.
}

//Objets são grupos aninhados de pares nome/valor.
const cliente ={
    nome:'Pedro',
    idade:32,
    peso:90,
    endereco:{
        logradouro:'Rua Almir Aevedo',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)