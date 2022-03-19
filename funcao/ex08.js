/*
function desempenhoJogador(pontuacao){

    let arrayDesempenho=pontuacao.split(' ');
    console.log(arrayDesempenho)
    let pontMax=arrayDesempenho[0];
    let pontMin=arrayDesempenho[0];
    let quebraRecordes=0;
    let piorJogo=1;
    
    for(var i=1; i<arrayDesempenho.length;i++){
        if(arrayDesempenho[i]>pontMax){
            pontMax=arrayDesempenho[i];
            quebraRecordes++;
        }else if(arrayDesempenho[i]<pontMin){
            pontMin=arrayDesempenho[i];
            piorJogo=i+1;

         }
        
    }    
    return [quebraRecordes, piorJogo]
}

const pontos="10 20 20 8 25 3 0 30 1"
console.log(desempenhoJogador(pontos))

*/


/*let stringPontuacoes = "10, 10, 20, 8, 25, 3, 0, 30, 1"//"30, 40, 20, 4, 51, 25, 42, 38, 3, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    

    for (let i = 1; i <=pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i];
            qtdQuebraDeRecords++;
            
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i];
            piorJogo = i+1;
        }
        
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))*/

function desempenhoJogador(pontuacao) {
    let arrayDesempenho = pontuacao;
    console.log(arrayDesempenho);
    let pontMax = arrayDesempenho[0];
    let pontMin = arrayDesempenho[0];
    let quebraRecordes = 0;
    let piorJogo = 1;
   
    for (var i = 1; i < arrayDesempenho.length; i++) {
      if (arrayDesempenho[i] > pontMax) {
        pontMax = arrayDesempenho[i];
        console.log(pontMax);
        quebraRecordes++;
      } else if (arrayDesempenho[i] < pontMin) {
        pontMin = arrayDesempenho[i];
        piorJogo = i + 1;
      }
    }
    return [quebraRecordes, piorJogo];
  }
   
  const pontos = [10, 20, 20, 8, 25, 3, 0, 30, 1];
  console.log(desempenhoJogador(pontos));
