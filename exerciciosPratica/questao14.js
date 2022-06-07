var arrObj = {id: 1, nome: "Matheus"}
 

function objetoParaArray(objeto){

    let arrayNovo= Object.entries(objeto)
    return arrayNovo
}

console.log(objetoParaArray(arrObj))