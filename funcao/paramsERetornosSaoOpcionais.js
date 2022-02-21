function area(largura ,altura){
    const area=largura*altura;
    if(area>20){
        console.log(`Valor acima do permitido: ${area}m2.`);
    }else{
        return area;
    }
}

console.log(area(2,2));
console.log(area());
console.log(area(2,3,17,25));//Considera apenas o dois primeiros parâmetros.
console.log(area(10,10))//cuidado ao fazer mais de um "retorno".