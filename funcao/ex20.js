function saque(vlr){
    
    
    let notasCem=0;
    let notasCinq=0;
    let notasDez=0;
    let notasCinco=0;
    let notasUm=0;
    let saldo=vlr;

    while(saldo>=100){
        notasCem=((saldo)-(saldo%100))/100;
        saldo=saldo%100;
        if(notasCem>0){
            console.log(`${notasCem} Notas de 100`)
        }    
    }
    while(saldo<100&&saldo>=50){
        notasCinq=((saldo)-(saldo%50))/50;
        saldo=saldo%50;
        if(notasCinq>0){
            console.log(`${notasCinq} Notas de 50`)
        }
    }
    while(saldo<50&&saldo>=10){
        notasDez=((saldo)-(saldo%10))/10;
        saldo=saldo%10;
        if(notasDez>0){
            console.log(`${notasDez} Notas de 10`)
        }
    }
    while(saldo<10&&saldo>=5){
        notasCinco=((saldo)-(saldo%5))/5;
        saldo=saldo%5;
        if(notasCinco>0){
            console.log(`${notasCinco} Notas de 5`)
        }
    }
    while(saldo<5&&saldo>=1){
        notasUm=((saldo)-(saldo%1))/1;
        saldo=saldo%1;
        if(notasUm>0){
            console.log(`${notasUm} Notas de 1`)
        }
    }
    
    //console.log(`${notasCem} Notas de 100 \n${notasCinq} Notas de 50\n${notasDez} Notas de 10 \n${notasCinco} Notas de 5 \n${notasUm} Notas de 1 \n`)
    
}
saque(1150)