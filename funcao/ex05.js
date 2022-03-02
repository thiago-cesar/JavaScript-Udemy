function convertaEmReais(valor){
    var reais= valor;
    return reais.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}
const valor2=0.1+0.2
console.log(convertaEmReais(valor2));