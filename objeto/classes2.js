class Avo{
    constructor(sobrenome){
        this.sobrenome=sobrenome
    }
}

class Pai extends Avo{//Relação de protótipo em classes(class).
    constructor(sobrenome,profissao='Professor'){
        super(sobrenome)//Instanciamento da função da super-classe e seu construtor.
        this.profissao=profissao
    }
    
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho=new Filho
console.log(filho)