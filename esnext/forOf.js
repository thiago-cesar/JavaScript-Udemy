//Intera sobre valores.For In itera sobre índices

for(let letra of "Cod3r"){
    console.log(letra)
}//Iteraçao sobre valores-imprime na tela valores.


const assuntosEcma=['Map','Set','Promise']
for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntoMap=new Map([
    ['Map', {abordado:true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])


for(let assunto of assuntoMap){
    console.log(assunto)
}
//Precorrendo chaves
for(let chave of assuntoMap.keys()){
    console.log(chave)
}
//Precorrendo somente valores
for(let valor of assuntoMap.values()){
    console.log(valor)
}

//Destructuring

for(let [ch,vl] of assuntoMap.entries()){
    console.log(ch,vl)
}







