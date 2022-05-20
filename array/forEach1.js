//Forma de percorrer um array:

const aprovados=['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice){//Passa na callback o item e o índice do item.O array é o terceiro parâmetro que pode ser passado na função callback.
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome=>console.log(nome))//Não precisou do índice na callback.

//Também podemos armazena uma função numa variável:

const exibirAprovados=aprovado=>console.log(aprovado)
aprovados.forEach(exibirAprovados)

