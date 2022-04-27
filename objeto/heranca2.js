//Criando uma cadeia de protótipo


Object.prototype.attr0='Z'//Não recomendável.


const avo={attr1:'A'}//Seu protótipo é Object.prototype.
const pai={__proto__:avo, attr2:'B'}
const filho={__proto__:pai,attr3:'C'}

console.log(filho.attr1)//Busca o atributo no objeto "pai" até encontrar o atributo buscado.
console.log(filho.attr0)
console.log(pai.attr3)//Não há herança de classe "filho" para classe "pai".



const carro={
    velAtual:0,
    velMax:200,
    aceleraMais(delta){
        if(this.velAtual+delta<=this.velMax){
            this.velAtual+=delta
        }else{
            this.velAtual=this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari={
    modelo:'F40',
    velMax:324//Shadowing-sombreamento da variável do protótipo.
}


const volvo={
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`//"super" para referenciar o método do protótipo.
    }
}

Object.setPrototypeOf(ferrari, carro)//Para referenciar o protótipo do objeto ferrari.
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())