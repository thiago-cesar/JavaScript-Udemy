const funcs =[]

for(let i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}
//Agora o let tem memória com array.
funcs[2]()
funcs[8]()