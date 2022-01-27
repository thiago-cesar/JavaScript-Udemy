//Resultado dos relacionais serão valores lógicos-F or V.

console.log('01)', '1'==1)//Comparação apenas de valor e não de tipo(typeof).

console.log('02)', '1'===1)//Comparação estrita (valor e tipo).

console.log('03)', '3'!=3)//Diferente?

console.log('04)', '3'!==3)

console.log('05)', 3<2)
console.log('06)', 3>2)
console.log('07)', 3<=2)
console.log('08)', 3>=2)

const d1=new Date(0)//01/01/1970.
const d2=new Date(0)
console.log('09)', d1===d2)//Compara os enedereços de memórias, pois d1 e d2 são objetos.
console.log('10)', d1==d2)
console.log('11)', d1.getTime()===d2.getTime())//Mesmo tipo e mesmo valores.
console.log('12)', undefined==null)
console.log('13)', undefined===null)

//a igualdade('==') ignora a compração de tipos(typeof).





