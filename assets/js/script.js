// Funciones para controlar el carrusel
function nextSlide() {
    myCarousel.next();
}

function prevSlide() {
    myCarousel.prev();
}

// Eventos para los botones de control del carrusel
document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);


// Seleccionamos el formulario
const form = document.querySelector('form');

// Agregamos un event listener para el evento submit
form.addEventListener('submit', function (event) {
    // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    event.preventDefault();

    // Mostramos un mensaje de confirmación
    alert('¡Gracias por contactarnos! Nos comunicaremos contigo pronto. ');
});
