//usando a forma literal:

const obj1={

}
console.log(obj1)

//Object em JS:

console.log(typeof Object, typeof new Object);
const obj2=new Object
console.log(obj2)

//Funções construtoras

function Produto(nome,preco,desc){
    this.nome=nome//variável visível de forma global.
    //preço e desconto ficam encapsulados.
    this.getPrecoComDesconto=()=>{//Método visível a partir da instância
        return preco*(1-desc);//variáveis não disponíveis.

    }

}

const p1=new Produto('Caneta',7.99,0.15)
const p2=new Produto('Notebook',2998.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())


//Criando objetos pela função factory:


function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30)*(30-faltas)
        }
    }
}

const f1=criarFuncionario('João',7980,4);
const f2=criarFuncionario('Maria',11400,1);
console.log(f1.getSalario(),f2.getSalario());

//Object.create

const filha=Object.create(null);
filha.nome='Ana';
console.log(filha);

//Uma função famosa que retirna Objeto....JSON em um objeto:

const fromJSON=JSON.parse('{"info":"Sou um JSON!"}')//Transforma um doc JSON de um webservice em objeto para manipulação de dados.
console.log(fromJSON.info)



