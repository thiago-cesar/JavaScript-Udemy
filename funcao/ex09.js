function verAprovado(nota){
    
    const notaArredondada= nota=(nota+5)-(nota%5);
    
    if(notaArredondada>=40){
        return `Aprovado!. Nota ${nota}`
    }else{
        return 'Reprovado!'
    }
}

console.log(verAprovado(29))
console.log(verAprovado(38))
