let codigo=1;
let nota1=4;
let nota2=4;
let nota3=0;
let conjunto1=[] 
conjunto1.push(nota1,nota2,nota3);

/*let numeroMaximo=Math.max(...conjunto1);
console.log(numeroMaximo)*/

function calculaMedia(parametroArray){

    let maiorNota=Math.max(...parametroArray);
    newArray=parametroArray.filter(item=>item<maiorNota);
    newArray=newArray.map(item=>item*3);
    newArray.push(maiorNota*4);
    let somaNotas=(newArray.reduce((acum,index)=>acum+index))/10;
    if(somaNotas>=5){
        return `Aprovado com nota: ${somaNotas}`;
    }else{
        return `Reprovado com nota: ${somaNotas}`;
    }
   
    
}


console.log(calculaMedia(conjunto1))
/*if(media>=5){
    return `Nota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media}`;
}*/