function actual(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();
    
    if(hora<10){
        hora ="0"+hora
    }
    if(minuto<10){
        minuto ="0"+minuto
    }
    if(segundo<10){
        segundo ="0"+segundo
    }

    miReloj = hora+ " : "+minuto+ " : " +segundo;
    return miReloj;
}

function actualizar(){
    miHora = actual();
    miReloj = document.getElementById("reloj");
    miReloj.innerHTML = miHora;
}

setInterval(actualizar,1000);

window.onload = function() { //tras cargar la página ...
    let visor1=document.getElementById("visor"); //referencia al visor
    let mititulo=document.getElementById("titulo"); //referencia al pie de foto
    }
    function mireloj(num) { //cambiar la imagen
             f="./img/reloj"+num+".jpg"; //ruta de la nueva imagen
             document.images["fotoVisor"].src=f; //cambiar imagen
             t=document.images["titulo"+num].alt; //texto de pie de foto
             mititulo.innerHTML=t; //cambiar pie de foto
    }