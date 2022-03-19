function fatorial(num){
    var multiplicador=num
    for(var i=1;i<num;i++){
        multiplicador= multiplicador*i
        
    }

    
    return multiplicador
}

console.log(fatorial(3))