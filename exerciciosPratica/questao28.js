function filtrarPorQuantDigitos(matrizNumeros,digitos){


    return matrizNumeros.filter(numeros=>{
        const quantDigitos=String(numeros).length

        return quantDigitos===digitos
    })

}


console.log(filtrarPorQuantDigitos([1,10,100,20,220,15,5],3))