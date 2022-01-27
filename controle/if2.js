function teste1(num){
    if( num > 7)//Sem estrutura de bloco, apenas uma stença de código será considerada.
        console.log(num)


        console.log('Final')// setença fora do 'if'.Por isso que aparece!!!!
}

teste1(6)
teste1(8)

function teste2(num){
    if(num>7);
    
    {
        console.log(num)
    }
}

teste2(6)//também será impresso pois, o bloco não está associado ao bloco 'if'.
teste2(8)