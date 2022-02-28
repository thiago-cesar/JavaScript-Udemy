class Pessoa{
    constructor(nome){
        this.nome=nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

}


//Função Factory
const p1=new Pessoa('Joao')
p1.falar()

const criarPessoa=nome=>{
    return{
        falar: ()=>console.log(`Meu nome é ${nome}`)//escopo mais abrangente!
    }
}

const p2=criarPessoa('Maria')
p2.falar()