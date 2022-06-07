function receberSomenteParesEIndicesPares(array){

    let arrayParesPares=[];


   array.filter((valor,indice)=>{
       if((valor%2)==0 && (indice%2)==0){
           arrayParesPares.push(array[indice])
       }
   })

    return arrayParesPares
}

console.log(receberSomenteParesEIndicesPares([10,70,22,43]))