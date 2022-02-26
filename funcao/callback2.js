//com e sem callback

const notas=[7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//SEM uso de callback notas menores que 7:

const notasBaixas1=[];
for(let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i]); 
    }
}

console.log(notasBaixas1);

//COM callback

const notasBaixas2=notas.filter(function(nota){
    return nota<7;
})

console.log(notasBaixas2);

