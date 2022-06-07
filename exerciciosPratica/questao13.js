function filtarNumeros(array){
    const array1=array
    const array2=[1,2,3,5]
    const array3=[]

    array2.forEach((elemento1,indice1)=>{
       for(let i=0; i<array1.length;i++){
           console.log(`elemento1: ${elemento1}   indice1: ${indice1}  array1[${i}]: ${array1[i]}`)
           if(array1[i]==elemento1){
               array3.push(array1[i])
           }
       }
    })

    return array3
    
}


console.log(filtarNumeros([0,7,8,1,5,6,3]))