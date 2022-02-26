let comparaComThis=function(param){
    console.log(this===param);
}

comparaComThis(global);//opbjeto global no node.

const obj={}

comparaComThis=comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//testando o this em uma função arrow:

let comparaComThisArrow=param=>console.log(this===param)
comparaComThisArrow(global)//não é globalç no node em arrow function.

comparaComThisArrow=comparaComThisArrow.bind(obj)//testecom bind em mudança de contexto para o this.

comparaComThisArrow(obj)