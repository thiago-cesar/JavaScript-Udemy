function getInteiroAleatorioEntre(min,max){
    const valor=Math.random()*(max-min)+min;
    return Math.floor(valor);//Arrendondamento.
};

//let opcao = -1;//Não precisa atribuir uma variável de controle inicial no Do..While.

do {
    opcao=getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1);

console.log('Até a próxima!');