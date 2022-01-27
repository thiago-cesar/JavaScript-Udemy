
function tratarErroELancar(erro){
    //throw new Error('...erro de processamento')
    //throw 10
    //throw true
    //throw 'mensage'

    throw{ //Lançamento de erro.
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){

    try{//Tratamento de erro.Tratamento através do Catch.
        console.log(obj.name.toUpperCase()+' !!!!!') //toUppercase indefinido para name!Erro!
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    } //Será executado mesmo quando ocorre erro ou, não ele chama esse bloco.
    
}

const obj ={nome:'Roberto'}

imprimirNomeGritado(obj)