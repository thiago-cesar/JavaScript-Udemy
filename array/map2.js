const carrinho=[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco":3.45}',
    '{"nome":"Caneta", "preco":7.50}'   
]


//Retornar um array apenas com os preços:


const paraObjeto=json=>JSON.parse(json)//transforma o array em JSON em um objeto para manipular com os atributos.
const apenasPreco=produto=>produto.preco//Pega apenas o atributo preco do object.

const resultado= carrinho.map(paraObjeto).map(apenasPreco)//O map necessita receber uma função(callback)

console.log(resultado)