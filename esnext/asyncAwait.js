

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

//TRABALHANDO DE FORMA MAIS SÍNCRONA COM PROMISSES:

//RECURSO DO ES8-SIMPLIFICANDO O USO DE PROMISSES:

//A FUNÇÃO AWAIT SOMENTE IRÁ FUNCIONAR EM FUNÇÃO MARCADA COM "ASYNC"

let obterAlunos = async() =>{
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}// retorna um AsyncFunction

obterAlunos()
    .then(alunos=>alunos.map(a=>a.nome))
    .then(nomes => console.log(nomes))