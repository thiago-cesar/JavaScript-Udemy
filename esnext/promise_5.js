

function funcionarOuNao(valor, chanceErro){

    return new Promise((resolve, reject)=>{
        if(Math.random()<chanceErro){//Traz umnúmero entre 0 e 1.
            
            reject('Ocorreu um erro!')
            
        }else{
            resolve(valor)
        }
    })

}

funcionarOuNao('testando...', 0.99)
    .then(v=>console.log(`Valor: ${v}`))
    .catch(err=>console.log(`Erro: ${err}`))//Tratando um erro.Retornando uma exceção(tratando o erro que apareceria na tela).O then seguinte não receberá a informação anterior(caso tenha dado erro em sua execução).
    .then(()=>console.log('Fim!'))

