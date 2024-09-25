document.addEventListener("DOMContentLoaded", function() {
    // Obtener la URL actual
    const currentPage = window.location.pathname;

    // Seleccionar los divs del menú
    const inicio = document.getElementById("inicio");
    const nosotros = document.getElementById("nosotros");
    const productos = document.getElementById("productos");
    const contacto = document.getElementById("contacto");

    // Comparar la URL y agregar la clase 'active' al div correcto
    if (currentPage.includes("index.html")) {
        inicio.classList.add("active");
    } else if (currentPage.includes("nosotros.html")) {
        nosotros.classList.add("active");
    } else if (currentPage.includes("productos.html")) {
        productos.classList.add("active");
    } else if (currentPage.includes("contacto.html")) {
        contacto.classList.add("active");
    }
});

let swiper;
const activateSwiper = () => {
    if (window.innerWidth <= 768 && !swiper) {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
};
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Habilitar bucle
        autoplay: {
            delay: 5000, // Tiempo entre transiciones
            
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
window.addEventListener('resize', activateSwiper);
activateSwiper();

// Selecciona todos los botones de info
const infoButtons = document.querySelectorAll('.info-btn');

// Añade un evento de clic a cada botón
infoButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Selecciona el overlay asociado al producto (el div padre)
    const overlay = this.closest('.producto').querySelector('.overlay');
        
    
    // Alterna la clase 'show' para mostrar/ocultar el overlay
    overlay.classList.toggle('show');
  });
});

document.addEventListener('click', function(event) {
    const overlay = document.querySelector('.overlay.show');
    const clickedInside = event.target.closest('.producto');

    if (overlay && !clickedInside) {
        overlay.classList.remove('show'); // Cierra el overlay
    }
});



