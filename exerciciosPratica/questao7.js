function estaEntre(numero,minimo,maximo,inclusivo=false){

    
    

    if(numero>=minimo && numero<=maximo && inclusivo===false){
        return `O número ${numero}  está entre ${minimo} e ${maximo}.`
    }else if(numero>=minimo && numero<=maximo && inclusivo===true){

        return `O número ${numero} é igual ou está entre ${minimo} e ${maximo}.`
    }else{
        return `O número está fora dos limites estabelecidos!`
    }


}

console.log(estaEntre(0,1,10))