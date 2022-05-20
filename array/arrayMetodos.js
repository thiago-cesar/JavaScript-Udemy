const pilotos=['Vetel','Alonso','Raikkonen','Massa']

pilotos.pop()//Massa quebrou o carro...saiu da lista de pilotos.

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//Mesma função do pop porém, retira da primeira posição.
console.log(pilotos)

//Ao contrário do método shift(retirar)- unshift(insere no início).

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2,0,'Bottas','Massa')//Adicionar a partir do índice 2
console.log(pilotos)

pilotos.splice(3,1)//Remover 1 elemento a partir do 3 índice.
console.log(pilotos)


//Método slice(retorna um novo array)

const algunsPilotos1=pilotos.slice(2)//novo array.
console.log(algunsPilotos1)


const algunsPilotos2=pilotos.slice(1,4)//índice 4 não entra.
console.log(algunsPilotos2)