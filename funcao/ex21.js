function planoDeSaude(idade){

    const mensalFixo=100;
    let mensalVar=0;
    let perfil=""

    if(idade<10){
        mensalVar=80;
        perfil="Plano conveniado com menos de 10 anos.";

    }else if (idade>=10 && idade<=30) {
        mensalVar=50;
        perfil="Plano conveniado entre 10 e 30 anos.";
    } else if(idade>30 &&idade<=60){
        mensalVar=95;
        perfil="Plano conveniado entre 30 e igual a 60 anos.";
    }else if(idade>60){
        mensalVar=130;
        perfil="Plano conveniado idade maior que 60 anos.";
    }

    return `${perfil} Valor do plano: R$ ${mensalFixo+mensalVar}. `;
}

console.log(planoDeSaude(10))
