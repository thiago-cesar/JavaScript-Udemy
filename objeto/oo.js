//CÓDIGO NÃO EXECUTÁEL(CONCEITOS):

//Procedural-Trecho de códigos reutilizáveis através de funções(procedimentos).

processamento(valor1,valor2,valor3)//Função que manipula dados.

//O.O.-Dados que possuem funções(métodos).

objeto={
    valor1,//atributos
    valor2,
    valor3,
    processamento(){//métodos
        //...
    }
}


objeto.processamento()//A função pertence ao objeto e dentro deste é utilizado os valores para execução da função.Foco no objeto!

//Princípios importantes:

//1-Abstração-Traduzir objetos no mundo real de forma abstrata para o desenvolvimento no paradigma de O.O. e contexto do sistema.

//2-Encapsulamento- Detalhes de implementação escondidos dos usuários no objeto-atributos e métodos.Evita dependência (forte acoplamento) dos objetos.

//3- Herança(prototype)- Reutilização de códigos, respeitada as especificidades de cada objeto recebendo atributos e métodos do objeto "pai".JS permite apenas um único "pai"- cadeia de protótipos.PRIORIZE A COMPOSIÇÃO(TEM 1!) DO QUE HERANÇA(É 1!).

//4- Polimorfismo- Múltiplas formas.

