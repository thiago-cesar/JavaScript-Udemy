//Exemplo de calback no BROWSER:

document.getElementsByTagName('body')[0].onclick=function(e){

    
    console.log('O evento ocorreu!!!!'+ this.e);
}

//A callback é registrada(ver padrão observer!) e quando chamada ela irá ser disparada e executada.