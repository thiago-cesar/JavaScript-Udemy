//ES8: Object.values/Object.entries

const obj={a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal

const nome='Carla'

const pessoa={
    nome,
    ola(){
        return 'Oi gente!'
    }//não precisa colocar a palavra "function"
}

console.log(pessoa.nome, pessoa.ola())

//Classe


class Animal{}

class Cachorro extends Animal{
    falar(){
        return 'Au Au!'
    }
}

//criar uma instãncia de uma Classe:

console.log(new Cachorro().falar())