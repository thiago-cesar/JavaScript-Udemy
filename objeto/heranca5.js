console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Podemos adicionar funcoes dentro das classe de funções utilizando prototype.

String.prototype.reverse=function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first=function(){
    return this[0]
}

console.log([1,2,3,4,5].first())

//Sobrescrevendo um comportamento que já existe:

/*String.prototype.toString=function(){
  return 'Lascou tudo'  
}
console.log('Escola Cod3r'.reverse())//CUIDADO EM SUBSTITUIR COMPORTAMENTOS QUE JÁ EXISTEM!!!!!!!*/




