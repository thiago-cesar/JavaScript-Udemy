const alunos=[
    {nome:'Joao', nota:7.3, bolsista:false},
    {nome:'Maria', nota:9.2, bolsista:true},
    {nome:'Pedro', nota:9.8, bolsista:false},
    {nome:'Ana', nota:8.7, bolsista:true}
    
]


const resultado=alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador+atual
},10)//Para passar um valor inicial que não é da matriz.

console.log(resultado)