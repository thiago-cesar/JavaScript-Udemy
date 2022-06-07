const somarNumeros=(array)=>{

    const arraySomar=array

    return arraySomar.reduce(function(acum,valorAtual, indice,array){
        return acum+valorAtual
    })

}

console.log(somarNumeros([15,15,15,15]))