document.addEventListener('DOMContentLoaded', function() {
    var mensajeInicioSesion = document.getElementById('mensaje-inicio-sesion');
    mensajeInicioSesion.classList.add('oculto');
});
function verificarEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    // Utiliza una expresión regular para verificar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        // Muestra el mensaje de inicio de sesión
        var mensajeInicioSesion = document.getElementById('mensaje-inicio-sesion');
        mensajeInicioSesion.classList.remove('oculto');
    }
}

// Función para cerrar el mensaje
function cerrarMensaje() {
    var mensajeInicioSesion = document.getElementById('mensaje-inicio-sesion');
    mensajeInicioSesion.classList.add('oculto');
}
// Función para abrir el mensaje
function abrirMensaje() {
    var mensajeInicioSesion = document.getElementById('mensaje-inicio-sesion');
    mensajeInicioSesion.classList.remove('oculto');
}

//funcion para alternar entre funcion abrir o cerrar mensaje
function alternarMensaje() {
    var mensajeInicioSesion = document.getElementById('mensaje-inicio-sesion');
    if (mensajeInicioSesion.classList.contains('oculto')) {
        mensajeInicioSesion.classList.remove('oculto');
    }
    else {
        mensajeInicioSesion.classList.add('oculto');
    }
}