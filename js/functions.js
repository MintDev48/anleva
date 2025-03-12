document.addEventListener('DOMContentLoaded', function() {
    var yearElement = document.getElementById('year');
    var currentYear = new Date().getFullYear();
    yearElement.innerHTML = `&copy; ${currentYear} ANLEVA. Todos los derechos reservados.`;
});


   // JavaScript para el efecto de máquina de escribir
   const text = "ANLEVA";
   const typingSpeed = 150; // Tiempo en milisegundos entre cada letra
   let index = 0;

   function typeWriter() {
     if (index < text.length) {
       document.getElementById("typewriter-text").textContent += text.charAt(index);
       index++;
       setTimeout(typeWriter, typingSpeed);
     } else {
       // Opcional: reiniciar la animación después de un tiempo
       setTimeout(() => {
         document.getElementById("typewriter-text").textContent = "";
         index = 0;
         typeWriter();
       }, 2000); // Tiempo en milisegundos antes de reiniciar la animación
     }
   }

   typeWriter(); // Inicia la animación



   document.addEventListener('DOMContentLoaded', function() {
    // Configuración del Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase 'visible' cuando el elemento entra en el viewport
                entry.target.classList.add('visible');
                // Dejar de observar el elemento una vez que sea visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Opciones del Intersection Observer
        root: null, // Intersecta con el viewport
        rootMargin: '0px', // Margen alrededor del root
        threshold: 0.1 // Porcentaje de visibilidad para activar el callback
    });

    // Seleccionar los elementos que se deben observar
    const elementsToAnimate = document.querySelectorAll('.fade-slide-up, .fade-slide-left, .fade-slide-right');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Mostrar el botón cuando se hace scroll hacia abajo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Mostrar el botón después de 300px de scroll
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // Desplazar suavemente hacia arriba cuando se hace clic en el botón
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});
