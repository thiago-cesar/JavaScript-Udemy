const pessoa={
    saudacao:'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
    
}

pessoa.falar()

const falar=pessoa.falar;
falar();//consflito de paradigmas funcional e OO.

//resolvendo othis com bind()

const falarDePessoa=pessoa.falar.bind(pessoa);
falarDePessoa()

