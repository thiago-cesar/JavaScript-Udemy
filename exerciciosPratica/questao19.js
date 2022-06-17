const calcularMedia=(valoresCliente)=>{

    const resultado=valoresCliente.reduce(function(total,valor){
            
        return total+valor   

    })

    return resultado/(valoresCliente.length)

}


console.log(calcularMedia([1,2,3,4,5]))