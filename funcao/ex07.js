function baskara(ax2,bx,c){

    let delta=(bx**2)-(4*ax2*c);



    if(delta<0){
        return 'Delta Negativo!'
    }else{

        
        let x1=(-bx+delta)/(2*ax2);
        let x2=(-bx+delta)/(2*ax2);
        if(x1===x2){
            return `Valor de delta ${delta}, Valor de x1 = x2= ${x1}.`
        }else{
            return `Valor de delta ${delta}, Valor de x1= ${x1} e Valor de x2= ${x2}.`
        }

        
    }

}

console.log(baskara(-8,2,2));