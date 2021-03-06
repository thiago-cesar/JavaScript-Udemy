function getPreco(imposto=0, moeda='R$'){
    return `${moeda} ${this.preco*(1-this.desc)*(1+imposto)}`
}

const produto={
    nome:'Notebook',
    preco:4500.89,
    desc:0.15,
    getPreco//Acessa as variáveis do escopo global, se houver.
}


global.preco=20
global.desc=0.1
console.log(getPreco())
console.log(produto.getPreco())//Executa o escopo local do objeto.


const carro={preco:49990,desc:0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro,0.17,'$'))//foram passados a Classe e os parâmetros da função "getPreco" do getPreco.

console.log(getPreco.apply(carro,[0.17,'$']))//No apply é passado os parâmetros da função "getPreco" em um array!
console.log(getPreco.apply(global,[0.17,'$']))//No apply é passado os parâmetros em um array!


