function meuObjeto(){}

console.log(meuObjeto.prototype)


//Criando um objeto através de função e verificando se é possível realizar a herança.
const obj1=new meuObjeto//Função construtora.
const obj2=new meuObjeto

console.log(obj1.__proto__===obj2.__proto__)//Apontam ppara o mesmo objeto?

console.log(meuObjeto.prototype===obj1.__proto__)

//Quando criamos um objeto através de uma função e do termo "new" a função aponta para o atributo protyupe da função.

meuObjeto.prototype.nome='Anônimo'//Inserir um atrubuto no objeto prototype "meuObjeto"
console.log(obj1.nome)
meuObjeto.prototype.falar=function(){
    console.log(`Bom dia Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome='Rafael'
obj2.falar()



const obj3={}

obj3.__proto__=meuObjeto.prototype
obj3.nome='Obj3'
obj3.falar()

//Resumindo...


console.log((new meuObjeto).__proto__===meuObjeto.prototype)
console.log(meuObjeto.__proto__===Function.prototype)
console.log(Function.prototype.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)//Cadeia final de protótipos.Existe mas não aponta para mais nada!@


