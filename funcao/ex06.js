function jurosSimples(kInicial,tJuros,tempo){
    let montante=kInicial+((kInicial*(tJuros/100))*tempo);

    return montante;
}



function jurosCompostos(kInicial,tJuros,tempo){
    let montante=kInicial*((1+(tJuros/100))**tempo);

    return montante;
}

console.log(jurosSimples(1000,10,2))
console.log(jurosCompostos(1000,10,2))