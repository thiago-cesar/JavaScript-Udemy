//

let a = 1
console.log(a)


//console.log(typeof Promise)//function

//console.log(typeof p)


function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra=>letra.toLowerCase()

let p = new Promise((resolve)=>{//função 'resolve'
    resolve(['Ana','Bia','Carlos'])//Para acessar o valor gerado na callback. Caso deseje gerar mais de um valor, deverá ser passado no formato de objeto ou lista de valores.

})//Promessa que será executada e devolvida no futuro.Deverá ser passada uma função na promisse para executar e retorna algo solicitado.





p
        .then(primeiroElemento)//primeiro faz umresolve e depois vai executando os 'then'
        .then(primeiraLetra)
        .then(letraMinuscula)
        .then(console.log)

// p é um objeto.