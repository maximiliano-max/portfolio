//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
/*function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = "");
    link.className = "";

    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción
    // en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// función que muestra/oculta el menú responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "responsive") {
        x.className = "";
    } else {
        x.className = "responsive";
    }
}*/

function responsiveMenu() {
    var x = document.getElementById("nav");
    var iconoNav = document.getElementById("icono-nav");

    if (x.className === "responsive") {
        x.className = "";
        iconoNav.classList.remove("abierto");
    } else {
        x.className = "responsive";
        iconoNav.classList.add("");
    }
}





