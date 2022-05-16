function razaoIdades(altura1,altura2,tx1,tx2){

    let crianca1=altura1*tx1;
    let crianca2=altura2*tx2;
    var criancaMaior
    var criancaMenor

    let anos=1;
    if(crianca1>crianca2){
        criancaMaior=crianca1;
        criancaMenor=crianca2;
        while(criancaMenor<criancaMaior){
            for(anos;anos<=10;anos++){
                crianca1=crianca1*anos;
                crianca2=crianca2*anos;
                console.log(`Altura criança 1 :${crianca1} e Altura de criança 2: ${crianca2}.`) 
            }
             
        }
        console.log(`Criança  ultrapassou a criança 1 em ${anos} anos `)
    }else{
        criancaMaior=crianca2;
        criancaMenor=crianca1;

    }
  
}

console.log(razaoIdades(5,2,1,2.4))