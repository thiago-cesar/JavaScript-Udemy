//SEM PROMISSE

const http =require('http')

const getTurma=(letra, callback)=>{//CALLBACK É CHAMADA QUANDO O ARQUIVO ESTIVER TOTALMENTE CARREGADO.

    const url=`http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res=>{

        //concatenando os dados do arquivo JSON.
        let resultado=''
        res.on('data', dados=>{
            resultado += dados

        })

        res.on('end' , ()=>{
           callback(JSON.parse(resultado)) 
        })
    })
}
let nomes=[]

getTurma('A', alunos=>{
    nomes= nomes.concat(alunos.map(a=> `A:${a.nome}`))
    
    getTurma('B', alunos=>{
        nomes= nomes.concat(alunos.map(a=> `B:${a.nome}`))
        
        getTurma('C', alunos=>{
            nomes= nomes.concat(alunos.map(a=> `C:${a.nome}`))
            console.log(nomes)
        })
        
    })
})

