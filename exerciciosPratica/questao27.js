function inverter(objetoNormal){

    
    const objInvertido=Object.entries(objetoNormal).map(parChaveValor=>parChaveValor.reverse())

    return Object.fromEntries(objInvertido)

    

    
   
    

    return novoObjeto

}

console.log(inverter({ a: 1, b: 2, c: 3}))