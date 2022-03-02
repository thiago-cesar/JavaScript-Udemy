const sequencia={
    _valor:1,// convenção 
    get valor(){return this._valor++},//permitir um acesso à variável e realizar operações antes de retrnar.
    set valor(valor){
        if(valor>this._valor){
            this._valor=valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor=1000;
console.log(sequencia.valor, sequencia.valor)