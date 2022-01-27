{
    {
        {
            {var sera='Sera???'}
        }
    }
}

console.log(sera)//Variável fica visível fora do bloco de código.Escopo possível para o "var".

function teste(){
    var local = 123
}

teste()
console.log(local)//Não é possível acessar uma variável dentro de uma função (não visível).
//Evitar criar variáveis com escopo global para evitar sobrescritos.Dentro de funçao o var não é global.