const checarAnoBissexto=(ano)=>{

    if(ano%4==0 && ano%100!==100){
        console.log('verificando se ainda é bissexto...')
        if(ano%400==0){
            return 'é bissexto'

        }else{
            return 'não é bissexto'
        }
        
    }
    
}

console.log(checarAnoBissexto(2100))