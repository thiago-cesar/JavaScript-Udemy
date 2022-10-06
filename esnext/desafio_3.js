const fs=require('fs')
const path=require('path')



function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())

        })
        //console.log(('Depois de ler...'))//enquanto o conteudo nao é lido, a função imprime na tela esse console.
    })
}


const caminho=path.join(__dirname,'dados.txt')

lerArquivo(caminho)
    .then(conteudo=>conteudo.split('\n\n'))//Separando as linhas do arquivo.
    .then(linhas=>linhas.join(','))//separando por vírgulas, as linhas
    .then(conteudo=> console.log(`O valor final é: ${conteudo}`))
    