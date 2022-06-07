function inverso(numBol){
    let vari=numBol
    if(typeof vari=='number'){
        return -vari
    }else if(typeof vari=='boolean'){
        return !vari
    }

    
}

console.log(inverso(2000))