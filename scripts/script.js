document.addEventListener('DOMContentLoaded', function () {
    var botonesRadio = document.querySelectorAll('.cabecera [role="radio"]');

    botonesRadio.forEach(function (boton) {
        boton.addEventListener('click', function () {
            botonesRadio.forEach(function (otroBoton) {
                otroBoton.setAttribute('aria-checked', 'false');
            });

            boton.setAttribute('aria-checked', 'true');
        });
    });
});

//--------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const listFoodsColumns = document.querySelector('.list-foods-columns');
    const arrowLeft = document.querySelector('.left-arrow');
    const arrowRight = document.querySelector('.right-arrow');

    arrowLeft.addEventListener('click', function () {
        scrollList(-100);
    });

    arrowRight.addEventListener('click', function () {
        scrollList(100);
    });

    function scrollList(amount) {
        const scrollAmount = listFoodsColumns.scrollLeft + amount;
        listFoodsColumns.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

//---------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const promosSlider = document.querySelector('.promos-slider');
    const cardWidth = promosSlider.offsetWidth / 4; // 4 tarjetas en total
    let currentIndex = 0;

    function scrollPromos() {
        currentIndex = (currentIndex + 1) % 4; // Actualizamos el índice de la tarjeta

        // Desplazamos a la siguiente tarjeta con una transición suave
        promosSlider.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    }

    // Intervalo para desplazar automáticamente cada 5 segundos
    setInterval(scrollPromos, 5000);
});

//Menú hamburguesa---------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var botonHamburguesa = document.getElementById('botonHamburguesa');
    var menuDesplegable = document.querySelector('.menu-desplegable');
    var fondoOscuro = document.querySelector('.fondo-oscuro');

    botonHamburguesa.addEventListener('click', function () {
        mostrarMenu();
    });

    // Cerrar el menú y ocultar el fondo oscuro al hacer clic en cualquier parte del fondo oscuro
    fondoOscuro.addEventListener('click', function () {
        ocultarMenu();
    });

    function mostrarMenu() {
        fondoOscuro.style.display = 'block';
        menuDesplegable.style.display = 'flex';

        // Obtener la posición del botón de hamburguesa
        var botonHamburguesaRect = botonHamburguesa.getBoundingClientRect();

        // Establecer la posición del menú desplegable en relación con la página
        menuDesplegable.style.top = botonHamburguesaRect.bottom + window.scrollY + 'px';

        // Establecer la altura del fondo oscuro al tamaño total de la página
        fondoOscuro.style.height = document.documentElement.scrollHeight + 'px';

        // Deshabilitar el desplazamiento del fondo oscuro
        document.body.style.overflow = 'hidden';

        // Agregar una clase para cambiar el fondo de la cabecera
        document.querySelector('.cabecera').classList.add('menu-abierto');
    }

    function ocultarMenu() {
        fondoOscuro.style.display = 'none';
        menuDesplegable.style.display = 'none';

        // Restaurar el desplazamiento del fondo oscuro
        document.body.style.overflow = 'auto';

        // Eliminar la clase para restaurar el fondo de la cabecera
        document.querySelector('.cabecera').classList.remove('menu-abierto');
    }
});





//--boton favoritos----------------------------------------



//--scroll cabecera----------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var cabecera = document.querySelector('.cabecera');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            cabecera.classList.add('scrolled');
        } else {
            cabecera.classList.remove('scrolled');
        }
    });
});












document.addEventListener('DOMContentLoaded', function () {
    // Obtener los contenedores de las secciones
    const seccionMayorCalificacion = document.querySelector('.cards-mayor-calificacion');
    const seccionMasPopulares = document.querySelector('.cards-mas-populares');
    const seccionMarcasNacionales = document.querySelector('.cards-marcas-nacionales');
    const seccionMarcasInternacionales = document.querySelector('.cards-marcas-internacionales');
  
    // Obtener los botones de flecha
    const flechaDerechaMayorCalificacion = document.querySelector('.seccion-mayor-calificacion .flecha-derecha');
    const flechaIzquierdaMayorCalificacion = document.querySelector('.seccion-mayor-calificacion .flecha-izquierda');
  
    const flechaDerechaMasPopulares = document.querySelector('.seccion-mas-populares .flecha-derecha');
    const flechaIzquierdaMasPopulares = document.querySelector('.seccion-mas-populares .flecha-izquierda');
  
    const flechaDerechaMarcasNacionales = document.querySelector('.seccion-marcas-nacionales .flecha-derecha');
    const flechaIzquierdaMarcasNacionales = document.querySelector('.seccion-marcas-nacionales .flecha-izquierda');
  
    const flechaDerechaMarcasInternacionales = document.querySelector('.seccion-marcas-internacionales .flecha-derecha');
    const flechaIzquierdaMarcasInternacionales = document.querySelector('.seccion-marcas-internacionales .flecha-izquierda');
  
    // Agregar escuchadores de clic a las flechas
    flechaDerechaMayorCalificacion.addEventListener('click', () => desplazarTarjetas(seccionMayorCalificacion, 'derecha'));
    flechaIzquierdaMayorCalificacion.addEventListener('click', () => desplazarTarjetas(seccionMayorCalificacion, 'izquierda'));
  
    flechaDerechaMasPopulares.addEventListener('click', () => desplazarTarjetas(seccionMasPopulares, 'derecha'));
    flechaIzquierdaMasPopulares.addEventListener('click', () => desplazarTarjetas(seccionMasPopulares, 'izquierda'));
  
    flechaDerechaMarcasNacionales.addEventListener('click', () => desplazarTarjetas(seccionMarcasNacionales, 'derecha'));
    flechaIzquierdaMarcasNacionales.addEventListener('click', () => desplazarTarjetas(seccionMarcasNacionales, 'izquierda'));
  
    flechaDerechaMarcasInternacionales.addEventListener('click', () => desplazarTarjetas(seccionMarcasInternacionales, 'derecha'));
    flechaIzquierdaMarcasInternacionales.addEventListener('click', () => desplazarTarjetas(seccionMarcasInternacionales, 'izquierda'));
  
    // Función para desplazar las tarjetas
    function desplazarTarjetas(seccion, direccion) {
      // Obtener el ancho de una tarjeta (asumo que todas las tarjetas tienen el mismo ancho)
      const tarjetaAncho = seccion.querySelector('.card').offsetWidth;
  
      // Obtener la cantidad de tarjetas que se deben desplazar
      const cantidadDesplazamiento = direccion === 'derecha' ? 1 : -1;
  
      // Calcular la nueva posición de desplazamiento
      let nuevaPosicion = seccion.scrollLeft + cantidadDesplazamiento * tarjetaAncho;
  
      // Asegurarse de que la posición no sea menor que cero o mayor que el ancho total de las tarjetas
      nuevaPosicion = Math.max(0, Math.min(nuevaPosicion, seccion.scrollWidth - seccion.clientWidth));
  
      // Aplicar el desplazamiento
      seccion.scrollTo({
        left: nuevaPosicion,
        behavior: 'smooth', // Puedes quitar esto si no quieres una animación suave
      });
    }
  });
  