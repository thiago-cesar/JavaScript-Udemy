function aumentoSalario(plano,salario){

    switch(plano){
        case 'A':
            console.log(`Salário atual= R$ ${salario}. Salário Reajustado R$ ${(salario*1.10).toFixed(2)}`);
            break;
        case 'B':
            console.log(`Salário atual= R$ ${salario}. Salário Reajustado R$ ${(salario*1.15).toFixed(2)}`);
            break;
        case 'C':
            console.log(`Salário atual= R$ ${salario}. Salário Reajustado R$ ${(salario*1.20).toFixed(2)}`);
            break;
        default:
            if(plano!=='A'||plano!=='B'||plano!=='C'){
                console.log('Plano inválido!')
            }
    }
}

aumentoSalario('A',3500.85)