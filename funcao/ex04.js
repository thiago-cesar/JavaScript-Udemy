function dividendoDivisor(did,div){
    resultadoDivisao=did/div;
    resto=did%div

    return ` Resultado da divisão: ${resultadoDivisao}\n Resto da divisão: ${resto}`;
}

console.log(dividendoDivisor(5,2))