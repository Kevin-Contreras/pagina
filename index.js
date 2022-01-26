var imagen = document.getElementById("menu");
var texto = document.getElementById("texto");


    if(window.screen.width>930){
        texto.style.display="block"
       
    }else{
    
        texto.style.display="none"
    }
    


contador=1;
function activar(event){
    if(window.screen.width<=930){
    if(contador%2==0){
        texto.style.display="none"
        
    }else{
        texto.style.display="block"
    }
    contador=contador+1;

    }
    
    
    
}
imagen.addEventListener("click",activar)
