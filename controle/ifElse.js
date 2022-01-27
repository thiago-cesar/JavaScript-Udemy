const imprimirResultado = function(nota){
    if(nota>=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(5)
imprimirResultado(8)
imprimirResultado('Epa!')//Linguagem fracamente tipada. O mesmo realiza uma comparação de string.
//Basta testar se o parâmetro é um valor numérico através de uma exceção.