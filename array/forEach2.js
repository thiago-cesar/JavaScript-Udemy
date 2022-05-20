Array.prototype.forEach2=function(callback){//Atua em um objeto tipo array como um novo método.

    for(let i=0; i<this.length; i++){
        //this acessa uma array dentro de um prototype do array.

        callback(this[i], i, this)//elemento, índice e array.

    }
}



const aprovados=['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome, indice){//Passa na callback o item e o índice do item.O array é o terceiro parâmetro que pode ser passado na função callback.
    console.log(`${indice+1}) ${nome}`)
})


