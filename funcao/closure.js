//Closure é o escopo criado quando uma função é declarada.
//Esse escopo permite a função acessar e manipular variáveis externas à função.

//Contexto léxico em ação:

const x='Global'

function fora(){
    const x='Local'
    function dentro(){//local fpisico em que essa função foi declarada esta dentro do escopo da função "fora()"
        return x
    }
    return dentro
}

const minhaFuncao=fora()
console.log(minhaFuncao())

