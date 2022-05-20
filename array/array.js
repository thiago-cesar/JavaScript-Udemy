console.log(typeof Array, typeof new Array, typeof [])

let aprovados= new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados=['Bia','Carlos',' Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]='Paulo'
aprovados.push('Abia')//Para adicionar novo elemento no array
console.log(aprovados.length)

aprovados[9]='Rafael'
console.log(aprovados.length)

console.log(aprovados[8]===undefined)
console.log(aprovados[8]===null)


console.log(aprovados)


aprovados.sort()//Ordena o array no original.
console.log(aprovados)

delete aprovados[1]//Exclui o item mas não ordena o array.

console.log(aprovados[1])
console.log(aprovados[2])

aprovados=['Bia','Carlos','Ana']
aprovados.splice(1, 1)//Remover/adicionar ou remover e adicionar um elemento no array pelo índice.
console.log(aprovados)

//Para adicionar elemento através do splice.

aprovados.splice(1,2,'Elemento1')
console.log(aprovados)






