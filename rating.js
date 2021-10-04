var contador;


function calificar(puntos){
    contador=puntos.id[0];
    let nombre = puntos.id.substring(1);
    for(let i=0; i<5; i++){
        if(i<contador){
            document.getElementById((i+1)+nombre).style.opacity="100%";
        } else {
            document.getElementById((i+1)+nombre).style.opacity="50%";
        }
    }


}

function limpiar(){

        document.getElementById("1est").style.opacity="50%";
        document.getElementById("2est").style.opacity="50%";
        document.getElementById("3est").style.opacity="50%";
        document.getElementById("4est").style.opacity="50%";
        document.getElementById("5est").style.opacity="50%";
    
}

$("html").click(function() {
    limpiar();
});
$('#estrellas').click(function (e) {
    e.stopPropagation();
});
