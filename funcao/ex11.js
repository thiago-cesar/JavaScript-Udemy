function anoBissexto(ano){
    if(ano%4===0 && ano%100===0 && ano%400===0){
        return 'Ano Bissexto!'
    }else if(ano%4===0 && ano%100!==0){
        return 'É um ano bissexto!'
    }else{
        return 'Não é bissexto!'
    }
}

console.log(anoBissexto(1900));