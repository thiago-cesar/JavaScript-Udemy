const alunos=[
    {nome:'Joao', nota:7.3, bolsista:true},
    {nome:'Maria', nota:9.2, bolsista:true},
    {nome:'Pedro', nota:9.8, bolsista:true},
    {nome:'Ana', nota:8.7, bolsista:false}
    
]

//Desafio:Todos os alunos são bolsistas?

const todosBolsistas=bolsa=>bolsa.bolsista

const funcaoVerTodosTrue=function(resultado,bolsista){
    
    return resultado && bolsista
}

const resultado1=alunos.map(todosBolsistas).reduce(funcaoVerTodosTrue)

console.log(resultado1)


//Desafio 2: Algum aluno é bolsista?

const funcaoVerAlgumTrue=function(resultado,bolsista){
    
    return resultado || bolsista
}

const resultado2=alunos.map(todosBolsistas).reduce(funcaoVerAlgumTrue)

console.log(resultado2)