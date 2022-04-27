//Criar o próprio operando "new"

function Aula(nome, videoId){
    this.nome=nome
    this.videoId=videoId

}

const aula1=new Aula('Bem Vindo', 123)//Operador "new" cria um novo objeto e o objeto criado aponta para a função(Aula.prototype)
const aula2=new Aula('Até Breve', 456)

console.log(aula1,aula2)

//simulando o operador "new"

function novo(f, ...params){
    const obj={}//CRIANDO UM OBJETO NOVO DE FORMA LITERAL.
    obj.__proto__=f.prototype//O OBJETO CRIADO IRÁ APONTAR PARA A f.prototype.
    f.apply(obj, params)//FUNÇÃO RECEBE O PARAMWETRO OBJETO this
    return obj//RETORNAR O OBJETO CRIADO.
}


const aula3=novo(Aula,'Bem Vindo',123)
const aula4=novo(Aula,'Até Breve', 456)

console.log(aula3)
