
//Criar um objeto para apresnetar uma sequência

const sequence={
    _id:1,
    get id(){return this._id++}
}

const produtos={}

function salvarProduto(produto){

    if(!produto.id)produto.id=sequence.id //testa o produto se o mesmo possui id;
    produtos[produto.id]=produto//seta o id
    return produto

}

//pegar o produto por id:

function getProduto(id){

    return produtos[id] || {}
}


//Retornar todos os produto:
function getProdutos(){
    return Object.values(produtos)
}

module.exports={salvarProduto,getProduto,getProdutos}



