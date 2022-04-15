function valorPedido(produto, quantidade){

    switch(produto){
        case 100:
            console.log(`Seu pedido é/são ${quantidade} Cachorro(s) Quente(s).Valor total= R$ ${3*quantidade}.`);
            break;
        case 200:
            console.log(`Seu pedido é/são ${quantidade} Hamburguer(s) Simples.Valor total= R$ ${4*quantidade}.`);
            break;
        case 300:
            console.log(`Seu pedido é/são ${quantidade} Cheeseburguer(s).Valor total= R$ ${5.5*quantidade}.`);
            break;
        case 400:
            console.log(`Seu pedido é/são ${quantidade} Bauru(s).Valor total= R$ ${7.5*quantidade}.`);
            break;
        case 500:
            console.log(`Seu pedido é/são ${quantidade} Refrigerantes(s).Valor total= R$ ${3.5*quantidade}.`);
            break;
        case 600:
            console.log(`Seu pedido é/são ${quantidade} Suco(s).Valor total= R$ ${2.8*quantidade}.`);
            break;
        default:
            console.log('Produto inexistente.')

    }
}

valorPedido(600,5)