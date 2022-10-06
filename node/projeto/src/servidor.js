

const porta = 3003

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
//import de bd

const bancoDeDados=require('./bancoDeDados')

//app.use(bodyParser.urlencoded({extended:true}))
//Tratando o bodyParse:
app.use(express.json());
app.use(express.urlencoded({//Middleware que realiza na aplicação com forms do tipo form-urlencoded.Transofrmação em um objet paramanipular no servidor.Corpo da requisiçaõ em objeto.
  extended: true
}))


app.get('/produtos',(req,res)=>{//envia requisição 'get'.
    res.send(bancoDeDados.getProdutos())//resposta.Converte para JSON(PELO MÉTODO 'send').

})

app.get('/produtos/:id', (req,res,next)=>{//Obter informação do servidor.Traz num produto específico

    res.send(bancoDeDados.getProduto(req.params.id))//param dos parâmetos contidos na URL.

})

//Submeter os dados e salvar um novo produto.
app.post('/produtos', (req,res,next)=>{
    const produto=bancoDeDados.salvarProduto({//Salvando o produto no banco de dados em memmória.
        nome: req.body.nome,//nome a partir de um corpo de uma requisição
        preco: req.body.preco
    })

    //retorno dos dados salvos:

    response.send(produto())//CONVERTE PARA JSON.
})


//Onde será escutada a requisição:
app.listen(porta, ()=>{
    console.log(`Servidor esta executando na porta ${porta}.`)
})



