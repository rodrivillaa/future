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

window.addEventListener('resize', activateSwiper);
activateSwiper();