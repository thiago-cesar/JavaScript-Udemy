function diaUtil(dia){
    var dia;

    switch(dia){
        case 1:
            console.log('Domingo');
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log('Quarta-feira');
            break;
        case 5:
            console.log("Quinta-feira");
            break;

        case 6:
            console.log("Sexta-feira");
            break;

        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Não é um dia válido.Escolha um número entre 1 a 7.")
        
    }

    if(dia>=2&&dia<6){
        return 'Dia útil.';
    }else if(dia===1||dia===7){
        return 'Dia não útil.';
    }else{
        return 'Dia inválido(inexistente).'
    }
}

console.log(diaUtil(2))