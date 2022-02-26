function Pessoa(){
    this.idade=0;


    const self=this//substituir o this e acessar dentro da função.
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa