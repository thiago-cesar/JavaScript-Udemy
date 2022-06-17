function buscarPalavrasSemelhantes(inicialLetter, matrizWords){

    const matrizPal=matrizWords
    let matrizFiltro=[]

    
    matrizPal.forEach(element => {
        if(inicialLetter===element.substr(0,inicialLetter.length)){
            matrizFiltro.push(element)
        }
        
    });

    return matrizFiltro
    
}

console.log(buscarPalavrasSemelhantes("jav", ["javascript", "java", "c++"]))