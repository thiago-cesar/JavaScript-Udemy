function calculadora(num1,num2,operador){
    
    switch(operador){
        case '+':
            console.log('Soma= ',+ num1+num2)
            break;
        case '-':
            console.log('Subtração= ',+ num1-num2)
            break;
        case '*':
            console.log('Multiplicação= ',+ num1*num2)
            break;
        case '/':
            console.log('Divisão= ',+ num1/num2)
            break;
        default:
            console.log('Algum parâmetro está errado!')
    }
}

calculadora(1,2,'-')