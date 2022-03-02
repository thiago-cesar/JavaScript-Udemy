function classificaTriangulos(x,y,z){
    if(x===y && y===z){
        return 'Triângulo Equilátero-lados iguais!'
    }else if(x===y || x===z || y===z){
        return 'Triângulo Isóscele- Pelo menons dois lados iguais!'
    }else{
        return 'Triângulo Escalenos- Todos os lados são diferentes!'
    }
}

console.log(classificaTriangulos(3,3,3))
console.log(classificaTriangulos(3,3,2))
console.log(classificaTriangulos(1,2,3))