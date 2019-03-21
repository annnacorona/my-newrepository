var miImage = document.querySelector('img');
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');


miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'imagenes/playa.jpg') {
      miImage.setAttribute('src','imagenes/tulum.jpg');
    } else {
      miImage.setAttribute('src', 'imagenes/playa.jpg');
    }
}

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'BIENVENIDO ' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'BIENVENIDO ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}