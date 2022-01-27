function soBoaNoticia(nota){
    if(nota >=7){
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.1)

function seForVerdade(valor){
    if(valor){//valor V ou F.
        console.log('É verdade... '+valor)
    }
}
//Comentário teste.
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(" ")
seForVerdade('?')
seForVerdade([])
seForVerdade([1,2])
seForVerdade({})


