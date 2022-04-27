const pai={
    nome:'Pedro',
    corCabelo:'preto'
}

const filha1=Object.create(pai)//Cria um objeto "filha" e como protótipo tem o objeto "pai".

filha1.nome='Ana'

console.log(filha1.corCabelo)

const filha2=Object.create(pai,{
    nome:{value:'Bia', writable:false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome='Carla'

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))//"keys" Aparece apenas os atributos do objeto sem os atributos herdados.
console.log(Object.keys(filha2))

//Imprimindo todos os atributos:

for(let key in filha2){
    //console.log(key)
    filha2.hasOwnProperty(key)?//Retorna verdadeiro se não for herança.
        console.log(key): console.log(`Por herança: ${key}`)//Verificar se o atributo pertence ao próprio objeto ou retornou por herança.
}



