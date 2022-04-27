
class Lancamento{
    constructor(nome='Genérico', valor=0){
        //Função chamada quando a classe é instanciada e transformada em função construtora.
        this.nome=nome
        this.valor=valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes=mes
        this.ano=ano
        this.lancamentos=[]
    }

    addLancamento(...lancamentos){
        lancamentos.forEach(l=>this.lancamentos.push(l))
    }

    sumario(){
      let valorConsolidado=0
      this.lancamentos.forEach(l=>{
          valorConsolidado+=l.valor
      })
      return valorConsolidado
        
    }
}

const salario=new Lancamento('Salario',45000)
const contaLuz=new Lancamento('Luz',-220)
const contas=new CicloFinanceiro(6,2018)
contas.addLancamento(salario,contaLuz)
console.log(contas.sumario())