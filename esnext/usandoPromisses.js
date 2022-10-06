//USANDO PROMISSES

const { rejects } = require('assert')
const http =require('http')

const getTurma=letra =>{//CALLBACK É CHAMADA QUANDO O ARQUIVO ESTIVER TOTALMENTE CARREGADO.

    const url=`http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
        http.get(url, res=>{

            //concatenando os dados do arquivo JSON.
            let resultado=''
            res.on('data', dados=>{
                resultado += dados
    
            })
    
            res.on('end', ()=>{
               try{
                    resolve(JSON.parse(resultado))
               }catch(e){
                reject(e)
               }
            })
        })
    })
}


let nomes=[]

getTurma('A').then(alunos=>{
    nomes= nomes.concat(alunos.map(a=> `A:${a.nome}`))
    
    getTurma('B').then(alunos=>{
        nomes= nomes.concat(alunos.map(a=> `B:${a.nome}`))
        
        getTurma('C').then(alunos=>{
            nomes= nomes.concat(alunos.map(a=> `C:${a.nome}`))
            console.log(nomes)
        })
        
    })
})


//USANDO PROMISSES DE FORMA MAIS RESUMIDA DO QUE A ANTERIOR(ACIMA):
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])//ARRAY DE FUNÇÕES A SEREM EXECUTADAS.
    .then(turmas=> [].concat(...turmas))//CONCATENANDO O RESULTADO DE CADA ARQUIVO JSON.
    .then(alunos=>alunos.map(aluno=>aluno.nome))//LISTA DE TODOS OS ALUNO PELO NOME
    .then(nomes=>console.log(nomes))//IMPRIMINDO OS NOMES DA LISTA.
    

