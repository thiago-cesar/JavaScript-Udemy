function compras(trabalho1,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //ou
    const comprarTv50 = trabalho1 && trabalho2 //e
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //ou exclusivo(operador bit a bit)
    const comprarTv32 = trabalho1 != trabalho2 //ou exclusivo utilizando o operador de diferença.
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //chave omitida, o ECMAScript o objeto é criado com chave/valor inteligente sem redundância

}

console.log(compras(true,true))
console.log(compras(true,false))