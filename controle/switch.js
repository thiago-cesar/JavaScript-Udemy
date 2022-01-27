const imprimirResultado=function(nota){
    switch(Math.floor(nota)){//a expressão não retorna V ou F.
        case 10:
        case 9:
            console.log('Quadro de Honra')//todos os case serão executado abaixo. POrtanto , inserir o 'break.
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')//colocar o break se estiver em outra localidade do bloco.

    }
}

imprimirResultado(10)
imprimirResultado(2)