const quaseArray={0:'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)

//Usando método toStirng como se fosse um array através da definição de uma propriedade no objeto quaseArray:

Object.defineProperty(quaseArray,'toString',{//toString é uma função
    value:function(){return Object.values(this)},
    enumerable:false//A função não aparece na tela.
})

console.log(quaseArray[0])//Desde que os atributos sejam numéricos.

const meuArray=['Rafael','Ana','Bia']
console.log(quaseArray.toString(),meuArray)