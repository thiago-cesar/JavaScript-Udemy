function removerVogais(frase){

    const vogais=['a','e','i','o','u','A','E','I','O','U']

    vogais.forEach(vogal=>frase=frase.replace(vogal,''))

    return frase
   
}

console.log(removerVogais("Sem"))