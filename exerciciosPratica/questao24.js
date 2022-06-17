
function contarCaracteres(caracter,palavra){

    const word=palavra
    count=0
    pos=word.indexOf(caracter)
    

    while(pos!=-1){
        count++
        pos=word.indexOf(caracter, pos+1)

    }

    return count


}

console.log(contarCaracteres("o", "A sorte favorece os audazes"))