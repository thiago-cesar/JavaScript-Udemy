//Conversão de objeto em JSON.

const obj={a:1,b:2,c:3,soma(){return a+b+c}}
console.log(JSON.stringify(obj))//Convrsão para JSON- Arquivo de dados textual.Por isso que a função não aparece.

//console.log(JSON.parse("{a:1, b:2, c:3}"))

//console.log(JSON.parse("{'a':1,'b':2, 'c':3}"))
console.log(JSON.parse('{"a":1,"b":2, "c":3}'))//Objeto gerado a partir de um arquivo JSON.
console.log(JSON.parse('{"a":1.7, "b":"string", "c":true, "d":{}, "e":[]}'))//Atributos e strings devem estar delimitados por aspas duplas.

