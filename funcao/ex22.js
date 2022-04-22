function pagarAnuidade(mesPagamento,valor){
    
    if(mesPagamento==1){
        
        return `Valor da anuidade: R$ ${valor}`;
    }else{
        let montante=(valor*(Math.pow((1.05),mesPagamento))).toFixed(2);
        return `Valor da anuidade: R$ ${montante}`;
    }

    
}

console.log(pagarAnuidade(2,110));