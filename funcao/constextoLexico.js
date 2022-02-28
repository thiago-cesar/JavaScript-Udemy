const valor='Global'

function minhaFuncao(){
    console.log(valor)//busca no escopo maior-global
}

function exec(){
    const valor='Local'
    minhaFuncao()//vai buscar o "valor" de "fora", no local que a variável e funcção foram definidos.
}

exec()